sap.ui.controller("z_odata_filters.view", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf z_odata_filters.view
*/
	onInit: function() {
		var url="proxy/http/services.odata.org/Northwind/Northwind.svc/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf z_odata_filters.view
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf z_odata_filters.view
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf z_odata_filters.view
*/
//	onExit: function() {
//
//	}
	
	onSearch: function(oControlEvent)
	{
		//this.getView().byId("idSerach").getValue();
		//Grabbing value
		var query = oControlEvent.getParameters().query;
		// doing the filtering operations
		//var filters=new Array();
		var filters=[];
		var filter1 = new sap.ui.model.Filter("Country", sap.ui.model.FilterOperator.EQ, query);
		filters.push(filter1);
		
		var oTable=this.getView().byId("idTable");
		oTable.getBinding("items").filter(filters);
		debugger;
		var query = oControlEvent.getParameters().query;
		
		
	}
	
	

});