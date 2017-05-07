// Authors:
//     Arameh Giragosian     , STD ID: 16195776, UCInetID: giragosi
//     Matthew Stephen Frazer, STD ID: 70509018, UCInetID: frazerm
//     IN4MATX 124 - Spring 2017
//     PA 2 -  Building a web application using PHP, Ajax, and MySQL

function FormContent()
{
    this.fname;
    this.lname;
    this.pnum;
    this.email;
	
	this.saddress;
	this.stown;
	this.sstate;
	this.szip;
	this.stax;
	this.method;
	
    this.cardNum;
    this.cvc;
	this.exp;
	
	this.baddress;
	this.btown;
	this.bstate;
	this.bzip;
	this.btax;
	
	this.product_name;
	this.price;
	this.size;
	this.quantity;
};


function goBack(message)
{
    window.alert(message);
    window.history.back();
}

function checkCustomerName()
{
    var customerName = document.getElementsByClassName("customerName")[0];
    var fname = customerName.getElementsByTagName("input")[0].value;
    var lname = customerName.getElementsByTagName("input")[1].value;
	
    var re = /.*[0-9()*&^%$#@!.,;:].*/;
    if(fname == "")
    {
        window.alert("You must specify a first name");
        return false;
    }

    if(re.test(fname))
    {
        window.alert("Please specify a valid first name");
        return false;
    }

    if(lname == "")
    {
        window.alert("You must specify a last name");
        return false;
    }

    if(re.test(lname))
    {
        window.alert("Please specify a valid last name");
        return false;
    }

    return true;
}

function checkPhoneNumberAndEmail()
{
    var customerPhone = document.getElementsByClassName("customerPhone")[0];
    var pnum = customerPhone.getElementsByTagName("input")[0].value;
    var email = customerPhone.getElementsByTagName("input")[1].value;
	
    var pnumRe = /^[1-9][0-9]{2}-[0-9]{3}-[0-9]{4}$/;
    var emailRe = /^[0-9A-z]*@[0-9A-z]*\.[a-z]{2,3}$/;
    
    if(pnum == "")
    {
        window.alert("Please specify a phone number");
        return false;
    }
    if(!pnumRe.test(pnum))
    {
        window.alert("Please specify a valid phone number (e.g. 222-222-2222)");
        return false;
    }
    
    if(email == "")
    {
        window.alert("Please specify an email");
        return false;
    }
    
    if(!emailRe.test(email))
    {
        window.alert("Please specify a valid email (e.g. anteater@uci.edu)");
        return false;
    }
    
    return true;
}

function checkAddress(bill_or_ship)
{
    var element = document.getElementsByClassName(bill_or_ship == "billing"?"customerBillingAddress" : "customerShippingAddress")[0];
    var inputs = element.getElementsByTagName("input");
    var billingAddr = inputs[0].value;
    var cityTown = inputs[1].value;
    
    var billingPat = /^[1-9]*[ A-z]*$/;
    var cityPat = /^[A-z]*$/;
    if(billingAddr == "")
    {
        window.alert("Please specify a "+ bill_or_ship+" address");
        return false;
    }
    
    if(!billingPat.test(billingAddr))
    {
        window.alert("Please specify a valid "+bill_or_ship+" address. (e.g 34 Penny Lane)");
        return false;
    }
    if(cityTown == "")
    {
        window.alert("Please specify a city/town");
        return false;
    }
    if(!cityPat.test(cityTown))
    {
        window.alert("Please specify a valid city/town");
        return false;
    }
    return true;    
}

function isExpired(date)
{
    var d = new Date();
    var year = d.getFullYear();
    var day = d.getDate();
    var month = d.getMonth()+1;
    
    var vals = date.split("-");
    var checkYear = parseInt(vals[0]);
    var checkDay = parseInt(vals[2]);
    var checkMonth =parseInt(vals[1]);
    if(checkYear < year)
    {
        return true;
    }
    if(checkYear == year)
    {
        if(checkMonth < month)
        {
            return true;
        }
        if(checkMonth == month)
        {
            if(checkDay < day)
            {
                return true;
            }
        }
    }
    
    return false;
}

function checkCreditCard()
{
    var creditCardElement = document.getElementsByClassName("cardInfo")[0];
    var inputs = creditCardElement.getElementsByTagName("input");
    var cardNum = inputs[0].value;
    var creditCardPattern = /^[0-9]{12}$/;
    var cvcPattern = /^[0-9]{3,4}$/;
    var date = creditCardElement.getElementsByTagName("input")[2].value;
    var datePattern = /^(2[0-9]{3})-(1[0-2]|0[1-9])-(0[1-9]|[12][0-9]|3[01])$/;
    if(cardNum == "")
    {
        window.alert("Please specify a card number");
        return false;
    }
    
    if(!creditCardPattern.test(cardNum))
    {
        window.alert("Please specify a valid credit card number with 12 digits");
        return false;
    }
    
    var cvc = inputs[1].value;
    if(cvc == "")
    {
        window.alert("Please specify a cvc number");
        return false;
    }
   
    if(!cvcPattern.test(cvc))
    {
        window.alert("Please specify a valid cvc number with 3 or 4 digits");
        return false;
    }
    
    var exp = inputs[2].value;
    if(exp == "")
    {
        window.alert("Please specify a card expiration date");
        return false;
    }
    
    if(!datePattern.test(date))
    {
        window.alert("Please use a valid expiration date");
        return false;
    }   
    
    if(isExpired(date))
    {
        window.alert("Your card is expired");
        return false;
    }
    
    return true;
}

function getFormString(formContent)
{
	var str = formContent.fname +"|"+formContent.lname+"|"+formContent.pnum+"|"+formContent.email+"|";
	str += formContent.saddress+"|"+formContent.stown+"|"+formContent.sstate+"|"+formContent.szip+"|";
	str += formContent.stax+"|"+formContent.method+"|"+formContent.cardNum+"|"+formContent.cvc+"|";
	str += formContent.exp+"|"+formContent.baddress+"|"+formContent.btown+"|"+formContent.bstate+"|";
	str += formContent.bzip+"|"+formContent.btax+"|"+formContent.product_name+"|"+formContent.price+"|";
	str += formContent.size+"|"+formContent.quantity;
	return str;
}

var xmlHttp;

function sendOff()
{
	var formContent = new FormContent();
	
	var element = document.getElementsByClassName("customerShippingAddress")[0];
	var sstate = element.getElementsByClassName("state_input")[0].value;
    var inputs = element.getElementsByTagName("input");
    var sAddr = inputs[0].value;
    var cityTown = inputs[1].value;
	var szip = document.getElementById("zip1_id").value;
	var stax = document.getElementById("tax1").innerHTML;
	
	formContent.saddress = sAddr;
	formContent.stown = cityTown;
	formContent.sstate = sstate;
	formContent.szip = szip;
	formContent.method = document.getElementsByClassName("shippingMethod")[0].getElementsByTagName("select")[0].value;
	formContent.stax = stax;
	
	var creditCardElement = document.getElementsByClassName("cardInfo")[0];
    var inputs = creditCardElement.getElementsByTagName("input");
	var date = inputs[2].value;
    var cardNum = inputs[0].value;
	var cvcNum = inputs[1].value;
	
	formContent.cardNum = cardNum;
	formContent.exp = date;
	formContent.cvc = cvcNum;
	
	element = document.getElementsByClassName("customerBillingAddress")[0];
	var bstate = element.getElementsByClassName("ba_state_input")[0].value;
    inputs = element.getElementsByTagName("input");
    var bAddr = inputs[0].value;
    var bcityTown = inputs[1].value;
	var bzip = document.getElementById("zip2_id").value;
	var btax = document.getElementById("tax2").innerHTML;
	
	formContent.baddress = bAddr;
	formContent.btown = bcityTown;
	formContent.bstate = bstate;
	formContent.bzip = bzip;
	formContent.btax = btax;
	
	element = document.getElementsByClassName("customerName")[0];
	inputs = element.getElementsByTagName("input");

	formContent.fname = inputs[0].value;
	formContent.lname = inputs[1].value;
	
	element = document.getElementsByClassName("customerPhone")[0];
	inputs = element.getElementsByTagName("input");
	
	formContent.pnum = inputs[0].value;
	formContent.email = inputs[1].value;
	
	element = document.getElementsByClassName("shoeInfo")[0];
	formContent.product_name = element.getElementsByTagName("h1")[0].innerHTML;
	formContent.price = element.getElementsByTagName("h3")[0].innerHTML.split("$")[1];
	
	element = document.getElementsByClassName("shoeSize")[0];
	formContent.size = element.getElementsByTagName("select")[0].value;
	
	element = document.getElementsByClassName("shoeQuantity")[0];
	formContent.quantity = element.getElementsByTagName("input")[0].value;
	
	var str = getFormString(formContent);
	
	try
	{
		if(window.ActiveXObject)
		{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else
		{
			xmlHttp = new XMLHttpRequest();
		}
	}
	catch(e)
	{
		xmlHttp = false;
	}
	
	function callback()
	{
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
		{
			console.log(xmlHttp.responseText);
		}
	}
	
	if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4)
	{
		xmlHttp.open("GET", "php/order_info.php?order_info="+str, true);
		xmlHttp.onreadystatechange = callback;
		xmlHttp.send(null);
	}
}

function checkValidInput(quantity)
{
    if(quantity <= 0)
    {
        window.alert("Please specify a valid quantity");
        return false;
    }
    var bool = checkCustomerName();    
    bool = bool && checkPhoneNumberAndEmail();
    bool = bool && checkAddress("shipping");
    var bool = bool && checkCreditCard();
    bool = bool && checkAddress("billing");
	
	if(bool)
	{
		sendOff();
	}

    return bool;
}

