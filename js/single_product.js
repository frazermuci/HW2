var xmlHttp = createAjaxObject();

function toImage(image)
{
    var element = document.getElementById("main_image");
    element.setAttribute("src", image.getAttribute("src"));
}

function creatAjaxObject()
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
function getProductInfo(name)
{
	if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4)
	{
		xmlHttp.open("GET", "./php/connect.php?name="+name, true);
		xmlHttp.onreadystatechange = loadNewPage;
		xmlHttp.send(null);
	}
	else
	{;}
}
	
function loadNewPage()
{
	if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
	{
		var imgArray = getImgArray(xmlHttp.responseText);
		fillContent(xmlHttp.responseText, imgArray);
	}
}

function getImgArray(responseText)
{
	var imgArray = [];
	var responseArray = responseText.split(";");
	for(var i = 0; i < responseArray.length; ++i)
	{
		imgArray = imgArray.concat([responseArray[i].split("|")[6]]);
	}
	return imgArray;
}

function fillContent(responseText, imgArray)
{
	var row = responseText.split(";")[0].split("|");
	var element = document.getElementsByClassName("div_main_image")[0];
	element.innerHTML = "<img id=\"main_image\" src=\"" + imgArray[0]+"\">";
	
	element = document.getElementsByClassName("smallImage")[0];
	var imagesString = "<ul>";
	for(var i =1 ; i < imgArray.length; ++i)
	{
		imagesString = imagesString +"<li><img class=\"singleProduct\" src=\""+imgArray[i]+"\" onclick=\"toImage(this);\"</img></li>";
	}	
	imagesString = imagesString + "</ul>";
	element.innerHTML = imagesString;
	
	element = document.getElementsByClassName("shoeInfo")[0].getElementsByTagName("h4")[0];
	element.innerHTML = row[0];
	
	element = document.getElementsByClassName("shoePrice")[0];
	element.innerHTML = "Price: $"+row[4];
	
	element = document.getElementsByClassName("shoeColor")[0];
	element.innerHTML = row[3];
	
	element = document.getElementsByClassName("shoeDescription")[0];
	element.innerHTML = row[2];
}	
getProductInfo(document.getElementsByClassName("shoeName")[0].innerHTML);
document.onload = loadNewPage;