$('.nav-toggled-wrapper').on('click', function(e){
	e.stopPropagation();
});

// Selecting these classes then changeing it to html.nav-open when clicked
$('.nav-toggle-open, .nav-toggle-close, header .nav-toggle-body-overlay').on('click', function(){
	$('html').toggleClass('nav-open');
});
