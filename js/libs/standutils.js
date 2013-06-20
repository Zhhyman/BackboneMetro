standutils = {
		template: {
			// XML element names.
			beanPrefix:'bean',
			zonePrefix:'sceneContainer',
			propertyElementPrefix:'property',
			backgroundNamePrefix:'background',
			
			// Util functions to read xml.
			getBackground: function(data, zone) {
				var sceneContainerDocument = $(data).find(this.beanPrefix + "[ id='" + this.zonePrefix + zone + "']");
				if(sceneContainerDocument === undefined || sceneContainerDocument.length == 0) {	// Si no es un stand3d buscamos sin zona.
					sceneContainerDocument = $(data).find(this.beanPrefix + "[ id='" + this.zonePrefix + "']");
				}
				if(sceneContainerDocument !== undefined && sceneContainerDocument.length > 0) {
					var sceneProperties = $(sceneContainerDocument).find(this.propertyElementPrefix);
					var backgroundProperty = $(sceneContainerDocument).find(this.propertyElementPrefix + "[ name='" + this.backgroundNamePrefix + "']");
					var backgroundData = $(backgroundProperty).attr('value');
					if(backgroundData.indexOf("in.jpg") == backgroundData.length - "in.jpg".length) { // Comprobamos si la imagen es una tira de stands para cambiarla por su snapshot
						backgroundData = backgroundData.substr(0, backgroundData.length - "in.jpg".length) + "snapshot.jpg";
					}
					//var backgroundData = $(sceneContainerDocument).find(this.propertyElementPrefix + "[ name='" + this.backgroundNamePrefix + "']").text();
					return backgroundData;
				} else {
					return "";
				}
			}
		},

		getStandUrl: function(entityFairRegistrationId) {
			
		}
}