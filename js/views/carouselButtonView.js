var carouselButtonView = Backbone.View.extend({
	el:$(this.el),
	carouselId:'carousel',
	
	initialize: function() {
		// this.model.on('change', this.render, this);
	    // this.model.on('destroy', this.remove, this);
		this.collection = new CarouselItemVOList();
		this.collection.fairId = '2';
		//this.collection.on('sync', this.render, this);
		//this.collection.on('change', this.collectionFetchedHandler);
		this.collection.on('error', this.collectionError, this);
//		this.collection.fetch();
		this.collection.fetch({
			success: this.collectionFetchedHandler(this).handler
		});
	},
	
	render: function() {
		var template = _.template(tpl.get('carouselButtonView'),{id:this.carouselId});
		this.$el.html(template);

		var carouselTarget = $('#slides');
		_.each(this.collection.list, function(item, index) {
			console.log('Entity : ' + item.entityName + ' , logo : ' + item.logoUrl + " - " + index);
			var carouselItemTemplate = _.template(tpl.get('carouselItemView'),{slideId:'slide' + index,logoUrl:item.logoUrl}); 
			carouselTarget.append(carouselItemTemplate);
		});
		
		$()['Carousel']({initAll: true});	// Carousel retocado para desplazamiento vertical.
		console.log("carousel render");
		return this;
	},
	
	collectionFetchedHandler: function( target ) {
		
		//var collection = data;
		var targetView = target;
		
		return {
			handler: function() {
				console.log('Collection data fetched :' + _.size(targetView.collection.list));
				_.each(targetView.collection.list, function(item) {
					console.log('Entity : ' + item.entityName + ' , logo : ' + item.logoUrl);
				});
				targetView.render();
			}
			
		}
		
	},
	
	collectionError: function() {
		console.log('Error fetching collection');
	}
})