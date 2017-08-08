
 $(function() {
	$(document).ready(function() {

		$('.xlarge-row').css('height', $(window).height());
		$('.xlarge-row').css('width', $(window).width());
		$('.full-color').css('min-height', $(window).height() + 'px');

		$(".dropdown-button").dropdown({ hover: true });
		$('.collapsible').collapsible();
		$('.chips').material_chip();
		$('.side-list a').click(function(){
			saddChip({tag: $(this).text()}, $('.chips'));
			});
		$('select').material_select();

		var scrollOption = [{selector: '#writeHelper', offset: 100, callback: function(el) {$('#help_input_button').fadeIn("slow"); }},
                        {selector: "#presentation1", offset: 100,callback: function(el) {$('nav').addClass('white');
                                    $('#logo-container').addClass('tbleu').removeClass('white-text');
                                    $('nav .btn-line').addClass('btn-line-color').removeClass('btn-line'); }}];
		Materialize.scrollFire(scrollOption);

		$('.button-collapse').sideNav({
		  menuWidth: 300, // Default is 300
		  edge: 'right', // Choose the horizontal origin
		  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		  draggable: true, // Choose whether you can drag to open on touch screens,
		}
  );
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
	var input = $('<div class="input-field col s4 added" id="added' + nb + '" style="margin-top: 30px;"><input id="inputAdded' + nb + '" type="text"><label for="' + nb + '">Nom de la variable ' + nb +'</label></div>');
	input.appendTo($('.add-input'));
}

function addInput_option(){
	var nb = $('.added').length;
	var input = $('<div class="input-field col s4 added" id="added' + nb + '" style="margin-top: 30px;"><input id="inputAdded_checkbox' + nb + '" type="text"><label for="inputAdded_checkbox' + nb + '">Question fermée à poser ' + nb +'</label></div>');
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

function editProfil(){
	$('.modifiable-section').wrap('<form class="col s12 color-form">');
	var i  = 1;
	$('.modifiable').each(function(){

		$(this).after('<div class="row"><div class="input-field  secondary-text"><input name="edit_field_' + i + '" type="text" id="edit_field_' + i + '"><label for="edit_field_' + i + '" class="active">' + $(this).attr('id') + '</label></div></div><br>');
		$('#edit_field_' + i).val($(this).text());
		$(this).remove();
		i += 1;
	});

	$('img').after('<form action="#"><div class="file-field input-field"><span>' + '<img src="images/photoprofil.png" class="circle" height="200px" width="200px"/>' + '</span><input type="file" class="btn"></div></form>');
	$('img:first').remove();
	$('.modifiable-section').append('<div class="col m9 offset-m3 center"><button class="btn btnp-line waves-effect waves-light" type="submit" name="action">Confirmer les modifications<i class="material-icons right">send</i></button></div>');
}

$('a[href^="#"]').on('click', function(evt){
       evt.preventDefault();
       var target = $(this).attr('href');
       $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1000 );
    });

$('.top-nav-button').hover(
	function(){$('.top-nav').slideDown("slow");});
$('.top-nav').hover(
	function(){$(this).css('display', 'block');},
	function(){$(this).slideUp("slow");}
	);
