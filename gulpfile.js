'use strict';

const argv               = require('minimist')(process.argv.slice(2));

const ENV                = (argv.env || 'DEV').toUpperCase();

const gulp               = require('gulp');
const $                  = require('gulp-load-plugins')();
const nunjucks           = require('nunjucks');
const ComponentExtension = require('nunjucks-luego-component-extension');
const GetData            = require('luego-get-data');
const rimraf             = require('rimraf');
const browserSync        = require('browser-sync');
const reload             = browserSync.reload;

const fs                 = require('fs');
const path               = require('path');

const dir = {
    src: 'src',
    dest: 'build',

    tmp: '.tmp',
    templates: '.templates',
    components: '.components',
    data: '.data',
    dataCache: '.data-remote',
};

const paths = {
    src: {
        scripts: [
            `${dir.src}/assets/scripts/vendor/compatibility/modernizr-custom.js`,
            `${dir.src}/assets/scripts/vendor/compatibility/respond.src.js`,

            `${dir.src}/assets/scripts/vendor/jquery/jquery-3.4.1.min.js`,
            `${dir.src}/assets/scripts/vendor/jquery/jquery-migrate-3.0.1.min.js`,
            `${dir.src}/assets/scripts/vendor/jquery/jquery.waitforimages.js`,
            `${dir.src}/assets/scripts/vendor/jquery/jquery.scrolldepth.min.js`,
            `${dir.src}/assets/scripts/vendor/jquery/jquery.mobile.custom.min.js`,
            `${dir.src}/assets/scripts/vendor/jquery/slick.min.js`,

            `${dir.src}/assets/scripts/vendor/greensock-js/TweenMax.js`,
            `${dir.src}/assets/scripts/vendor/greensock-js/easing/EasePack.js`,
            `${dir.src}/assets/scripts/vendor/greensock-js/plugins/ScrollToPlugin.js`,
            `${dir.src}/assets/scripts/vendor/greensock-js/plugins/DrawSVGPlugin.js`,
            `${dir.src}/assets/scripts/vendor/greensock-js/utils/SplitText.js`,

            `${dir.src}/assets/scripts/vendor/scrollmagic/ScrollMagic.min.js`,
            `${dir.src}/assets/scripts/vendor/scrollmagic/plugins/animation.gsap.min.js`,

            `${dir.src}/assets/scripts/vendor/luego/Is.js`,
            `${dir.src}/assets/scripts/vendor/luego/IsOnScreen.js`,
            `${dir.src}/assets/scripts/vendor/luego/Animator.main.js`,
            `${dir.src}/assets/scripts/vendor/luego/Animator.effects.js`,
            // `${dir.src}/assets/scripts/vendor/luego/Player.js`,
            `${dir.src}/assets/scripts/vendor/luego/Share.js`,
            `${dir.src}/assets/scripts/vendor/luego/SvgFix.js`,
            `${dir.src}/assets/scripts/vendor/luego/SpriteSheet.babel.js`,
            `${dir.src}/assets/scripts/vendor/luego/Navigation.babel.js`,

            `${dir.src}/assets/scripts/component.babel.js`,
            `${dir.src}/${dir.components}/**/*.js`,

            // `${dir.src}/assets/scripts/player.babel.js`,
            `${dir.src}/assets/scripts/main.babel.js`,
            `${dir.src}/assets/scripts/tracking.babel.js`,
        ],
        images: {
            sprites: `${dir.src}/assets/images/sprites/*`,
            normal: [
                `${dir.src}/assets/images/**/*`,
                `!${dir.src}/assets/images/sprites/`,
                `!${dir.src}/assets/images/sprites/**/*`,
            ],
        },
        styles: [
            `${dir.src}/assets/styles/main.less`,
            `${dir.src}/${dir.components}/**/*.less`,
        ],
        fonts: [
            `${dir.src}/assets/styles/_fonts.less`
        ],
        html: [
            `${dir.src}/**/*.html`,
            `!${dir.src}/cms/**/*`,
        ],
        copy: [
            `${dir.src}/**/*`,
            `${dir.src}/**/.htaccess`,
            `${dir.src}/**/.gitkeep`,
            `!${dir.src}/**/@*`,
            `!${dir.src}/**/*.html`,
            `!${dir.src}/assets/scripts/**/*`,
            `!${dir.src}/assets/styles/**/*`,
            `!${dir.src}/assets/images/**/*`,
        ],
    },
    dest: {
        scripts: `${dir.dest}/assets/scripts`,
        images: `${dir.dest}/assets/images`,
        styles: `${dir.dest}/assets/styles`,
        html: dir.dest,
        copy: dir.dest,
        tmp: `${dir.src}/${dir.tmp}`,
    },
    watch: {
        scripts: [
            `${dir.src}/assets/scripts/**/*`,
            `${dir.src}/${dir.components}/**/*.js`,
        ],
        images: `${dir.src}/assets/images/**/*`,
        styles: [
            `${dir.src}/assets/styles/**/*`,
            `${dir.src}/${dir.components}/**/*.{css,less}`,
        ],
        html: [
            `${dir.src}/**/*.html`,
            `${dir.src}/${dir.templates}/**/*.html`,
            `${dir.src}/${dir.components}/**/*.html`,
            `${dir.src}/${dir.data}/**/*.js`,
            `!${dir.src}/cms/**/*`
        ],
        copy: [
            `${dir.src}/**/*`,
            `${dir.src}/**/.htaccess`,
            `!${dir.src}/**/@*`,
            `!${dir.src}/**/*.html`,
            `!${dir.src}/assets/scripts/**/*`,
            `!${dir.src}/assets/styles/**/*`,
            `!${dir.src}/assets/images/**/*`,
        ],
    },
};

