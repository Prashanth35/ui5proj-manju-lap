sap.ui.core.UIComponent.extend("smax.route.Component", 
		{
									metadata :
									{ 
										rootView :"view.App",
										routing :{
													config:{
															viewType:"XML", // framework have to understand and convert its respective convertion
															routerClass : "sap.m.routing.Router",
															controlAggregation : "pages", // app have to have children so aggregation is required 
															controlId:"idApp" //id of parent
															},
													routs:[
													       {
													    	   pattern :"pageone", // its the name is used to serach in url for individuals
													    	   //Makindg default page put pattern: ""
													    	   name:"route1",
													    		   target :"PAGE1",// its required when the view have multiple views within the single page like splitapp
													    	   //viewName:"view.Page1" // including pages to the app
										        	
													       },
													       {
													    	   pattern :"pagetwo",
													    	   name:"route2",
													    	  // target:["Pagw2"]
													    	   viewName:"view.Page2"
													       },
													       {
													    	   pattern :"pagethree",
													    	   viewName:"view.Page3",
													    	   //viewType : ""
													       }
										       // till 1.28 version you can specify route inside component
													       ],
													      targets: {}, 
												}
										},
init:function()
{
// initialise the router
	sap.ui.core.UIComponent.prototype.init.apply(this);
	var oRouter=this.getRouter().initialize();
	
}


});