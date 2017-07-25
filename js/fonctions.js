
$(document).ready(function() {
    $('select').material_select();
  });

 $(function() {
	$(document).ready(function() {
		
		$('.xlarge-row').css('height', $(window).height() + 'px');
		$('.xlarge-row').css('width', $(window).width());
		$('.full-color').css('min-height', $(window).height() + 'px');
		
		$('.collapsible').collapsible();
		$('.chips').material_chip();
		$('.side-list a').click(function(){
			saddChip({tag: $(this).text()}, $('.chips'));
			});
	});
}); 

function saddChip(elem, cible){
	
	isValid = function($chips, elem) {
      var chips = $chips.data('chips');

      var exists = false;
      for (var i=0; i < chips.length; i++) {
        if (chips[i].tag === elem.tag) {
            exists = true;
            return;
        }
      }
      return '' !== elem.tag && !exists;
    };
	
	if(!this.isValid(cible, elem)) return;

	var $renderedChip = $('<div class="chip"></div>');
	$renderedChip.text(elem.tag);
	$renderedChip.append($('<i class="material-icons close">close</i>'));
	$renderedChip.insertBefore(cible.find('input'));
	var newData = [];
	var oldData = cible.data('chips');
	for (var i = 0; i < oldData.length; i++) {
		newData.push(oldData[i]);
	}
	newData.push(elem);
	cible.data('chips', newData);
				
	return;
	}

function addInput(){
	var nb = $('.added').length;
	var input = $('<div class="input-field col s4 added" id="added' + nb + '"><input id="inputAdded' + nb + '" type="text"><label for="' + nb + '">Nom de la variable ' + nb +'</label></div>');
	input.appendTo($('.add-input'));
}

function delInput(){
	var nb = $('.added').length-1;
	$('#added' + nb).remove();
}
function showHideSigninForms(id) {
	
	
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

$('a[href^="#"]').on('click', function(evt){
       evt.preventDefault(); 
       var target = $(this).attr('href');
       $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1000 );
    });
