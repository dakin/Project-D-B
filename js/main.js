$('.team-menu').click(function () {
	$('.basement-nav').toggleClass('show');
	$('.main-nav').toggleClass('basement-show');
});

$('.filterbar input').focus(function () {
	$(this).val('');
});