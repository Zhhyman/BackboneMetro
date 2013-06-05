//var StandView = Backbone.View.extend({
var StandView = BasicView.extend({
	el: $('#content'),
	inEffect: 'openpage',
	outEffect: 'slidePageLeft',
	targetName: 'standContainer',		// Identificador del div principal sobre el que se aplican los efectos.
	
	initialize:function () {
		console.log('Initializing Stand View');
	},
	
	target:function() {
		//return $(targetName);
		return $('#' + this.targetName);
	},
	
	render:function(standData) {
		console.log('Rendering Stand View');
		var backgroundUrl = '/resources/' + standutils.template.getBackground(standData.template, 0);
		console.log('Background URL : ' + backgroundUrl);
		
		// Compile the template using underscore
		var template = _.template( tpl.get('standView'), {backgroundurl: backgroundUrl});

		// Load the compiled HTML into the Backbone "el"
		this.$el.html(template);
		
		return this;
	},
	
	events: {
		"click div[id=closeBtn]":"closeWindow"
	},
	
	closeWindow: function() {
		this.close();
	},

	
})