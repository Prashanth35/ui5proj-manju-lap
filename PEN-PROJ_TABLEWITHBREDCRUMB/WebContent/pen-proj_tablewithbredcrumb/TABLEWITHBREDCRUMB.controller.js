sap.ui.controller("pen-proj_tablewithbredcrumb.TABLEWITHBREDCRUMB", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pen-proj_tablewithbredcrumb.TABLEWITHBREDCRUMB
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pen-proj_tablewithbredcrumb.TABLEWITHBREDCRUMB
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pen-proj_tablewithbredcrumb.TABLEWITHBREDCRUMB
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pen-proj_tablewithbredcrumb.TABLEWITHBREDCRUMB
*/
//	onExit: function() {
//
//	}
	Onpress1 :function(){
		//alert("hi");
		debugger;
	var oTable = 	new sap.m.Table({columns:[
		                            new sap.m.Column({header: new sap.m.Text({text:"Name"})})
		                          ]});
		                  
	}
});