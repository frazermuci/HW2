// Authors:
//     Arameh Giragosian     , STD ID: 16195776, UCInetID: giragosi
//     Matthew Stephen Frazer, STD ID: 70509018, UCInetID: frazerm
//     IN4MATX 124 - Spring 2017
//     PA 1 -  Building a dynamic website using HTML, JavaScript, and CSS

function FormContent()
{
    this.fname;
    this.lname;
    this.pnum;
    this.email;
    this.cardNum;
    this.cvc;
};

var formContent = FormContent();


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
    return bool;
}

