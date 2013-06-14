StandMetroVOList = Backbone.Collection.extend({
    url: '/rest/stands/vo/'
});

CarouselItemVOList = Backbone.Collection.extend({
	// Fetching request data.
	fairId:'2',
	urlRoot:'/rest/carousel/list/',
	list:[],
	
	url: function() {
		return this.urlRoot + this.fairId + '.json';
	},

	parse: function(data) {
		this.data = data;
		var tmpList = _.first(_.toArray(data)) 
		this.list = _(tmpList).filter( function(item) {
			return (item.logoUrl != undefined);
		}) ;
	}
});

