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
		var backgroundTemplate = standutils.template.getBackground(standData.template, 0);
		if(backgroundTemplate.length == 0) {
			backgroundTemplate = standutils.template.getBackground(standData.template, 1);
		}
		var backgroundUrl = '/resources/' + backgroundTemplate;
		var entityName = standData.entityName.toUpperCase();
		
		// Compile the template using underscore
		var template = _.template( tpl.get('standView'), {backgroundurl: backgroundUrl, entityName: entityName});

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