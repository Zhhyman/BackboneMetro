var carouselButtonView = Backbone.View.extend({
	el:$(this.el),
	
	initialize: function() {
		// this.model.on('change', this.render, this);
	    // this.model.on('destroy', this.remove, this);
	},
	
	render: function() {
		var template = _.template(tpl.get('carouselButtonView'),{});
		this.$el.html(template);
		return this;
	}
})