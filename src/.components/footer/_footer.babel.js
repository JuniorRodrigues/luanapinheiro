/**
 * Each component receives the variables explained below
 *
 * @param {HTMLElement} el - Component's main DOM element
 * @param {Object} params - Params to be used
 */
const $el               = $(el);
const $backTop          = $el.find('.arrow-top');

const previousUrl       = $backTop.attr('href');
const currentUrl        = location.pathname + previousUrl;

$backTop.attr('href', currentUrl);
