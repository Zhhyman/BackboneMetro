var homeView = Backbone.View.extend({
	el: $('#main'),

	initialize:function () {
		console.log('Initializing Home View');
	},

	render: function() {
		console.log('Rendering Home View');
		
		// Interactividades de la home.
		//var item1Template = _.template(tpl.get('carouselButtonView'),{});
		//var template = _.template( tpl.get('homeView'), {item1: item1Template});
		
		// Compile the template using underscore.
		var template = _.template( tpl.get('homeView'), {});

		// Load the compiled HTML into the Backbone "el"
		this.$el.html(template);
		this.renderInteractions();
		this.fadeIn();
		return this;
	},
	
	renderInteractions: function() {
		var interaction1 = $('.carousel-thumb');
		if(!this.carouselButtonView) {
			this.carouselButtonView = new carouselButtonView();
		}
		this.carouselButtonView.setElement(interaction1).render();
		//interaction1.html(this.carouselButtonView.render());
		//this.carouselButtonView.render().interaction1;
	},
	
	events: {
		"click div[id=infostandBtn]":"loadInfostand"
	},
	
	loadInfostand: function() {
		console.log('Load Infostand called');
		this.fadeOut();
		Backbone.history.navigate( "stand/42/1", {trigger:'true'});
	},
	
	// EFFECTS
	
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