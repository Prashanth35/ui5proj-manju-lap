/**
 * 
 */

function SetBtnWidth()
{
	this.width;
	this.btnName;
	
	this.setWidth= function(val)
	{
		this.width=val;
		
	}
	
	this.setBtnName= function(name)
	{
		this.btnName=name;
		
	}
	
	this.crtButton= function()
	{
		document.write("<button>"+ this.btnName + "</button>");
				
	}
	
	this.applyWidth=function()
	{
		console.log(document.getElementsByTagName("button"));
		document.getElementsByTagName("button")[0].setAttribute("style", "width:"+this.width+"");
		//document.getElementsByTagName("button").style.width = this.width;
		document
		
	}
	
	
}

var Button= new SetBtnWidth();
Button.setBtnName("Register");
Button.crtButton();
Button.setWidth("500px");
Button.applyWidth();
//Button.Display();