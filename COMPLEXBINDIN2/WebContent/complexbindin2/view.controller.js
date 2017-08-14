sap.ui.controller("complexbindin2.view", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf complexbindin2.view
*/
	onInit: function() {
var omodel=new sap.ui.model.json.JSONModel();
omodel.loadData("model/model.json");
this.getView().setModel(omodel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf complexbindin2.view
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf complexbindin2.view
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf complexbindin2.view
*/
//	onExit: function() {
//
//	}
	formatCountry :function(v){
		if(v== 'IN'){
			return 'India';
			
			
		}
		if(v== 'USA'){
			return 'United States Of america';
			
			
		}
		
		
	}

});