sap.ui.controller("zjsontable.view", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zjsontable.view
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
		
		oModel.loadData("model/data.json");
		this.getView().setModel(oModel);
		
		/* // This is UI level Binding 
		 * // second  way of defining,loading and getting table aggregation binding
		 *    --------------------------------------------------------------------
		 * var oModel = new sap.ui.model.json.JSONMode();
		 * oModel.loadData("model/data.json");
		 * vat oTamp = this.getView().byId("idTable");
		 * oTemp.setModel(oModel);
		 * 
		 * *
		 */
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zjsontable.view
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zjsontable.view
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zjsontable.view
*/
//	onExit: function() {
//
//	}

});