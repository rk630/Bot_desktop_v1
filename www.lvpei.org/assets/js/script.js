$().ready(function() {
	$.validator.addMethod("regx", function(value, element, regexpr) {          
   		return regexpr.test(value);
		}, ".");
		//enquiry validation
	 $("#template-contactform").validate({
		rules:{
			name:{
				required:true,
				regx: /^[a-z A-Z]*$/,
				},
			email:{
				required:true,
				email:true,
				},
			mobile:{
				required:true,
				regx: /^[789][0-9]{9}$/,
				},
			message:{
				required:true,
				},
			},
		messages:{
			name:{
				required:"Enter your name",
				regx:"name contain only alphabits",
				},
			email:{
				required:"Enter email Id",
				email:"enter valid email Id",
				},
			mobile:{
				required:"Enter your mobile number",
				regx:"enter valid mobile number",
				},
			message:{
				required:"Enter Message",
				},
			},			
			submitHandler: function (form) 
			{ 
				$('.message-div').css('display','block'); 
					  $.ajax(
					  {
				         dataType: 'json',
						 type: 'post',
						 url: $(form).attr('action'),
						 data: $(form).serialize(),
						 success: function(responseData) { 
							 if(responseData.success== true)
							 {
							  $('.message-div').html(responseData.msg).css('color','green');
							  setTimeout(function(){
								       $('.message-div').css('display','none').html(''); 
							           $('.txtBox').val('');
							           $('.cap').trigger('click');
									},3000);
							 }
							 else
							 {  
							  $('.message-div').html(responseData.msg).css('color','red');
							 }
						 },
						 error:function(xhr, err, status){
							  alert(xhr + err + status);
						 }
					  });

		         return false;

			}
			
		});
		
		});
$().ready(function() {
	$.validator.addMethod("regx", function(value, element, regexpr) {          
   		return regexpr.test(value);
		}, ".");
		//enquiry validation
	 $(".patient_feedback").validate({
		rules:{
			name:{
				required:true,
				regx: /^[a-z A-Z]*$/,
				},
			email:{
				required:true,
				email:true,
				},
			mobile:{
				required:true,
				regx: /^[0-9]{0,15}$/,
				},
			mrno:{
				required:true,
				},
			patient_address:{
				required:true,
				},
			Country:{
				required:true,
				},
			treated_at:{
				required:true,
				},
			feedback:{
				required:true,
				},
			},
		messages:{
			name:{
				required:"Enter your name",
				regx:"name contain only alphabits",
				},
			email:{
				required:"Enter email Id",
				email:"enter valid email Id",
				},
			mobile:{
				required:"Enter your mobile number",
				regx:"enter valid mobile number",
				},
			mrno:{
				required:'MRNO is Required',
				},
			patient_address:{
				required:'Patient Address is Required',
				},
			Country:{
				required:'Country is Required',
				},
			treated_at:{
				required: 'Location is Required',
				},
			feedback:{
				required:'Feedback is Required',
				},
			},			
			submitHandler: function (form) 
			{ 
				event.preventDefault()
				var captcha = grecaptcha.getResponse();
				//alert(captcha);

				if (captcha == '') 
				{
					$('.message-div').html('Robot verification failed, Please try again').css('color','red');
					setTimeout(function(){$('.message-div').css('display','none').html('');},3000);
				}
				else
				{

					$.ajax(
					{
						dataType: 'json',
						type: 'post',
						url: $(this).attr('action'),
						data: $(this).serialize(),
						success: function(responseData) 
						{ 
							if(responseData.success== true)
							{
								$('.message-div').html(responseData.msg).css('color','green');
								setTimeout(function()
								{
								   $('.message-div').css('display','none').html(''); 
								   $('.txtBox').val('');
								   $('.txtBoxselect').val('');
								},1000);
							}
							else if(responseData.success== 'Error')
							{  
								$('.message-div').html(responseData.msg).css('color','red');
								setTimeout(function(){$('.message-div').css('display','none').html('');},1000);
							}
							else
							{
								$('.message-div').html(responseData.msg).css('color','red');
								setTimeout(function(){$('.message-div').css('display','none').html('');},1000);
							}
						},
					});
				}	

			}
			
		});
		
		});

