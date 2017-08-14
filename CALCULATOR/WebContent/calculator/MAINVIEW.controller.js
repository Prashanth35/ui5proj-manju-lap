sap.ui.controller("calculator.MAINVIEW", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf calculator.MAINVIEW
*/
	onInit: function() {
		var that = this;
		this.inputs=[];
		//var that=this;//.getView().byId("idinput");
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf calculator.MAINVIEW
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf calculator.MAINVIEW
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf calculator.MAINVIEW
*/
//	onExit: function() {
//		
//this.inputs.join('')/this.inputs.push(val);
//	},
	
	id1 :function(){
		var val=this.getView().byId("btn1id").getText();
		
	   //this.getView().byId("idinput").setValue(btnval);
		debugger;
		//this.inputs.push(val)
		//this.getView().byId("idinput").setValue(this.inputs.join(''));
		this.fillArry(val);
		
		
	},
	id2 :function(){
		var val=this.getView().byId("btn2id").getText();
		
	   //this.getView().byId("idinput").setValue(btnval);
		debugger;
//		this.inputs.push(val)
//		this.getView().byId("idinput").setValue(this.inputs.join(''));
		this.fillArry(val);
	},
	id3 :function(){
		var val=this.getView().byId("btn3id").getText();
		
	   //this.getView().byId("idinput").setValue(btnval);
		debugger;
		this.inputs.push(val)
		this.getView().byId("idinput").setValue(this.inputs.join(''));
	},
	id4 :function(){
		var val=this.getView().byId("btn4id").getText();
		
	   //this.getView().byId("idinput").setValue(btnval);
		debugger;
		this.inputs.push(val)
		this.getView().byId("idinput").setValue(this.inputs.join(''));
	},
	 insert: function() {
	    var display = document.getElementById('display');
	    clearPreviousResult();
	    if (display.value.indexOf('.') === -1) display.value += '.';
	},
	
	fillArry : function(controlId){
		this.inputs.push(val)
		this.getView().byId("idinput").setValue(that.inputs.join(''));
	}



	



});
//CODE
//Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		

