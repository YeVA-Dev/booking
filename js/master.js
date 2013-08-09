/* карты */
!function($) {
	"use strict"; // jshint ;_;

	$("select").selectBox();
	
	$('[data-toggle="tab"]').on('click',function(e){
		$('.nav_wrapp li.active, .tabs-wrap>.active').removeClass('active');
		$(this).parent().addClass('active');
		$($(this).attr('href')).addClass('active');
		
		return false;
	})
	
	$(".gSet, .setH").on('click',function(e){
		$('.setH').fadeToggle();
	})

	
	$(".payment-type").on('click','.btn',function(e){
		$('.payment-type .btn.active').removeClass('active');
		$('.payment-details>.active').removeClass('active');
		$(this).addClass('active');
		$('#'+$(this).data("detail")).addClass('active');
	})
}(window.jQuery);
