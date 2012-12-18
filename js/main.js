$('.team-menu').click(function () {
    $('.basement-nav').show();
    $('.subnav').animate({
    		left: '92px'
    });
    $('.main-nav').animate({
        left: '150px'
    });
    $('.main-nav').css('width', 200);
});