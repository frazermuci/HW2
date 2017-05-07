var xmlHttp = createAjaxObject();

function createAjaxObject()
{
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
		//alert();
	}
	return xmlHttp;
}

function sendOffAjaxGet(callback, get_string)
{
	if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4)
	{
		xmlHttp.open("GET", "php/serve_csvs.php?"+get_string, true);
		xmlHttp.onreadystatechange = callback;
		xmlHttp.send(null);
	}
	else
	{;}
}

function genCallback(className)
{
	function callback()
	{
		if(xmlHttp.status == 200 && xmlHttp.readyState == 4)
		{
			console.log(xmlHttp.responseText);
			document.getElementsByClassName(className)[0].value = xmlHttp.responseText;
		}
	}
	return callback;
}

function autoFillZip(element)
{
	
	if(element.name == "zip1")
	{
		sendOffAjaxGet(genCallback("state_input"), "tax=false&zip="+element.value);
	}
	else
	{
		sendOffAjaxGet(genCallback("ba_state_input"), "tax=false&zip="+element.value);
	}
}

function autoFillTax(element)
{
	sendOffAjaxGet(genCallback("tax_tag"), "zip=false&tax="+element.value);
}