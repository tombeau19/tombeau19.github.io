$(document).ready(() => {

    $('.scrollspy').scrollSpy();

    if ($(window).width() < 500) {
        return $('.opener').removeClass('col s5')
    }

});