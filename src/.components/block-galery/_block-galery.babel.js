const $el             = $(el);
const $slider         = $el.find('.slider:not(.no-slider)');
const $noSlider       = $el.find('.no-slider');
const $resume         = $el.find('.resume');

function arrowPosition () {
    if (wW > 824) {
        const $slickArrows    = $el.find('.slick-arrow');
        const $datetime       = $el.find('.datetime');
        const dateHeight      = $datetime.height();
        const imageHeight     = $el.find('.img-container img').height();

        if ( $datetime.length ) {
            const arrowTop        = Math.floor( (imageHeight + dateHeight + 10) - (imageHeight / 2) );
            $slickArrows.css('top', arrowTop);
        } else {
            const arrowTop        = Math.floor(imageHeight / 2 + 10);
            $slickArrows.css('top', arrowTop);
        }
    }
}

function heightTexts () {
    let i       = [];

    $resume.each( function () {
        $(this).height('auto')
        i.push($(this).height());
    });

    i = Math.floor(Math.max(...i));
    $resume.height(i);
}

$slider.slick({
    slidesToShow: 3,
    swipe: false,
    infinite: false,
    arrows: true,

    responsive: [
        {
            breakpoint: 823,
            settings: {
                centerMode: true,
                slidesToShow: 2,
                swipe: true,
                infinite: true,
            }
        },
        {
            breakpoint: 666,
            settings: {
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1,
                swipe: true,
                arrows: false,
                infinite: true,
            }
        },
    ]
}).on('setPosition', function() {
    // heightTexts();
    arrowPosition();
});

if ( $noSlider.length ) {
    // heightTexts();
}
