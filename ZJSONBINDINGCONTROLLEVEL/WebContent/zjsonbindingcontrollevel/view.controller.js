sap.ui.controller("zjsonbindingcontrollevel.view", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zjsonbindingcontrollevel.view
*/
	onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/data.json");
			this.getView().setModel(oModel);
			var otable = this.getView().byId("idTable2");
			
			
			
			var oTemplate = new sap.m.ColumnListItem({
														cells : [
														         		new sap.m.Text({text : "{Name}"}),
														         		new sap.m.Text({text : "{Unit_Price}"}),
														         		new sap.m.Text({text : "{Quantity}"}),
														         		new sap.m.Text({text : "{TOtal_Price}"}),
														         		new sap.m.Text({text : "{Increment_Quantity}"})
														         ]
													})
		
			otable.bindAggregation("items", "/products",oTemplate);
			
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zjsonbindingcontrollevel.view
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zjsonbindingcontrollevel.view
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zjsonbindingcontrollevel.view
*/
//	onExit: function() {
//
//	}

});