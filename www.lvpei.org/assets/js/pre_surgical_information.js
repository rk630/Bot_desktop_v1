$(document).ready(function() {

	$('.common_for_hide').change(function(event) {
		var to_show_hide = $(this).attr('name');
		var val_sel = $(this).val();

		if (val_sel == 'YES')
		{
			$('.'+to_show_hide+'_hide_show').show();
		}
		else
		{
			$('.'+to_show_hide+'_hide_show').hide();
		}
	});

	$( "#angioplasty_date" ).datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd-mm-yy',
    numberOfMonths: 2,
    
    onSelect: function(selectedDate) {
    	var d = new Date();
		var strDate = $('#today_date').val();
		var numbers = strDate.match(/\d+/g); 
		var date = new Date(numbers[2], numbers[1]-1, numbers[0]);
        var t_date = $(this).datepicker('getDate');
        var dayDiff = Math.ceil((date - t_date) / (1000 * 60 * 60 * 24));
        
        if(dayDiff < 240)
        {
        	$('.surgery_date_msg').show();
        	$('.surgery_date_msg').text('Minimum 8 months gap needed for any Eye surgery.').delay(5000).fadeOut();
        }
    }
});

	$( "#bypass_date" ).datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd-mm-yy',
    numberOfMonths: 2,
    
    onSelect: function(selectedDate) {
    	var d = new Date();
		var strDate = $('#today_date').val();
		var numbers = strDate.match(/\d+/g); 
		var date = new Date(numbers[2], numbers[1]-1, numbers[0]);
        var t_date = $(this).datepicker('getDate');
        var dayDiff = Math.ceil((date - t_date) / (1000 * 60 * 60 * 24));
        
        if(dayDiff < 90)
        {
        	$('.surgery_date_msg').show();
        	$('.surgery_date_msg').text('Minimum 3 months gap needed for any Eye surgery.').delay(5000).fadeOut();
        }
    }
});

	$( "#valve_replacement_date" ).datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd-mm-yy',
    numberOfMonths: 2,
    
    onSelect: function(selectedDate) {
    	var d = new Date();
		var strDate = $('#today_date').val();
		var numbers = strDate.match(/\d+/g); 
		var date = new Date(numbers[2], numbers[1]-1, numbers[0]);
        var t_date = $(this).datepicker('getDate');
        var dayDiff = Math.ceil((date - t_date) / (1000 * 60 * 60 * 24));
        if(dayDiff < 150)
        {
        	$('.surgery_date_msg').show();
        	$('.surgery_date_msg').text('Minimum 3 to 5 months gap needed for any Eye surgery.').delay(5000).fadeOut();
        }
    }
});


	$( "#heart_last_check_up" ).datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd-mm-yy',
    numberOfMonths: 2,
    
    onSelect: function(selectedDate) {
    	var d = new Date();
		var strDate = $('#today_date').val();
		var numbers = strDate.match(/\d+/g); 
		var date = new Date(numbers[2], numbers[1]-1, numbers[0]);
        var t_date = $(this).datepicker('getDate');
        var dayDiff = Math.ceil((date - t_date) / (1000 * 60 * 60 * 24));
        if(dayDiff >= 30)
        {
        	$('.heart_last_check_up_msg').show();
        	$('.heart_last_check_up_msg').text('Please Visit your Cardiologist Before coming for Surgery.').delay(5000).fadeOut();
        }
    }
});

	$( "#pacemaker_last_checked" ).datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd-mm-yy',
    numberOfMonths: 2,
    
    onSelect: function(selectedDate) {
    	var d = new Date();
		var strDate = $('#today_date').val();
		var numbers = strDate.match(/\d+/g); 
		var date = new Date(numbers[2], numbers[1]-1, numbers[0]);
        var t_date = $(this).datepicker('getDate');
        var dayDiff = Math.ceil((date - t_date) / (1000 * 60 * 60 * 24));
        if(dayDiff >= 90)
        {
        	$('.pacemaker_last_checked_msg').show();
        	$('.pacemaker_last_checked_msg').text('Please get check your Pacemaker Before coming for Surgery.').delay(5000).fadeOut();
        }
    }
});

	$('.heart_surgery').change(function(event) {
		/* Act on the event */
		var surgery_val = $(this).val();
		if($(this).prop("checked") == false && surgery_val == 'Angioplasty with stenting')
		{
			$('#angioplasty_date').val('');
		}
		if($(this).prop("checked") == false && surgery_val == 'Bypass surgery')
		{
			$('#bypass_date').val('');
		}
		if($(this).prop("checked") == false && surgery_val == 'Valve replacement Sx')
		{
			$('#valve_replacement_date').val('');
		}
		if($(this).prop("checked") == false && surgery_val == 'Medical treatment only')
		{
			$('#medical_treatment_date').val('');
		}
	});

	
	$('#hba1c').change(function(event) {
		var hba1c_val = $(this).val();
		if (hba1c_val == 'More than 8%')
		{
			$('.hba1c_msg').html('Please Consult with your Diabetist for better control.').delay(5000).fadeOut();;
		}
		else
		{
			$('.hba1c_msg').html('');
		}
	});

	$('#bp_reading').keyup(function(event) {
		var bp_reading_reg = /^[0-9]{2,3}\/[0-9]{2,3}$/i;
		var bp_reading = $(this).val();

		if (bp_reading_reg.test(bp_reading))
		{
			var bp_reading_to_arr = bp_reading.split('/');
			var bp_1 = bp_reading_to_arr[0];
			var bp_2 = bp_reading_to_arr[1];
			$('.bp_reading_msg').show();
			if (bp_1 > 150 || bp_2 > 90)
				$('.bp_reading_msg').html('Please Consult with your Physician for better BP control.').delay(5000).fadeOut();
		}
		else
		{
			$('.bp_reading_msg').html('');
		}
	});

	$('.heart_symptoms').change(function(event) 
	{
		if($('.heart_symptoms:checked').length)
		{
			if ($(this).val() != 'None of the Above') 
			{
				$('.heart_pro_msg').show();
				$('.heart_pro_msg').html('Cardiologist Clearance is needed for any surgeery.').delay(5000).fadeOut();
				$('#heart_symptoms_non').attr("disabled", "disabled");
			}
		}
		else
		{
			$('#heart_symptoms_non').removeAttr("disabled");
		}
	});

	$('.do_you_have').change(function(event) 
	{
		if($('.do_you_have:checked').length)
		{
			if ($(this).val() != 'NONE OF THE ABOVE') 
			{
				$('.do_you_have_msg').show();
				$('.do_you_have_msg').html('Please consult your neurologist').delay(5000).fadeOut();
				$('#do_you_have_non').prop('checked', false).attr("disabled", "disabled");
				//$('#do_you_have_non').attr("disabled", "disabled");
			}
		}
		else
		{
			//$('#do_you_have_non').prop('checked', false);
			$('#do_you_have_non').removeAttr("disabled");
		}
	});

	$('#effort_tolerance').change(function(event) 
	{
		var option_index = $("#effort_tolerance")[0].selectedIndex;
		if (option_index >= 4) 
		{
			$('.effort_tolerance_msg').show();
			$('.effort_tolerance_msg').html('Cardiologist Clearance needed for Surgery.').delay(5000).fadeOut();
		}
		else
		{
			$('.effort_tolerance_msg').hide().html('');
		}
		
	});

	$('.brain_stroke_blood_thinners').change(function(event) 
	{
		var option_index = $(this).val();
		if (option_index == 'YES') 
		{
			$('.brain_stroke_blood_thinners_msg').show();
			$('.brain_stroke_blood_thinners_msg').html('Please stop boold thinners 3 days before surgery.').delay(5000).fadeOut();
		}
		else
		{
			$('.brain_stroke_blood_thinners_msg').hide().html('');
		}
		
	});

	$('.lung_having_cls').change(function(event) 
	{
		var lung_disease_having = $(this).val();
		if ($(".lung_having_cls:checked").length > 0 && lung_disease_having != 'none of the above') 
		{
			$('.lung_having_msg').show();
			$('.lung_having_msg').html('Pulmonologist Clearance needed for Surgery.').delay(5000).fadeOut();
			$('#lung_having_id_non').prop('checked', false).attr("disabled", "disabled");
		}
		else
		{
			$('.lung_having_msg').hide().html('');
			$('#lung_having_id_non').removeAttr("disabled");
		}
	});

	$('.are_you_having_cls').change(function(event) 
	{
		var are_you_having_cls_val = $(this).val();
		if ($(".are_you_having_cls:checked").length > 0 && are_you_having_cls_val != 'none of the above') 
		{
			$('.are_you_having_msg').show();
			$('.are_you_having_msg').html('gastroenterologist Clearance needed for Surgery.').delay(5000).fadeOut();
			$('#are_you_having_non').prop('checked', false).attr("disabled", "disabled");
		}
		else
		{
			$('.are_you_having_msg').hide().html('');
			$('#are_you_having_non').removeAttr("disabled");

		}
		
	});

	$('.lung_treatment_cls').change(function(event) 
	{
		var lt_in_arr  = ['Nebulizers', 'CPAP', 'Home oxygen'];
		var obj = $(this);
		if (obj.is(':checked') && jQuery.inArray( $(this).val(), lt_in_arr ) > -1) 
		{
			$('.lung_treatment_msg').show();
			$('.lung_treatment_msg').html('Pulmonologist Clearance needed for Surgery.').delay(5000).fadeOut();
		}
		else
		{
			$('.lung_treatment_msg').hide().html('');
		}
	});

	$('#kidney_treatment').change(function(event) 
	{
		var kidney_treatment_val = $(this).val();

		var option_index_kidney = $("#kidney_treatment")[0].selectedIndex;

		if (option_index_kidney > 1)
		{
			$('.kidney_treatment_msg').show();
			$('.kidney_treatment_msg').html('Nephrologist clearance needed for surgery.').delay(5000).fadeOut();
		}
		else
		{
			$('.kidney_treatment_msg').hide().html('');
		}
	});

	$('#hb_levels').change(function(event) 
	{
		var hb_levels_val  = $(this).val();

		if (hb_levels_val == 'Less than 8') 
		{
			$('.hb_levels_msg').show();
			$('.hb_levels_msg').html('Need to increase your Hb level.').delay(5000).fadeOut();
		}
		else
		{
			$('.hb_levels_msg').hide().html('');
		}
	});

	$('#blood_potassium_levels').change(function(event) 
	{

		var option_index_bpl = $("#blood_potassium_levels")[0].selectedIndex;

		if (option_index_bpl > 1) 
		{
			$('.blood_potassium_levels_msg').show();
			$('.blood_potassium_levels_msg').html('Blood Potassium Levels need to be normal').delay(5000).fadeOut();
		}
		else
		{
			$('.blood_potassium_levels_msg').hide().html('');
		}
	});

	$('#pt_inr').change(function(event) 
	{

		var pt_inr_val = $(this).val();

		if (pt_inr_val == 'More than 1.4') 
		{
			$('.pt_inr_msg').show();
			$('.pt_inr_msg').html('Hepatologist Clearance is needed for any Surgery.').delay(5000).fadeOut();
		}
		else
		{
			$('.pt_inr_msg').hide().html('');
		}
	});

	$('#platelet_count').change(function(event) 
	{

		var platelet_count_val = $(this).val();

		if (platelet_count_val == 'Low') 
		{
			$('.platelet_count_msg').show();
			$('.platelet_count_msg').html('Hepatologist Clearance is needed.').delay(5000).fadeOut();
		}
		else
		{
			$('.platelet_count_msg').hide().html('');
		}
	});

	$('.heart_regular_checkup').change(function(event) 
	{

		var heart_regular_checkup_val = $(this).val();

		if (heart_regular_checkup_val == 'NO') 
		{
			$('.heart_regular_checkup_msg').show();
			$('.heart_regular_checkup_msg').html('Cardiologist Clearance is needed.').delay(5000).fadeOut();
		}
		else
		{
			$('.heart_regular_checkup_msg').hide().html('');
		}
	});

	$('.epilepsy_medication').change(function(event) 
	{

		var epilepsy_medication_val = $(this).val();

		if (epilepsy_medication_val == 'NO') 
		{
			$('.epilepsy_medication_msg').show();
			$('.epilepsy_medication_msg').html('Visit your nuerologist and Start Medication.').delay(5000).fadeOut();
		}
		else
		{
			$('.epilepsy_medication_msg').hide().html('');
		}
	});

	$('#last_seizure').change(function(event) 
	{

		var last_seizure_val = $(this).val();

		if (last_seizure_val == 'Less than 3 months back') 
		{
			$('.last_seizure_msg').show();
			$('.last_seizure_msg').html('See your neurologist for treatment titration, and come the Clearance.').delay(5000).fadeOut();
		}
		else
		{
			$('.last_seizure_msg').hide().html('');
		}
	});


	$('#brain_stroke_when').change(function(event) 
	{

		var brain_stroke_when_val = $(this).val();

		if (brain_stroke_when_val == 'Less than 3 months back') 
		{
			$('.brain_stroke_when_msg').show();
			$('.brain_stroke_when_msg').html('See your neurologist for Clearance.').delay(5000).fadeOut();
		}
		else
		{
			$('.brain_stroke_when_msg').hide().html('');
		}
	});


	$('.infection_medications_cls').change(function(event) 
	{

		var infection_medications_val = $(this).val();

		if (infection_medications_val == 'NO') 
		{
			$('.infection_medications_msg').show();
			$('.infection_medications_msg').html('Infection need to be control for Surgery.').delay(5000).fadeOut();
		}
		else
		{
			$('.infection_medications_msg').hide().html('');
		}
	});


	$('#cancer_treatment_status').change(function(event) 
	{

		var cancer_treatment_status_val = $(this).val();

		if (cancer_treatment_status_val == 'under control on chemo') 
		{
			$('.cancer_treatment_status_msg').show();
			$('.cancer_treatment_status_msg').html('Oncologist Clearance is needed for any surgery.').delay(5000).fadeOut();
		}
		else
		{
			$('.cancer_treatment_status_msg').hide().html('');
		}
	});

	$('#anemia_hb_levels').change(function(event) 
	{

		var anemia_hb_levels_val = $(this).val();

		if (anemia_hb_levels_val == 'Less than 8') 
		{
			$('.anemia_hb_levels_msg').show();
			$('.anemia_hb_levels_msg').html('Please Counsult your Physician ti improve Hb%.').delay(5000).fadeOut();
		}
		else
		{
			$('.anemia_hb_levels_msg').hide().html('');
		}
	});

	$('#which_disorder').change(function(event) 
	{

		var which_disorder_val = $(this).val();

		if (which_disorder_val != '') 
		{
			$('.which_disorder_msg').show();
			$('.which_disorder_msg').html('Clearance and pari operative advice needed for surgery.').delay(5000).fadeOut();
		}
		else
		{
			$('.which_disorder_msg').hide().html('');
		}
	});

	$('.any_anesthesia_com').change(function(event) 
	{
		var any_anesthesia_com_val = $(this).val();

		if (any_anesthesia_com_val != '') 
		{
			$('.any_anesthesia_com_msg').show();
			$('.any_anesthesia_com_msg').html('Please Bring Details and write Below.').delay(5000).fadeOut();
		}
		else
		{
			$('.any_anesthesia_com_msg').hide().html('');
		}
	});

	$('.heart_drug_cls').change(function(event) 
	{
		var drugs_in_arr  = ['Aspirin', 'Clopidogrel', 'Pasugrel', 'Ticagrelor', 'Dabigatran'];
		var obj = $(this);
		//alert( jQuery.inArray( 'Aspirin', drugs_in_arr ))
		if (obj.is(':checked') && jQuery.inArray( $(this).val(), drugs_in_arr ) > -1) 
		{
			$('.heart_drug_msg').show();
			$('.heart_drug_msg').html('Please stop taking this drug 3 days prior to the surgery .').delay(5000).fadeOut();
		}
		else
		{
			$('.heart_drug_msg').show();
			$('.heart_drug_msg').html('Stop these drugs as per your Cardiologist advise.').delay(5000).fadeOut();
		}
	});


});

