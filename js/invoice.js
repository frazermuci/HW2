// Authors:
//     Arameh Giragosian     , STD ID: 16195776, UCInetID: giragosi
//     Matthew Stephen Frazer, STD ID: 70509018, UCInetID: frazerm
//     IN4MATX 124 - Spring 2017
//     PA 1 -  Building a dynamic website using HTML, JavaScript, and CSS

function generate_invoice()
{
    var quantity = parseInt(document.getElementsByClassName("shoeQuantity")[0].getElementsByTagName("input")[0].value);
    if(!checkValidInput(quantity))
    {
        return;
    }
    
    var element = document.getElementsByClassName("shoeInfo")[0];
    var name = element.getElementsByTagName("h1")[0].innerHTML;
    var size = document.getElementsByClassName("shoeSize")[0].getElementsByTagName("select")[0].value;
    var color = element.getElementsByTagName("h6")[0].innerHTML;
    var category = element.getElementsByTagName("h4")[0].innerHTML; 
    var description = document.getElementsByClassName("shoeDescription")[0].innerHTML;
    var price = parseInt(element.getElementsByTagName("h3")[0].innerHTML.split("$")[1].split(".")[0]);
    
    var element = document.getElementsByClassName("customerBillingAddress")[0];
    var inputs = element.getElementsByTagName("input");
    var billingAddr = inputs[0].value;
    var bCityTown = inputs[1].value;
    
    var element = document.getElementsByClassName("customerShippingAddress")[0];
    var inputs = element.getElementsByTagName("input");
    var shippingAddr = inputs[0].value;
    var sCityTown = inputs[1].value;
    
    var customerName = document.getElementsByClassName("customerName")[0];
    var fname = customerName.getElementsByTagName("input")[0].value;
    var lname = customerName.getElementsByTagName("input")[1].value;
    
    
    var emailBody = "Thank you "+fname+" "+lname+" for shopping with us!\n";
    emailBody += "Product: "+name+"\n";
    emailBody += "Size: "+size+"\n";
    emailBody += "Quantity: "+quantity+"\n";
    emailBody += "Color: "+color+"\n";
    emailBody += "Product Category: "+category+"\n";
    emailBody += "Price: "+price+"\n";
    emailBody += "Total: "+price*quantity+"\n";
    emailBody += "Shipping Address: "+shippingAddr+"\n";
    emailBody += "Shipping City/Town: "+sCityTown+"\n";
    emailBody += "Billing Address: "+billingAddr+"\n";
    emailBody += "Billing City/Town: "+bCityTown+"\n";
    
    //window.location.href = "mailto:somebody@example.com?Subject=Your%20Purchase%20Information&body="+emailBody;
}