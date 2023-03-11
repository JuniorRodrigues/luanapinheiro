const $el             = $(el);
const $sliderGalery    = $el.find('.slider-space');
// const $resumeAula     = $el.find('.resume-aula');

$sliderGalery.slick({
    slidesToShow: 2,
    swipe: false,
    infinite: false,
    adaptiveHeight: true,

    responsive: [
        {
            breakpoint: 823,
            settings: {
                centerMode: true,
                swipe: true,
                infinite: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1,
                swipe: true,
                infinite: true,
                arrows: false
            }
        },
    ]
});

// function arrowPosition () {
//     const $slickArrows    = $el.find('.slick-arrow');
//     const imageHeight     = $el.find('.img-container img').height();
//     const arrowTop      = Math.floor(imageHeight / 2);

//     $slickArrows.css('top', arrowTop);
// }

// function heightTexts () {
//     const resumeAulaNewHeight = Math.floor($resumeAula.height());

//     $resumeAula.height(resumeAulaNewHeight);
// }

// $document.on('preloaded.after', function () {
//     arrowPosition();
//     heightTexts();

//     $window.on('resize', function () {
//         arrowPosition();
//         heightTexts();
//     });
// });
