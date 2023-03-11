const $el             = $(el);
const $mainHeader     = $('[data-component="header"]');
// const $mainMenu       = $('.main-menu');

$el.on('click', function(e){
    e.preventDefault();

    const $this       = $(this);
    $([$this, $mainHeader]).toggleClass('opened');
});
