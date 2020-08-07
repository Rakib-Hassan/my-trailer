$(() => {
    $(window).scroll(() => {
        if ($(window).scrollTop() > 83) {
            $('.main-menu').addClass('fixed-menu');
        } else {
            $('.main-menu').removeClass('fixed-menu');
        }
    })
})