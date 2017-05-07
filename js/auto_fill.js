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

function genCallback(className, taxTag)
{
	function callback()
	{
		if(xmlHttp.status == 200 && xmlHttp.readyState == 4)
		{
			var split = xmlHttp.responseText.split("|");
			document.getElementsByClassName(className)[0].value = split[0];
			document.getElementById(taxTag).innerHTML = split[1];
		}
	}
	return callback;
}

function autoFillZipTax(element)
{
	
	if(element.name == "zip1")
	{
		sendOffAjaxGet(genCallback("state_input", "tax1"), "zip_info="+element.value);
	}
	else
	{
		sendOffAjaxGet(genCallback("ba_state_input", "tax2"), "zip_info="+element.value);
	}
}
