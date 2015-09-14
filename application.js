$(document).ready(function () {

    $('.content').on('click', 'button', function () {
        $(this).closest('.content').find('.text').slideToggle();
    });

});