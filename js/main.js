window.Router = Backbone.Router.extend({
	routes: {
		"":"loadHome",
		"stand/:id/:zone":"loadStand",
		"list":"loadList"
	},
	
	initialize: function() {
		console.log('Initializing Main App');
	},
	
	loadHome: function() {
		console.log('Loading Home');
		if(!this.homeView) {
			this.homeView = new homeView();
		}
		this.homeView.render();
	},
	
	loadStand: function(id, zone) {
		console.log('Loading Stand');
		
		this.homeView.fadeOut();
		
		// Pedimos el modelo de stand.
		this.stand = new StandMetroVO();
		this.stand.entityFairRegistrationId = id;
		//this.stand.on("reset", this.standView.render(this.stand));
		//this.stand.fetch().complete(this.standFetchedHandler());
		this.stand.fetch({
			success: this.standFetchedHandler(this.stand).handler
		});
	},
	
	standFetchedHandler: function(data) {
		
		var standVO = data;
		
		return {
			handler: function() {
				// Hacer que esto devuelva una funcion que recibe como argumento el stand, porque si no no tiene la referencia al mismo.
				console.log('Stand data fetched :' + standVO.entityId);
			
				if(!this.standView) {
					this.standView = new StandView();
				}
				this.standView.render(standVO);
				this.standView.open();
			}
		};
	},
	
	loadList: function() {
		
	},
	
	stand:new StandMetroVO
});

tpl.loadTemplates(['homeView','standView','carouselButtonView', 'carouselItemView'], function() {
	app = new Router();
	Backbone.history.start();
})