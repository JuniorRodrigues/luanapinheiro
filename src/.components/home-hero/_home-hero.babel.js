/**
 * Each component receives the variables explained below
 *
 * @param {HTMLElement} el - Component's main DOM element
 * @param {Object} params - Params to be used
 */

// temp
$window.on('resize', function () {
    $(el).css('max-height', $window.height());
});
