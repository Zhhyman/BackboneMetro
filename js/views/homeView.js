var homeView = Backbone.View.extend({
	el: $('#main'),

	initialize:function () {
		console.log('Initializing Home View');
	},

	render: function() {
		console.log('Rendering Home View');
		
		// Compile the template using underscore
		var template = _.template( tpl.get('homeView'), {});

		// Load the compiled HTML into the Backbone "el"
		this.$el.html(template);
		this.fadeIn();
		return this;
	},
	
	events: {
		"click div[id=infostandBtn]":"loadInfostand"
	},
	
	loadInfostand: function() {
		console.log('Load Infostand called');
		this.fadeOut();
		Backbone.history.navigate( "stand/42/1", {trigger:'true'});
	},
	
	fadeOut: function() {
		console.log('Fade out home view');
		for(var i = 1; i <= 3; i++) {
			$('.col'+i).each(function(){
				$(this).addClass('fadeOutback').removeClass('fadeInForward-'+i);
			});
		}
	},
	
	fadeIn: function() {
		console.log('Fade in home view');
		for(var i = 1; i <= 3; i++) {
			$('.col'+i).each(function(){
				$(this).addClass('fadeInForward-'+i).removeClass('fadeOutback');
			});
		}
	}
	
	
})