$().ready(function() {
	$.validator.addMethod("regx", function(value, element, regexpr) {          
   		return regexpr.test(value);
		}, ".");
		//enquiry validation
	 $("#online_donation_form_id").validate({
		rules:{
			name_title:{
				required:true,
				},
			name:{
				required:true,
				regx: /^[a-z A-Z]*$/,
				},
			Organisation_name:{
				required:true,
				},
			email:{
				required:true,
				email:true,
				},
			mobile:{
				required:true,
				regx: /^[0-9]{0,15}$/,
				},
			address:{
				required:true,
				},
			pincode:{
				required:true,
				},
			Country:{
				required:true,
				},
			city:{
				required:true,
				},
			state:{
				required:true,
				},
			/*pan_id:{
				required:function(element) {
					    if ($("#indian_donor_amount").val().length > 0) {
					       return false;
					    }
					    else {
					    return true;
					    }
				},*/
			},
		messages:{
			name_title:{
				required:'Please select a title',
				},
			name:{
				required:"Enter your name",
				regx:"name contain only alphabits",
				},
			Organisation_name:{
				required:'Please Enter Oraganization name',
				},
			email:{
				required:"Enter email Id",
				email:"enter valid email Id",
				},
			mobile:{
				required:"Enter your mobile number",
				regx:"enter valid mobile number",
				},
			address:{
				required:'Address is Required',
				},
			pincode:{
				required:'Enter Pin-code',
				},
			Country:{
				required:'Country is Required',
				},
			city:{
				required: 'Enter City',
				},
			state:{
				required:'Enter state',
				},
			},			
		});
		
		});


$(document).ready(function() {
	$('#online_donation_form_id').submit(function(e){
	 	var donation_amt = $('#indian_donor_amount').val();
	 	var pan_id = $('#pan_id').val();
	 	
		if(donation_amt >= 10000 && pan_id == '')
		{
			e.preventDefault();
			alert('Please Enter PAN Number');
			$('#pan_id').focus();
			return false;
		}
	})
	
});

$().ready(function() {
	$.validator.addMethod("regx", function(value, element, regexpr) {          
   		return regexpr.test(value);
		}, ".");
		//enquiry validation
	 $("#scleral_lens_form_id").validate({
		rules:{
			reason:{
				required:true,
				},
			first_name:{
				required:true,
				regx: /^[a-z A-Z]*$/,
				},
			last_name:{
				required:true,
				regx: /^[a-z A-Z]*$/,
				},
			practice_name:{
				required:true,
				regx: /^[a-z A-Z]*$/,
				},
			mobile:{
				required:true,
				regx: /^[0-9]{8,15}$/,
				},
			email:{
				required:true,
				email: true,
				},
			city:{
				required:true,
				},
			state:{
				required:true,
				},
			fitting_sclerals:{
				required:true,
				},
			is_worked_non_profit:{
				required:true,
				},
			additional_info:{
				required:true,
				},
			},
		messages:{
			reason:{
				required:"Enter your name",
				},
			first_name:{
				required:"Enter your First Name",
				regx:"name contain only alphabits",
				},
			name:{
				required:"Enter your Last Name",
				regx:"name contain only alphabits",
				},
			name:{
				required:"Enter your Name",
				regx:"name contain only alphabits",
				},
			mobile:{
				required:"Enter your mobile number",
				regx:"enter valid mobile number",
				},
			email:{
				required:"Enter email Id",
				email:"enter valid email Id",
				},
			city:{
				required:'Enter City',
				},
			state:{
				required:'Enter State',
				},
			fitting_sclerals:{
				required:'Select Ay radio Button',
				},
			is_worked_non_profit:{
				required:'Select Ay radio Button',
				},
			additional_info:{
				required:"Enter Additional Information",
				},
			},			
			submitHandler: function (form) 
			{ 
				$('.message-div').css('display','block'); 
					  $.ajax(
					  {
				         dataType: 'json',
						 type: 'post',
						 url: $(form).attr('action'),
						 data: $(form).serialize(),
						 success: function(responseData) { 
							if(responseData.success== true)
							{
								//$('.message-div').html(responseData.msg).css('color','green');
								swal({
									title: "Success!",
									text: responseData.msg,
									type: "success"
								});
								setTimeout(function()
								{
								   window.location.reload();
								},3000);
							}
							else if(responseData.success== 'Error')
							{  
								$('.message-div').html(responseData.msg).css('color','red');
								setTimeout(function(){$('.message-div').css('display','none').html('');},1000);
							}
							else
							{
								$('.message-div').html(responseData.msg).css('color','red');
								setTimeout(function(){$('.message-div').css('display','none').html('');},1000);
							}
						 },
						 error:function(xhr, err, status){
							  alert(xhr + err + status);
						 }
					  });

		         return false;

			}
			
		});
		
		});