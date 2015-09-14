$(document).ready(function () {
    $('.post').on('click', 'button', function () {
        $(this).closest('.post').find('.text').slideToggle()
    });
    $('.social').on('click', 'button', function () {
        $(this).closest('.social').find('.icons').slideToggle()


    });
});