sap.ui.controller("zodata_cust.view", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zodata_cust.view
*/
	onInit: function() {
		var url= "proxy/http/services.odata.org/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		
		this.getView().setModel(oModel);
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zodata_cust.view
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zodata_cust.view
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zodata_cust.view
*/
//	onExit: function() {
//
//	}

});