$().ready(function() {
	$.validator.addMethod("regx", function(value, element, regexpr) {          
   		return regexpr.test(value);
		}, ".");
		//enquiry validation
	 $("#pre_rgical_form_id").validate({
		rules:{
			name:{
				required:true,
				regx: /^[a-z A-Z]*$/,
				},
			age:{
				required:true,
				},
			gender:{
				required:true,
				},
			address:{
				required:true,
				},
			email:{
				required:true,
				email:true,
				},
			mobile:{
				required:true,
				regx: /^[789][0-9]{9}$/,
				},
			do_you_have_suger:{
				required:true,
				},
			bp_since:{
				required:true,
				},
			hba1c:{
				required:true,
				},
			suger_medicine:{
				required:true,
				},
			do_you_have_bp:{
				required:true,
				},
			bp_reading:{
				required:true,
				regx: /^[0-9]{2,3}\/[0-9]{2,3}$/,
				},
			do_you_have_heart_problem:{
				required:true,
				},
			rfwc:{
				required:true,
				},
			heart_last_check_up:{
				required:true,
				},
			have_pacemaker:{
				required:true,
				},
			pacemaker_last_checked:{
				required:true,
				},
			blood_thinners:{
				required:true,
				},
			'heart_drug[]':{
				required:true,
				},
			effort_tolerance:{
				required:true,
				},
			lung_disease:{
				required:true,
				},
			'lung_having[]':{
				required:true,
				},
			'lung_treatment[]':{
				required:true,
				},
			kidney_problem:{
				required:true,
				},
			kidney_treatment:{
				required:true,
				},
			hb_levels:{
				required:true,
				},
			blood_potassium_levels:{
				required:true,
				},
			high_uncontrolled_bp:{
				required:true,
				},
			sfsb:{
				required:true,
				},
			breathlessness_lying_down:{
				required:true,
				},
			chronic_lever_disease:{
				required:true,
				},
			have_jaundise:{
				required:true,
				},
			feet_swollen:{
				required:true,
				},
			distended_abdomen:{
				required:true,
				},
			pt_inr:{
				required:true,
				},
			platelet_count:{
				required:true,
				},
			epilepsy:{
				required:true,
				},
			epilepsy_medication:{
				required:true,
				},
			last_seizure:{
				required:true,
				},
			brain_stroke:{
				required:true,
				},
			brain_stroke_when:{
				required:true,
				},
			difficulty_swallowing:{
				required:true,
				},
			difficulty_speech:{
				required:true,
				},
			infection_at_present:{
				required:true,
				},
			'what_infection[]':{
				required:true,
				},
			infection_medications:{
				required:true,
				},
			suffer_from_cancer:{
				required:true,
				},
			cancer_treatment_status:{
				required:true,
				},
			bleeding_disorder:{
				required:true,
				},
			which_disorder:{
				required:true,
				},
			allergy_on_drugs:{
				required:true,
				},
			allergy_which_drug:{
				required:true,
				},
			surgery_done_in_anesthesia:{
				required:true,
				},
			any_anesthesia_com:{
				required:true,
				},
			what_anesthesia_com:{
				required:true,
				},
			angioplasty_date : {
				required : function(element){
	                    if($(".heart_surgery:checked").val() == 'Angioplasty with stenting'){
	                        return true;
	                    }
	                    else{
	                    	$('#angioplasty_date').val('');
	                        return false;
	                    }
                	}
				},
			},
		messages:{
			name:{
				required:"Enter your name",
				regx:"Name contain only alphabits",
				},
			age:{
				required:"Enter Your Age",
				},
			gender:{
				required:"Select Your Gender",
				},
			address:{
				required:"Enter Your Address",
				},
			email:{
				required:"Enter email Id",
				email:"Enter valid email Id",
				},
			mobile:{
				required:"Enter your mobile number",
				regx:"enter valid mobile number",
				},
			do_you_have_suger:{
				required:"Do you have Suger?",
				},
			bp_since:{
				required:'From when you have Suger',
				},
			hba1c:{
				required:'Select Your HBA1C Level',
				},
			suger_medicine:{
				required:'Select Are You ON',
				},
			do_you_have_bp:{
				required:'Do you have BP',
				},
			bp_reading:{
				required:'Enter Your BP Readings',
				regx: 'Enter Valid BP Readings',
				},
			do_you_have_heart_problem:{
				required:'Do you have Heart Problem',
				},
			rfwc:{
				required:'ARE YOU ON REGULAR FOLLOW UP WITH YOUR CARDIOLOGIST ?',
				},
			heart_last_check_up:{
				required:'WHEN WAS YOUR LAST CHECK UP ?',
				},
			have_pacemaker:{
				required:'Do You have Pacemaker ?',
				},
			pacemaker_last_checked:{
				required:'WHEN WAS IT LAST CHECKED ?',
				},
			blood_thinners:{
				required:'ARE YOU ON BLOOD THINNERS ?',
				},
			'heart_drug[]':{
				required:'WHICH DRUGS ?',
				},
			effort_tolerance:{
				required:'WHAT IS YOUR EFFORT TOLERANCE ?',
				},
			lung_disease:{
				required:'DO YOU HAVE LUNG DISEASE ?',
				},
			'lung_having[]':{
				required:'ARE YOU HAVING ?',
				},
			'lung_treatment[]':{
				required:'TREATMENT USED',
				},
			kidney_problem:{
				required:'DO YOU HAVE KIDNEY PROBLEM ?',
				},
			kidney_treatment:{
				required:'TREATMENT MODALITY ?',
				},
			hb_levels:{
				required:'WHAT IS YOUR HB% ?',
				},
			blood_potassium_levels:{
				required:'WHAT IS YOUR BLOOD POTASSIUM LEVEL ?',
				},
			high_uncontrolled_bp:{
				required:'DO YOU HAVE HIGH UNCONTROLLED BP ?',
				},
			sfsb:{
				required:'DO YOU HAVE SWOLLEN FEET OR SWOLLEN BODY ?',
				},
			breathlessness_lying_down:{
				required:'ARE YOU BREATHLESSNESS ON LYING DOWN ?',
				},
			chronic_lever_disease:{
				required:'DO YOU HAVE CHRONIC LIVER DISEASE ?',
				},
			have_jaundise:{
				required:'DO YOU HAVE JAUNDICE ?',
				},
			feet_swollen:{
				required:'ARE YOUR FEET SWOLLEN ?',
				},
			distended_abdomen:{
				required:'DO YOU HAVE DISTENDED ABDOMEN ?',
				},
			pt_inr:{
				required:'WHAT IS YOUR PT INR ?',
				},
			platelet_count:{
				required:'WHAT IS YOUR PLATELET COUNT ?',
				},
			epilepsy:{
				required:'DO YOU SUFFER FROM EPILEPSY ?',
				},
			epilepsy_medication:{
				required:'ARE YOU ON MEDICATION ?',
				},
			last_seizure:{
				required:'WHEN WAS THE LAST SEIZURE ?',
				},
			brain_stroke:{
				required:'DID YOU EVER HAVE A BRAIN STROKE ?',
				},
			brain_stroke_when:{
				required:'WHEN ?',
				},
			difficulty_swallowing:{
				required:'DO YOU HAVE ANY DIFFICULTY IN SWALLOWING ?',
				},
			difficulty_speech:{
				required:'DO YOU HAVE DIFFICULTY IN SPEECH ?',
				},
			infection_at_present:{
				required:'DO YOU HAVE ANY INFECTIONS AT PRESENT ?',
				},
			'what_infection[]':{
				required:'WHAT INFECTION YOU HAVE ?',
				},
			infection_medications:{
				required:'ARE YOU ON MEDICINES FOR THE INFECTION ?',
				},
			suffer_from_cancer:{
				required:'DID YOU SUFFER FROM ANY CANCER ?',
				},
			cancer_treatment_status:{
				required:'TREATMENT STATUS',
				},
			bleeding_disorder:{
				required:'DO YOU HAVE ANY CONGENITAL BLEEDING DISORDER ?',
				},
			which_disorder:{
				required:'WHICH DISORDER ?',
				},
			allergy_on_drugs:{
				required:'DID YOU EVER HAVE ANY ALLERGY TO ANY DRUGS ?',
				},
			allergy_which_drug:{
				required:'WHICH DRUGS ?',
				},
			surgery_done_in_anesthesia:{
				required:'DID YOU EVER UNDERGO SURGERY UNDER LOCAL ANESTHESIA(OR)GENERAL ANESTHESIA ?',
				},
			any_anesthesia_com:{
				required:'WAS THERE AN ANESTHESIA RELATED COMPLICATION ?',
				},
			what_anesthesia_com:{
				required:'WHAT WAS THE COMPLICATION?',
				},
			},
			errorPlacement: function(error, element) 
			{
	            if (element.attr("type") == "radio" || element.attr("type") == "checkbox") 
	            {
                	error.insertAfter($(element).closest('div'));
            	}
	            else {
	                element.after(error); // default error placement
	            }
      		},
			submitHandler: function (form) 
			{ 
				$('.message-div').css('display','block'); 
				var base_url = $('#base_url').val();
				$.ajax(
				{
					dataType: 'json',
					type: 'post',
					url: $(form).attr('action'),
					data: $(form).serialize(),
					success: function(responseData) { 
						if(responseData.result== 'success')
						{
							//$('.message-div').html(responseData.msg).css('color','green');
							//$('.close_signup').click();
							swal({
							title: "Success",
							text: "saved",
							type: "success",
							timer: 1000
							});
							
							window.open('site/pre_surgical_information_print/'+responseData.pre_surgical_id, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
							//location.reload();
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


$(document).ready(function() {
	$(".chk").keyup(function(event) {
		var value = $(this).val();
		var flag    =  $(this).attr('data-role');
		var msgbox = $(".message-div");
		var curItem=$(this).attr('id');
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		var base_url = $('#base_url').val();
		if((value.length > 9 && flag==2) || ((testEmail.test(value)) && flag==1))
		{
			$.ajax({  
			    type: "POST",  
			    url: base_url+"site/exist_pre_surgical_info",  
			    data: {value:value, flag:flag},
			    dataType:'json',
			    success: function(data){ 
			    	if (data.success == true) 
			    	{
			    		swal({
						  title: "Pre Surgical In formation",
						  text: "Pre Surgical Information Already Exist, do you want to Edit",
						  type: "warning",
						  showCancelButton: true,
						  confirmButtonClass: "btn-danger",
						  confirmButtonText: "Yes, Edit",
						  cancelButtonText: "No",
						  closeOnConfirm: false,
						  closeOnCancel: false
						},
						function(isConfirm) {
							if (isConfirm) 
							{
								swal({
							     title: "Getting Data",
							     text: "Please Wait...",
							     type: "success",
							     timer: 3000
							     });

								$('#pre_surgical_info_id').val(data.pre_surgi_info.pre_surgical_info_id);
							$.each(data.pre_surgi_info.presurgicaldata, function(field_name, value) {
								var input_type = $("input[name="+field_name+"]").attr('type');
								if (input_type == 'radio')
								{
									$("input[name="+field_name+"][value=" + value + "]").prop('checked', true);
									if (value == 'YES') 
									{
										$('.'+field_name+'_hide_show').show();
									}
								}
								else if(input_type == 'text')
								{
									$("input[name="+field_name+"]").val(value);
								}
								/*else if ($("input[name="+field_name+"]").is('select')) 
								{
									$("input[name="+field_name+"]").val(value)
								}*/
								else if ($("#"+field_name).is('select')) 
								{
									$("#"+field_name).val(value)
								}
								else if ($('.'+field_name).attr('type') == 'checkbox')
								{
									$.each(value, function(chk_in, chk_val) 
									{
										if ($("input[value='" + chk_val + "']").attr('type') == 'checkbox') 
										{
											$("input[value='" + chk_val + "']").prop('checked', true);
										}
										 
									});
								}
							});

							} else 
							{
								location.reload();
							}
						});
			    	}			    	  
			   } 
			  }); 
		}
		return false;
	});
});
