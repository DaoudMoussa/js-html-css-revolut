$(document).ready(function() {
    $('.right-header a').mouseenter(function() {
        $(this).next('.dropdown').slideDown('fast');
        if($(this).next('.dropdown').length) {
            $(this).addClass('active');
        }
    });

    $(document).click(function(objectClick) {
        var clickedElement = $(objectClick.target);

        if(!clickedElement.closest('.dropdown').length) {
            $('.dropdown').slideUp('fast');
            $('.right-header .active').removeClass('active');
        }
    });
});
