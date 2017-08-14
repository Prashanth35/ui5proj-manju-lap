sap.ui.controller("complexbinding.complexview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf complexbinding.complexview
*/
	onInit: function() {
		var Omodel=new sap.ui.model.json.JSONModel();
			/*text1 : "prashanth",
			text2 : "govardan",
			text3 : "Ram" 
	});*/
		Omodel.loadData("model/model.json")
		
		this.getView().setModel(Omodel);
		var orModel=new sap.ui.model.resource.ResourceModel({
			
			bundleName: "i18l.myresource",
			bundlelocale : "de"
		});
		thisgetView().setModel(orModel,"m2")
		
		/*this.getView().byId("IDtable").setModel().bindAggregation("items","/orders",new sap.m.ColumnListItem({
			cells :[
			        new sap.m.Text({text:"month"}),

			        new sap.m.Text({text:"amount"}),

			        new sap.m.Text({text:"status"})
			        
			        ]
			
		}))*/
	}
		
		/*Omodel.loadData("Omodel/model.json");
		this.getView().setModel(Omodel);
		 //reference
		var list = new sap.m.List({
		    
		    
		});
		var itemTemplate = new sap.m.ActionListItem({
		    text : "{name}",
		    
		});
		list.bindItems("/oreders/items/", itemTemplate)
*/
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf complexbinding.complexview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf complexbinding.complexview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf complexbinding.complexview
*/
//	onExit: function() {
//
//	}

});