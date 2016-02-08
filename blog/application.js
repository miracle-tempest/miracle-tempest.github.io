$(document).ready(function () {
    $('.post').on('click', 'button', function () {
        $(this).closest('.post').find('.text').slideToggle()
    });
    $('.social').on('click', 'button', function () {
        $(this).closest('.social').find('.icons').slideToggle()
    });
    $('.ico-mail2').on('click', function () {
        $(this).closest('.email').find('.contactform').slideToggle()
    });
    $('.icons').on('mouseenter', function () {
        $(this).addClass('highlighted');

    });
    $('.icons').on('mouseleave', function () {
        $(this).removeClass('highlighted');

    })


});