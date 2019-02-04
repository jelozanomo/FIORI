sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.nav.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// call the init function of the parent
      			//Anulamos la función de inicio y llamamos primero a la función de inicio del padre.
			UIComponent.prototype.init.apply(this, arguments);

			// create the views based on the url/hash
      			//Obtenemos una referencia al enrutador y llamamos a initialize () en él.
			this.getRouter().initialize();
		}
		//El enrutador se crea automáticamente una instancia con la 
		//configuración cargada en el descriptor.
		//Los eventos de enrutamiento y nuestra configuración en el descriptor 
		//ahora se habilitan automáticamente en la aplicación.
	});

});

//UIComponent.prototype.init.apply(this, arguments);
//Devuelve el contenido de sap.ui.core.UIComponent # createContent. Si especificó una vista de raíz 
//en sus metadatos o en el archivo descriptor (manifest.json), obtendrá la instancia de la vista raíz. 
//Este captador solo devolverá algo si se invoca la función sap.ui.core.UIComponent # init. Si createContent 
//no está implementado y no hay una vista de raíz, devolverá un valor nulo. Aquí hay un ejemplo:


//getRouter()
//Devuelve la referencia a la instancia del enrutador que 
//ha creado el UIComponent una vez que se han definido las rutas en los metadatos de enrutamiento.
