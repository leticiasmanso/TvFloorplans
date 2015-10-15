$(document).ready(function(){

	$(".menu_bar").click(function(){
		$(".nav-menu").toggle();
	});

    $("li").click(function() {
    	
    	$("li a").removeClass("active");
		$("a", this).addClass("active");

		if ($(".menu_bar").css('display') === 'block' ){
			$(".nav-menu").toggle();

			$("li a").removeClass("active");
			$("a", "li:first").addClass("active");
		}
	});	

	$(window).resize(function(){

		if ( $(window).width() > 945) {
			$(".nav-menu").removeAttr('style');
		}

	});

});