StandMetroVO = Backbone.Model.extend({
	
	// Basic Model
	entityName: '',
	entityId: '',
	entityFairRegistrationId: '',
	logoUrl: '',
	template: '',
	
	// Fetching request data.
	fairId:'2',
	urlRoot:'/rest/stands/vo/',
	
	// Builds the request url based on the fairid and the entity id.
	url:function() {
		return this.urlRoot + this.fairId + '/' + this.entityFairRegistrationId + '.json';
	},
	
	// We parse the server response to fit the fields of the datamodel.
	parse: function(data) {
		// Leemos solamente el primer elemento que nos llegue.
		if(_.size(data) > 0) {
			var item = _.first(_.toArray(data));
			this.entityName = item.entityName;
			this.entityId = item.entityId;
			this.entityFairRegistrationId = item.entityFairRegistrationId;
			this.logoUrl = item.logoUrl;
			this.template = item.template;
		}
	}
}) 