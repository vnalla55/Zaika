
jQuery(document).ready(function() {
	jQuery('form#contact_form_14882168241945841746').submit(function() {
		jQuery('form#contact_form_14882168241945841746 .error').remove();
		var hasError = false;
		jQuery('form#contact_form_14882168241945841746 .required_field').each(function() {
			if(jQuery.trim(jQuery(this).val()) == '') {
				var labelText = jQuery(this).prev('label').text();
				jQuery('#reponse_msg_14882168241945841746 ul').append('<li class="error">Please enter '+labelText+'</li>');
				hasError = true;
			} else if(jQuery(this).hasClass('email')) {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test(jQuery.trim(jQuery(this).val()))) {
					var labelText = jQuery(this).prev('label').text();
					jQuery('#reponse_msg_14882168241945841746 ul').append('<li class="error">Please enter valid '+labelText+'</li>');
					hasError = true;
				}
			}
		});
		if(!hasError) {
			var contactData = jQuery('#contact_form_14882168241945841746').serialize();

			 			jQuery('#contact_submit_btn14882168241945841746').fadeOut('normal', function() {
				jQuery(this).parent().append('<i class="fa fa-circle-o-notch fa-spin"></i>');
			});
 			
 			jQuery.ajax({
			    type: 'POST',
			    url: tgAjax.ajaxurl,
			    data: contactData+'&tg_security='+tgAjax.ajax_nonce,
			    success: function(results){
			    	jQuery('#contact_form_14882168241945841746').hide();
			    	jQuery('#reponse_msg_14882168241945841746').html(results);
			    }
			});
 					}
		
		return false;
		
	});
});