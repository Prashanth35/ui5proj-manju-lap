/**
 * 
 */

function Input()
{
	this.type;
	
	this.create=function(val)
	{
		this.type=val;
		document.write("<input type="+this.type+">");
		
	}
	

}

inputType = new Input();
inputType.create("radio");
inputType.create("checkbox");
inputType.create("text");
inputType.create("textarea");