/**
 * @tag models, home
 * Wraps backend answer services.  Enables 
 * [Sib.Models.Answer.static.findAll retrieving],
 * [Sib.Models.Answer.static.update updating],
 * [Sib.Models.Answer.static.destroy destroying], and
 * [Sib.Models.Answer.static.create creating] answers.
 */
$.Model.extend('Sib.Models.Answer',
/* @Static */
{
	/**
 	 * Retrieves answers data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped answer objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
	findAll: function( params, success, error ){
		$.ajax({
			url: '/answer',
			type: 'get',
			dataType: 'json',
			data: params,
			success: this.callback(['wrapMany',success]),
			error: error,
			fixture: "//sib/fixtures/answers.json.get" //calculates the fixture path from the url and type.
		});
	},
	/**
	 * Updates a answer's data.
	 * @param {String} id A unique id representing your answer.
	 * @param {Object} attrs Data to update your answer with.
	 * @param {Function} success a callback function that indicates a successful update.
 	 * @param {Function} error a callback that should be called with an object of errors.
     */
	update: function( id, attrs, success, error ){
		$.ajax({
			url: '/answers/'+id,
			type: 'put',
			dataType: 'json',
			data: attrs,
			success: success,
			error: error,
			fixture: "-restUpdate" //uses $.fixture.restUpdate for response.
		});
	},
	/**
 	 * Destroys a answer's data.
 	 * @param {String} id A unique id representing your answer.
	 * @param {Function} success a callback function that indicates a successful destroy.
 	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	destroy: function( id, success, error ){
		$.ajax({
			url: '/answers/'+id,
			type: 'delete',
			dataType: 'json',
			success: success,
			error: error,
			fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
		});
	},
	/**
	 * Creates a answer.
	 * @param {Object} attrs A answer's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	create: function( attrs, success, error ){
		$.ajax({
			url: '/answers',
			type: 'post',
			dataType: 'json',
			success: success,
			error: error,
			data: attrs,
			fixture: "-restCreate" //uses $.fixture.restCreate for response.
		});
	}
},
/* @Prototype */
{});