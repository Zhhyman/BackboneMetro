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
//			var carouselItemTemplate = _.template(tpl.get('carouselItemView'),{slideId:'slide' + index,logoUrl:item.logoUrl, standUrl:standUrl}); 
			carouselTarget.append(carouselItemTemplate);
		});
		
		$()['Carousel']({initAll: true});	// Carousel retocado para desplazamiento vertical.
		console.log("carousel render");
		return this;
	},
	
	events : {
		"click .slide":"logoClicked"
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
	},
	
	logoClicked: function(e) {
		var tarketKey = "slide";
		var targetId = e.currentTarget.id;
		var standIndex = "";
		var standId = "";
		
		if(targetId.search(tarketKey) == 0) {
			standIndex = targetId.substr(tarketKey.length);
			standId = this.collection.list[standIndex].entityFairRegistrationId;
			console.log("CLICK STAND : " + standId);
			Backbone.history.navigate( "stand/" + standId +"/1", {trigger:'true'});
		}
	}
	
})