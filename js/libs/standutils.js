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
				var sceneProperties = $(sceneContainerDocument).find(this.propertyElementPrefix);
				var backgroundProperty = $(sceneContainerDocument).find(this.propertyElementPrefix + "[ name='" + this.backgroundNamePrefix + "']");
				var backgroundData = $(backgroundProperty).attr('value');

				//var backgroundData = $(sceneContainerDocument).find(this.propertyElementPrefix + "[ name='" + this.backgroundNamePrefix + "']").text();
				return backgroundData;
			}
		}
}