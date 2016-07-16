var $j = jQuery.noConflict();
var ww = screen.width;

$j(document).ready(function() {
	$j(".nav li a").each(function() {
		if ($j(this).next().length > 0) {
			//$j(this).addClass("parent");
			$j(this).parent().append("<span class='parent'></span>");
		};
	})
	
	$j(".toggleMenu").click(function(e) {
		e.preventDefault();
		$j(this).toggleClass("active");
		$j(".nav").toggle();
	});
	adjustMenu();
})

$j(window).bind('resize orientationchange', function() {
	ww = screen.width;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 768) {
		$j(".toggleMenu").css("display", "inline-block");
		if (!$j(".toggleMenu").hasClass("active")) {
			$j(".nav").hide();
		} else {
			$j(".nav").show();
		}
		
		$j(".nav li").unbind('mouseenter mouseleave');
		$j(".nav li span.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$j(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 768) {
		$j(".toggleMenu").css("display", "none");
		$j(".nav").show();
		$j(".nav li").removeClass("hover");
		$j(".nav li a").unbind('click');
		$j(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$j(this).toggleClass('hover');
		});
	}
}

$j(document).ready(function() {
	var active_li = $j(".nav").find('li.active');
	$j(active_li).parents('li.top-parent').addClass("active");
});

$j(document).ready(function() {
	$j("#minicart_a").on("click", function(){
		$j("#header-cart").toggle();
	});
	$j(".close.skip-link-close").on("click",function(){
		$j("#header-cart").toggle();
	});
});

$j(document).ready(function() {
	$j(".footer_mid a.subscribe_btn").on("click", function(){
		$j(".footer_newsletter").toggle();
	});
});

