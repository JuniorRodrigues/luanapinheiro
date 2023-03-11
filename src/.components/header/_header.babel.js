// $mainMenu declarado em _atom-menu.babel.js

const $el               = $(el);
const $mainMenu         = $el.find('.main-menu');
const $activeLine       = $mainMenu.find('.active-line');
const $link             = $mainMenu.find('a');

function hoverMenu () {
    const mainMenuX         = $mainMenu.offset().left;

    let to;

    $link.hover(
        function () {
            const $this         = $(this);
            const linkWidth     = $this.parent().width();
            const linkX         = Math.floor($this.offset().left - mainMenuX);

            $activeLine.css({ 'opacity' : 1, 'left': linkX, 'width': linkWidth });

            clearTimeout(to);
        },
        function () {
            clearTimeout(to);
            to = setTimeout(function () {
                $activeLine.css({ 'opacity': 0, 'width': 0 });
            }, 250);
        }
    );
}

$window.on('resize', hoverMenu);
