sap.ui.controller("z07072017split_app_nav.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf z07072017split_app_nav.Master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf z07072017split_app_nav.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf z07072017split_app_nav.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf z07072017split_app_nav.Master
*/
//	onExit: function() {
//
//	}
	
	Registration: function()
	{
		var ref= this.getView().getParent().getParent();
		ref.toDetail("idBody1--idRegistration");
		
	},

	WorkExp: function()
	{
			var ref= this.getView().getParent().getParent();
			ref.toDetail("idBody1--idDetail");
			
	}


});