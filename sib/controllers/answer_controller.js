/**
 * @tag controllers, home
 * Displays a table of answers.	 Lets the user 
 * ["Sib.Controllers.Answer.prototype.form submit" create], 
 * ["Sib.Controllers.Answer.prototype.&#46;edit click" edit],
 * or ["Sib.Controllers.Answer.prototype.&#46;destroy click" destroy] answers.
 */
$.Controller.extend('Sib.Controllers.Answer',
/* @Static */
{
	onDocument: true
},
/* @Prototype */
{
 /**
 * When the page loads, gets all answers to be displayed.
 */
 load: function(){
	if(!$("#answer").length){
	 $(document.body).append($('<div/>').attr('id','answer'));
		 Sib.Models.Answer.findAll({}, this.callback('list'));
 	}
 },
 /**
 * Displays a list of answers and the submit form.
 * @param {Array} answers An array of Sib.Models.Answer objects.
 */
 list: function( answers ){
	$('#answer').html(this.view('init', {answers:answers} ));
 },
 /**
 * Responds to the create form being submitted by creating a new Sib.Models.Answer.
 * @param {jQuery} el A jQuery wrapped element.
 * @param {Event} ev A jQuery event whose default action is prevented.
 */
'form submit': function( el, ev ){
	ev.preventDefault();
	new Sib.Models.Answer(el.formParams()).save();
},
/**
 * Listens for answers being created.	 When a answer is created, displays the new answer.
 * @param {String} called The open ajax event that was called.
 * @param {Event} answer The new answer.
 */
'answer.created subscribe': function( called, answer ){
	$("#answer tbody").append( this.view("list", {answers:[answer]}) );
	$("#answer form input[type!=submit]").val(""); //clear old vals
},
 /**
 * Creates and places the edit interface.
 * @param {jQuery} el The answer's edit link element.
 */
'.edit click': function( el ){
	var answer = el.closest('.answer').model();
	answer.elements().html(this.view('edit', answer));
},
 /**
 * Removes the edit interface.
 * @param {jQuery} el The answer's cancel link element.
 */
'.cancel click': function( el ){
	this.show(el.closest('.answer').model());
},
 /**
 * Updates the answer from the edit values.
 */
'.update click': function( el ){
	var $answer = el.closest('.answer'); 
	$answer.model().update($answer.formParams());
},
 /**
 * Listens for updated answers.	 When a answer is updated, 
 * update's its display.
 */
'answer.updated subscribe': function( called, answer ){
	this.show(answer);
},
 /**
 * Shows a answer's information.
 */
show: function( answer ){
	answer.elements().html(this.view('show',answer));
},
 /**
 *	 Handle's clicking on a answer's destroy link.
 */
'.destroy click': function( el ){
	if(confirm("Are you sure you want to destroy?")){
		el.closest('.answer').model().destroy();
	}
 },
 /**
 *	 Listens for answers being destroyed and removes them from being displayed.
 */
"answer.destroyed subscribe": function(called, answer){
	answer.elements().remove();	 //removes ALL elements
 }
});