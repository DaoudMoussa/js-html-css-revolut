$(document).ready(function() {
    $('.right-header a').click(function() {
        $(this).next('.dropdown').slideToggle();
        $(this).toggleClass('active');
    });
});
