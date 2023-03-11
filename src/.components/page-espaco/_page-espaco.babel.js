/**
 * Each component receives the variables explained below
 *
 * @param {HTMLElement} el - Component's main DOM element
 * @param {Object} params - Params to be used
 */

const logo = document.getElementsByClassName('icon-dancer')[0];

$window.on('resize', function () {
    logo.style.fill = ($window.width() > 823 ) ? '#fff' : '#000';
});
