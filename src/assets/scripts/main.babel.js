const $window   = $(window);
const $document = $(document);
const $body     = $('body');

let wW          = $window.outerWidth();
let wH          = $window.outerHeight();
let dH          = $document.outerHeight();

let canScroll;
let scrollPos = $window.scrollTop();
let scrollAni = false;

if (Is.mobile.ANY()) {
    $body.addClass('mobile');
} else {
    $body.addClass('desktop');
}

if (Is.desktop.MAC()) {
    $body.addClass('mac');
}

if (Is.desktop.IE()) {
    $body.addClass('ie');
}

if (Is.desktop.IE10()) {
    $body.addClass('ie10');
}

if (Is.desktop.IE11()) {
    $body.addClass('ie11');
}

if (Is.desktop.EDGE()) {
    $body.addClass('edge');
}

if (Is.desktop.CHROME()) {
    $body.addClass('chrome');
}

if (Is.desktop.FIREFOX()) {
    $body.addClass('firefox');
}

if (Is.desktop.SAFARI()) {
    $body.addClass('safari');
}

const hasPassiveEvents = (function () {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
        let passive = false;

        const options = Object.defineProperty({}, 'passive', {
            get() { passive = true; },
        });

        const noop = () => {};
        window.addEventListener('testPassiveEventSupport', noop, options);
        window.removeEventListener('testPassiveEventSupport', noop, options);
        return passive;
    }
})();

$document.on('preloaded.after', function () {
    $window
        .on('scroll', function () {
            if (!Is.mobile.ANY()) {
                Animator.onScroll();
            }
        })
        .trigger('scroll');

    // SMOTHING SCROLL Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
});

$document.on('preloaded.before', function () {
    window
        .addEventListener('wheel', function (event) {
            if ($(event.target).closest('.select2-container').length) {
                event.stopPropagation();
                return false;
            }

            if (!canScroll) {
                event.preventDefault();
                return false;
            }

            if (!Is.mobile.ANY() && !Is.desktop.MAC() && !$body.is('.page-overflow-hidden')) {
                event.preventDefault();

                let maxScroll = $document.height() - $window.height();
                let delta = event.deltaY > 0 ? -1 : 1;

                scrollPos = scrollPos - parseInt(delta * 100);
                scrollPos = scrollPos < 0 ? 0 : scrollPos;
                scrollPos = scrollPos > maxScroll ? maxScroll : scrollPos;

                TweenMax.killTweensOf(this);
                TweenMax.to(this, .8, {scrollTo : { y: scrollPos }, ease: Power2.easeOut,
                    onStart:        () => scrollAni = true,
                    onComplete:     () => scrollAni = false,
                    onOverwrite:    () => scrollAni = false,
                    onKill:         () => scrollAni = false,
                });
            }
        }, hasPassiveEvents ? { passive: false } : false);
    $window
        .on('scroll', function () {
            let posScroll = $window.scrollTop();

            if (!scrollAni) {
                scrollPos = $window.scrollTop();
            }
        })
        .on('resize', function () {
            wW = $window.outerWidth();
            wH = $window.outerHeight();
            dH = $document.outerHeight();

            if (!Is.mobile.ANY()) {
                $body.removeClass('mobile');
                $body.addClass('desktop');
                canScroll = true;
            } else {
                $body.removeClass('desktop');
                $body.addClass('mobile');
                canScroll = false;
            }
        });

    Component.init();

    if (typeof Navigation !== 'undefined') { Navigation.init(); }
    if (typeof Ticker !== 'undefined') { Ticker.init(); }

    // Add your code here

    $window.trigger('resize').trigger('popstate');
});


$body.waitForImages(true)
    .progress((loaded, count, success) => {
        count++;

        let percent = (loaded * 100 / count);

        TweenMax.to('.preloader__bar__progress', .6, { width: percent+'%', ease: Expo.easeInOut});
    })
    .done(() => {
        TweenMax.to('.preloader__bar__progress', .6, { width: '100%', onComplete: () => {
            $document.trigger('preloaded.before');

            TweenMax.to('.preloader', .4, { opacity: 0, display: 'none', onComplete: () => $document.trigger('preloaded.after') });
        } });
    });
