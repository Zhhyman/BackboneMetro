tpl = {
 
    // Hash of preloaded templates for the app
    templates: {},
 
    // Recursively pre-load all the templates for the app.
    // This implementation should be changed in a production environment:
    // All the template files should be concatenated in a single file.
    loadTemplates: function(names, callback) {
 
        var that = this;
 
        var loadTemplate = function(index) {
            var name = names[index];
            console.log('Loading template: ' + name);
            $.get('js/templates/' + name + '.html', function(data) {
                that.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        }
 
        loadTemplate(0);
    },
 
    // Get template by name from hash of preloaded templates
    get: function(name) {
        return this.templates[name];
    }
 
};

/*
 * Todas las vistas heredan del tipo basico, que hereda de backbone view.
 * 
 * 
 */
var BasicView = Backbone.View.extend({
	inEffect: '',				// Nombre del efecto de entrada que utilizaremos.
	outEffect: '',				// Nombre del efecto de salida de la ventana
	targetName: '',				// Id del div sobre el que se aplican los efectos.
	
	render:function(standData) {
		console.log('No default render defined');
	},
	
	getTarget:function() {
		return $('#' + this.targetName);
	},
	
	open:function() {			// Abrir la ventana.
		this.getTarget().addClass(this.inEffect);
	},
	
	close:function() {			// Cerrar la ventana.
		this.getTarget().addClass(this.outEffect)
		.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) { // Listen to the transition end event.
			$(this).removeClass(this.outEffect).removeClass(this.inEffect);
			Backbone.history.navigate( "", {trigger:'true'});
	    });;
	}
});

// Efecto carousel : http://metroui.org.ua/carousel.php#
var BasicHomeControl = Backbone.View.extend({
	changeEffect: '',
	changeDelay: '',
	targetName: ''
	
	
	
});