// PostCSS Plugins
const AUTOPREFIXER_BROWSERS = [
    'ie >= 8',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.2',
    'bb >= 10'
];

const rucksack      = require('rucksack-css');
const autoprefixer  = require('autoprefixer')(AUTOPREFIXER_BROWSERS);
const cssnano       = require('cssnano');

const base                = path.normalize(`${__dirname}/${dir.src}/`);
const baseDataLocal       = path.normalize(`${base}${dir.data}`);
const baseDataRemoteCache = path.normalize(`${base}${dir.dataCache}`);
const baseDataRemote      = (argv.remote || '').replace(/\/+$/, '');

const buildHtml = async function buildHtml() {
    if (baseDataRemote) {
        rimraf.sync(baseDataRemoteCache);
    }

    delete require.cache[require.resolve(path.normalize(`${baseDataLocal}/global.PROD.js`))];
    const dataGlobal          = await GetData(`global.${ENV}`, baseDataLocal, baseDataRemote, baseDataRemoteCache);

    const nunjucksEnv         = new nunjucks.Environment(new nunjucks.FileSystemLoader(dir.src));
    nunjucksEnv.addExtension('ComponentExtension', new ComponentExtension(nunjucks, nunjucksEnv));

    const gulpData = async (file) => {
        if (typeof file.data !== 'undefined') return file.data;

        const cacheId      = Date.now();

        const dataFilename = file.path.replace(base, '').replace(/\.html$/, '');
        const pageId       = dataFilename.replace(/\//g, '_').replace(/\\/g, '_');
        const data         = await GetData(dataFilename, baseDataLocal, baseDataRemote, baseDataRemoteCache);

        let canonical      = dataFilename.replace(/\\/g, '/');
        canonical          = canonical.split('/');
        canonical.pop();

        canonical          = canonical.join('/');
        canonical          = dataGlobal.base+(canonical ? canonical+'/' : '');

        return Object.assign({}, dataGlobal, { canonical, pageId, cacheId }, data);
    };

    gulp.src(paths.src.html)
        .pipe($.plumber())
        .pipe($.data(gulpData))
        .pipe($.shadowFiles({base: base}))
        .pipe($.data(gulpData))
        .pipe($.nunjucks.compile({}, { env: nunjucksEnv }))
        .pipe($.htmlmin({ collapseWhitespace: true, conservativeCollapse: true }))
        .pipe($.plumber.stop())
        .pipe($.size({ title: 'html' }))
        .pipe(gulp.dest(paths.dest.html));
};

const buildScripts = function buildScripts() {
    return gulp.src(paths.src.scripts)
        .pipe($.plumber())
        .pipe($.luegoComponentScripts())
        .pipe($.sourcemaps.init())
        .pipe($.if('*.babel.js', $.babel({ presets: ['@babel/env'] })))
        .pipe($.cache($.uglify()))
        .pipe($.concat('main.min.js'))
        .pipe($.sourcemaps.write('.'))
        .pipe($.plumber.stop())
        .pipe($.size({ title: 'scripts' }))
        .pipe(gulp.dest(paths.dest.scripts))
        .pipe($.if(reload, reload({stream: true})));
};

const buildFontStyles = function buildStyles() {
    return gulp.src(paths.src.fonts)
        .pipe($.plumber())
        .pipe($.concat('fonts.min.css'))
        .pipe($.less({ paths: [path.dirname(paths.src.fonts[0])] }))
        .pipe($.postcss([rucksack, autoprefixer, cssnano({ safe: true })]))
        .pipe($.plumber.stop())
        .pipe($.size({ title: 'styles' }))
        .pipe(gulp.dest(paths.dest.styles));
};

const buildStyles = function buildStyles() {
    return gulp.src(paths.src.styles)
        .pipe($.plumber())
        .pipe($.luegoComponentStyles())
        .pipe($.sourcemaps.init())
        .pipe($.concat('main.min.css'))
        .pipe($.less({ paths: [path.dirname(paths.src.styles[0])] }))
        .pipe($.postcss([rucksack, autoprefixer, cssnano({ safe: true })]))
        .pipe($.sourcemaps.write('.'))
        .pipe($.plumber.stop())
        .pipe($.size({ title: 'styles' }))
        .pipe(gulp.dest(paths.dest.styles));
};

const buildImagesSprites = function buildImagesSprites() {
    return gulp.src(paths.src.images.sprites + '.{jpg,png,svg}')
        .pipe($.plumber())

        .pipe($.spriteByExt())

        // Minify only SVGs before SpryteByExt create a Symbol
        .pipe($.if('*.svg', $.cache($.imagemin([
            $.imagemin.svgo({ plugins: [{ removeViewBox: false }, { removeDimensions: true }, { cleanupIDs: false }] })
        ], { verbose: true }))))

        // Ignore SVGs files
        .pipe($.if(['*', '!*.svg'], $.cache($.imagemin([
            $.imagemin.gifsicle({ interlaced: true }),
            $.imagemin.jpegtran({ progressive: true}),
            $.imagemin.optipng({ optimizationLevel: 5 }),
        ], { verbose: true }))))
        .pipe($.plumber.stop())
        .pipe($.size({ title: 'images:sprites' }))
        .pipe($.if(['*.css', '*.svg'], gulp.dest(paths.dest.tmp), gulp.dest(paths.dest.images)));
};

const buildImages = function buildImages() {
    return gulp.src(paths.src.images.normal)
        .pipe($.plumber())
        // .pipe($.cache($.imagemin([
        //     $.imagemin.gifsicle({ interlaced: true }),
        //     $.imagemin.jpegtran({ progressive: true}),
        //     $.imagemin.optipng({ optimizationLevel: 5 }),
        //     $.imagemin.svgo({ plugins: [{ removeViewBox: true }, { cleanupIDs: false }] })
        // ], { verbose: true })))
        .pipe($.plumber.stop())
        .pipe($.size({title: 'images'}))
        .pipe(gulp.dest(paths.dest.images));
};

const buildClear = function buildClear() {
    return gulp.src([dir.dest, dir.tmp], { dot: true, allowEmpty: true })
        .pipe($.clean({ force: true }))
        .pipe($.size({ title: 'clear' }));
};

const buildCopy = function buildCopy() {
    return gulp.src(paths.src.copy)
        .pipe($.size({ title: 'copy' }))
        .pipe(gulp.dest(paths.dest.copy));
};

const cacheClear = function cacheClear() {
    return $.cache.clearAll();
};

const remoteClear = function remoteClear(cb) {
    const base                = path.normalize(`${__dirname}/${dir.src}/`);
    const baseDataRemoteCache = path.normalize(`${base}${dir.dataCache}`);

    rimraf(baseDataRemoteCache, cb);
};

const buildWatch = function buildWatch() {
    browserSync({
        notify: false,
        logPrefix: 'WSK',
        server: './build/',
        open: 'local'
    });

    let onChange = (_path, stats) => {
        console.log('File '+_path+' was changed, running tasks...');

        if (_path.indexOf(dir.data) > -1 || path.extname(_path) !== '.js') {
            reload(_path);
        }
    };

    let onChangeRemove = (path, stats) => {
        console.log('File '+e.path+' was removed, running tasks...');

        let filename = e.path.replace(__dirname+path.sep+dir.src, __dirname+path.sep+dir.dest);
        fs.unlink(filename);

        reload(e);
    };

    const htmlWatcher = gulp.watch(paths.watch.html,    gulp.series('build:html'));
    const scriptsWatcher = gulp.watch(paths.watch.scripts, gulp.series('build:scripts'));
    const stylesWatcher = gulp.watch(paths.watch.styles,  gulp.series('build:styles'));
    const imagesWatcher = gulp.watch(paths.watch.images,  gulp.series('build:images', 'build:styles'));
    const copyWatcher = gulp.watch(paths.watch.copy,  gulp.series('build:copy'));

    scriptsWatcher.on('change', onChange);
    stylesWatcher.on('change', onChange);

    htmlWatcher
        .on('unlinkDir', onChangeRemove)
        .on('change', onChange);

    imagesWatcher
        .on('unlinkDir', onChangeRemove)
        .on('change', onChange);

    copyWatcher
        .on('unlinkDir', onChangeRemove)
        .on('change', onChange);
};

const remoteMock = async function remoteMock() {
    const data = (({ recipes }) => ({ receitas: recipes }))
                    (await GetData(`global.${ENV}`, baseDataLocal));

    const jsonServer = require('json-server');
    const server = jsonServer.create();
    const router = jsonServer.router(data);
    const middlewares = jsonServer.defaults();

    router.render = (req, res) => {
        const isShadowDom = req.originalUrl.includes('@');
        const param = req.originalUrl.replace(/.*@([^/]+).*/, '$1');
        const data = {};

        if (isShadowDom) {
            data[`@${param}`] = res.locals.data.map((item) => item[param]);
            res.jsonp(data);
        } else {
            data.item = res.locals.data[0];
            res.jsonp(data);
        }
    };

    server.use(jsonServer.rewriter({
        '/:resource/@:param/index': '/:resource/',
        '/:resource/:slug/index': '/:resource/?slug=:slug',
    }));

    server.use(middlewares);
    server.use(router);

    server.listen(3100, () => {
      console.log('JSON Server is running on http://localhost:3100/');
    });
};

gulp.task('build:html', buildHtml);
gulp.task('build:scripts', buildScripts);
gulp.task('build:styles:fonts', buildFontStyles);
gulp.task('build:styles', buildStyles);
gulp.task('build:images:sprites', buildImagesSprites);
gulp.task('build:images', gulp.series('build:images:sprites', buildImages));
gulp.task('build:clear', buildClear);
gulp.task('build:copy', buildCopy);
gulp.task('cache:clear', cacheClear);
gulp.task('remote:clear', remoteClear);
gulp.task('remote:mock', remoteMock);
gulp.task('watch', buildWatch);

const build = gulp.series('build:clear', gulp.parallel('build:images', 'build:copy', 'build:scripts'), 'build:styles:fonts', 'build:styles', 'build:html');
gulp.task('build', build);

const watch = gulp.series('build', 'watch');
gulp.task('serve:build', watch);

gulp.task('default', build);
