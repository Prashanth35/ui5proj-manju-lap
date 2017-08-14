sap.ui.controller("p-project1.ListPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf p-project1.ListPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf p-project1.ListPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf p-project1.ListPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf p-project1.ListPage
*/
//	onExit: function() {
//
//	}
	
	press: function(){
		var pass=this.getView().getParent().getParent();
		pass.toDetail("idVIEW11--idHTMLInterViewPage");
	},
	press2: function(){
		var pass=this.getView().getParent().getParent();
		pass.toDetail("idVIEW11--idHTMLPage");
	}

});