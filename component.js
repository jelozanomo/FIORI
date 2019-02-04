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

	});

});
