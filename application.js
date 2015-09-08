$(document).ready(function () {

    console.log('Lorem opossum');
    $('.content').on('click', 'button', function () {
        $(this).closest('.content').find('.text').slideToggle();
    });

});