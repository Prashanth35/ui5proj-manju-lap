sap.ui.controller("zodata_table.view", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zodata_table.view
*/
	onInit: function() {
		var url="proxy/http/services.odata.org/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);
		
	},
	selected  : function(oEvent)
	{
		// var tab= oEvent.getView().getParameters.listItem;
		var tab= this.getView().byId("idTable").getSelectedItem();
		debugger; 
		var cel = tab.getCells();
		var val = cel[0].getText();
		var bin = this.getView().byId("idSimpleForm");
		bin.bindElement("/Customers('"+val+"')");
		
	}
	/*selected  : function(){
		var id=this.getSource().getBindingContext();
		var bin = this.getView().byId("idSimpleForm");
		bin.bindElement(id+"/");
		
	}*/
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zodata_table.view
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zodata_table.view
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zodata_table.view
*/
//	onExit: function() {
//
//	}

});