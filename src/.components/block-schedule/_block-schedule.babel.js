/**
 * Each component receives the variables explained below
 *
 * @param {HTMLElement} el - Component's main DOM element
 * @param {Object} params - Params to be used
 */
const $el             = $(el);
const $btnAccordion   = $el.find('.btn-primary');

$btnAccordion.on('click', function () {
    if ($window.width() < 768 ) {
        const $this             = $(this);
        const $bts              = $this.parent().siblings().find('.btn-primary');
        const $otherSchedules   = $bts.next('.schedule');
        const $thisSchedule     = $this.next('.schedule');

        $bts.removeClass('active');
        $otherSchedules.slideUp(350);

        $this.toggleClass('active');
        $thisSchedule.slideToggle(350);
    }
});
