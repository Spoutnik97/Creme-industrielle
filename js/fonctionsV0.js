function showHideSigninForms(id) {
	
	document.getElementById('myinfo').style.display ="block";
	
	// Etudiant
	if(id == 1){
		document.getElementById('signin_form_student').style.display ="block";
		document.getElementById('signin_form_business').style.display ='none';
		document.getElementById('signin_form_school').style.display ='none';
		Materialize.showStaggeredList('#signin_form_student'); 
	}
	//business
	if(id == 2){
		document.querySelector('#signin_form_student').style.display ='none';
		document.querySelector('#signin_form_business').style.display ='block';
		document.querySelector('#signin_form_school').style.display ='none';
		Materialize.showStaggeredList('#signin_form_business'); 		
	}
	//school
	if(id == 3){
		document.querySelector('#signin_form_business').style.display ='none';
		document.querySelector('#signin_form_student').style.display ='none';
		document.querySelector('#signin_form_school').style.display ='block';
		Materialize.showStaggeredList('#signin_form_school'); 		
	}

}

$(document).ready(function() {
    $('select').material_select();
  });

 $(function() {

	$(document).ready(function() {
        // Sections height
        
            var sH = $(window).height() + 30;
			$('.sfullscreen').css('height', sH + 'px');
			$('.sfullscreen').css('width', $(window).width());

		
    });
	 }); 
