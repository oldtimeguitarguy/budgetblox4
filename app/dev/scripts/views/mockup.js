define([
	// Initializers -------
	'marionette',
	'templates'
	
	// Views --------------
	
	// Collections --------
	
	// Regions ------------
	
	// Misc ---------------

],
function(
	// Initializers -------
	Marionette,
	templates
	
	// Views --------------
	
	// Collections --------
	
	// Regions ------------

) { 'use strict';
	return Marionette.ItemView.extend({

		// Template
		template: templates.mockup,

		// Give it an ID
		id: 'mockup-container',

		// Do some DOM stuff
		onShow: function() {
			this.$el.find('.balance').click(function(e) {
				e.preventDefault();

				$(this).parents('.budget-block').find('.meta').removeClass('squashed');
			});
			this.$el.find('.budget-limit, .close').click(function(e) {
				e.preventDefault();

				$(this).parents('.budget-block').find('.meta').addClass('squashed');
			});
		}

	});
});