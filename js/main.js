$('.team-menu').click(function (e) {
	e.preventDefault();
    $('.basement-nav').toggleClass('show');
    $('.main-nav').toggleClass('basement-show');
});