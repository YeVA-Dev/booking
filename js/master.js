/* карты */
!function($) {
	"use strict"; // jshint ;_;

	$("select").selectBox();

	$('[data-toggle="tab"]').on('click', function(e) {
		$('.nav_wrapp li.active, .tabs-wrap>.active').removeClass('active');
		$(this).parent().addClass('active');
		$($(this).attr('href')).addClass('active');

		return false;
	})

	$(".gSet, .setH").on('click', function(e) {
		$('.setH').fadeToggle();
	})

	$(".payment-type").on('click', '.btn', function(e) {
		$('.payment-type .btn.active').removeClass('active');
		$('.payment-details>.active').removeClass('active');
		$(this).addClass('active');
		$('#' + $(this).data("detail")).addClass('active');
	})

	$(".control-group .controls:last-child, .easy-list li:last-child").addClass("last")

	jQuery.support.placeholder = false;
	var test = document.createElement('input');
	if ('placeholder' in test)
		jQuery.support.placeholder = true;

	if (!$.support.placeholder) {
		var active = document.activeElement;
		$(':text').focus(function() {
			if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
				$(this).val('').removeClass('hasPlaceholder');
			}
		}).blur(function() {
			if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
				$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
			}
		});
		$(':text').blur();
		$(active).focus();
		$('form').submit(function() {
			$(this).find('.hasPlaceholder').each(function() {
				$(this).val('');
			});
		});
	}
	
}(window.jQuery);
