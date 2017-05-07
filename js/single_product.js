var xmlHttp = createAjaxObject();
var translate = {'PUREBOOST_SHOES' : 'PUREBOOST',
				 'STAN_SMITH_BOOST_SHOES': 'STAN SMITH BOOST',
				 'SUPERSTAR_BOOST_SHOES':'SUPERSTAR BOOST',
				 'GAZELLE_SHOES':'GAZELLE',
				 'ULTRABOOST_X_CLIMA_SHOES':'ULTRABOOST X CLIMA',
				 'SUPERSTAR_SHOES':'SUPERSTAR',
				 'NMD_R1_SHOES':'NMD_R1',
				 'PUREBOOST_X_SHOES':'PUREBOOST X',
				 'TUBULAR_INVADER_STRAP_SHOE':'TUBULAR INVADER STRAP',
				 'RAPIDARUN_UNCAGED_SHOES':'RAPIDARUN UNCAGED',
				 'ALPHABOUNCE_AMS_SHOES':'ALPHABOUNCE AMS',
				 'EQT_RUNNING_SUPPORT':'EQT RUNNING SUPPORT 93'
				};

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
function getProductInfo(name, shoeName)
{
	if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4)
	{
		xmlHttp.open("GET", "./php/single_product_db.php?name="+name, true);
		xmlHttp.onreadystatechange = genLoadNewPage(shoeName);
		xmlHttp.send(null);
	}
	else
	{;}
}

function genLoadNewPage(shoeName)
{
	function loadNewPage()
	{
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
		{
			var imgArray = getImgArray(xmlHttp.responseText);
			fillContent(shoeName, xmlHttp.responseText, imgArray);
		}
	}
	return loadNewPage;
}

function getImgArray(responseText)
{
	var imgArray = [];
	var responseArray = responseText.split(";");
	for(var i = 0; i < responseArray.length; ++i)
	{
		var result = responseArray[i].split("|");
		if(result[3] == "PUREBOOST_X_SHOES")
		{
			if(result[4] != null)
			{
				imgArray = imgArray.concat([result[4]]);
			}
		}
		else
		{
			if(result[4] != null)
			{
				imgArray = imgArray.concat([result[6]]);
			}
		}
	}
	return imgArray;
}

function fillContent(shoeName,responseText, imgArray)
{
	document.getElementsByClassName('shoeName')[0].innerHTML = shoeName;
	
	var row = shoeName == 'PUREBOOST X' ? responseText.split(";")[1].split("|") : responseText.split(";")[0].split("|");
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
	element.innerHTML = shoeName == 'PUREBOOST X' ? "WOMEN'S RUNNING SHOES" : row[0];
	
	element = document.getElementsByClassName("shoePrice")[0];
	var price = shoeName == 'PUREBOOST X' ? row[2] : row[4];
	element.innerHTML = "Price: $"+ price;
	
	element = document.getElementsByClassName("shoeColor")[0];
	element.innerHTML = shoeName == 'PUREBOOST X' ? row[1] : row[3];
	
	element = document.getElementsByClassName("shoeDescription")[0];
	element.innerHTML = shoeName == 'PUREBOOST X' ? row[0] : row[2];
}

var shoeName = translate[document.getElementsByClassName("shoeName")[0].innerHTML];
getProductInfo(document.getElementsByClassName("shoeName")[0].innerHTML, shoeName);
document.onload = genLoadNewPage(shoeName);