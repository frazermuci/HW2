

<html>
<head>
	<title>Awesome Shoes</title>

<!-- Authors:
     Arameh Giragosian     , STD ID: 16195776, UCInetID: giragosi
     Matthew Stephen Frazer, STD ID: 70509018, UCInetID: frazerm
     IN4MATX 124 - Spring 2017
     PA 2 -  Building a web application using PHP, Ajax, and MySQL -->
	
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="css/main.css" />
	<script>
	
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
	var xmlHttp = createAjaxObject();
	function getProductInfo(name)
	{
		if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4)
		{
			xmlHttp.open("GET", "php/single_product.php?shoe_page="+name+"&shoe_page_img="+name+"_001.jpg", true);
			xmlHttp.onreadystatechange = loadNewPage;
			xmlHttp.send(null);
		}
		else
		{;}
	}
	
	function loadNewPage()
	{
		if(xmlHttp.readyState == 4&& xmlHttp.status == 200)
		{
			document.write(xmlHttp.responseText);
		}
	}
	</script>
</head>
<body>
	<!-- Header -->
	<div class="container">
		<dir class="comp_logo">
			<h1><a href="index.php">AWESOME SHOES</a></h1>
		</dir>
		<div class="navbar">
			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="products.html">Products</a></li>
				<li><a href="about.html">About Us</a></li>
				<li><a href="our_team.html">Our Team</a></li>
			</ul>
		</div>
	</div>

	<!-- Products Table -->
	<div class="container">
		<div class="products">
			<h2>Our Products</h2>
			<table>
				<tr>
					<!-- PUREBOOST SHOES-->
					<td><h3>PUREBOOST</h3>
						<h5>MEN'S RUNNING SHOES</h5>
							<img class="singleProduct" src="./images/PUREBOOST_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('PUREBOOST_SHOES');">
						<h6>Color: Core Black</h6>
						<div class="price">$200.00</div>
					</td>
					<!-- STAN SMITH BOOST SHOES -->
					<td><h3>STAN SMITH BOOST</h3>
						<h5>MEN'S ORIGINAL SHOES</h5>
							<img class="singleProduct" src="./images/STAN_SMITH_BOOST_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('STAN_SMITH_BOOST_SHOES');">
						<h6>Color: Collegiate Navy</h6>
						<div class="price">$140.00</div>
					</td>
					<!-- SUPERSTAR BOOST SHOES -->
					<td><h3>SUPERSTAR BOOST</h3>
						<h5>MEN'S ORIGINAL SHOES</h5>
							<img class="singleProduct" src="./images/SUPERSTAR_BOOST_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('SUPERSTAR_BOOST_SHOES');">
						<h6>Color: Core Black</h6>
						<div class="price">$120.00</div>
					</td>
					<!-- GAZELLE SHOES -->
					<td><h3>GAZELLE</h3>
						<h5>MEN'S ORIGINAL SHOES</h5>
							<img class="singleProduct" src="./images/GAZELLE_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('GAZELLE_SHOES');">
						<h6>Color: Collegiate Royal</h6>
						<div class="price">$80.00</div>
					</td>
				</tr>

				<tr>
					<!-- ULTRABOOST X CLIMA SHOES -->
					<td><h3>ULTRABOOST X CLIMA</h3>
						<h5>WOMEN'S RUNNING SHOES</h5>
							<img class="singleProduct" src="./images/ULTRABOOST_X_CLIMA_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('ULTRABOOST_X_CLIMA_SHOES');">
						<h6>Color: Glow Orange</h6>
						<div class="price">$180.00</div>
					</td>
					<!-- SUPERSTAR SHOES -->
					<td><h3>SUPERSTAR</h3>
						<h5>WOMEN'S ORIGINAL SHOES</h5>
							<img class="singleProduct" src="./images/SUPERSTAR_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('SUPERSTAR_SHOES');">
						<h6>Color: White Ftw</h6>
						<div class="price">$80.00</div>
					</td>
					<!-- NMD_R1 SHOES -->
					<td><h3>NMD_R1</h3>
						<h5>WOMEN'S ORIGINAL SHOES</h5>
							<img class="singleProduct" src="./images/NMD_R1_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('NMD_R1_SHOES');">
						<h6>Color: Core Black</h6>
						<div class="price">$170.00</div>
					</td>
					<!-- PUREBOOST X SHOES -->
					<td><h3>PUREBOOST X</h3>
						<h5>WOMEN'S RUNNING SHOES</h5>
							<img class="singleProduct" src="./images/PUREBOOST_X_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('PUREBOOST_X_SHOES');">
						<h6>Color: Bright Red</h6>
						<div class="price">$150.00</div>
					</td>
				</tr>

				<tr>
					<!-- TUBULAR INVADER STRAP SHOES -->
					<td><h3>TUBULAR INVADER STRAP</h3>
						<h5>KIDS UNISEX ORIGINAL SHOES</h5>
							<img class="singleProduct" src="./images/TUBULAR_INVADER_STRAP_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('TUBULAR_INVADER_STRAP_SHOES');">
						<h6>Color: Olive Cargo</h6>
						<div class="price">$85.00</div>
					</td>
					<!-- RAPIDARUN UNCAGED SHOES -->
					<td><h3>RAPIDARUN UNCAGED</h3>
						<h5>KIDS UNISEX RUNNING SHOES</h5>
							<img class="singleProduct" src="./images/RAPIDARUN_UNCAGED_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('RAPIDARUN_UNCAGED_SHOES');">
						<h6>Color: Solid Grey</h6>
						<div class="price">$65.00</div>
					</td>
					<!-- ALPHABOUNCE AMS SHOES -->
					<td><h3>ALPHABOUNCE AMS</h3>
						<h5>KIDS UNISEX RUNNING SHOES</h5>
							<img class="singleProduct" src="./images/ALPHABOUNCE_AMS_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('ALPHABOUNCE_AMS_SHOES');">
						<h6>Color: Clear Grey</h6>
						<div class="price">$90.00</div>
					</td>
					<!-- EQT RUNNING SUPPORT 93 SHOES -->
					<td><h3>EQT RUNNING SUPPORT 93</h3>
						<h5>KIDS UNISEX ORIGINAL SHOES</h5>
							<img class="singleProduct" src="./images/EQT_RUNNING_SUPPORT_93_SHOES_001.jpg" title="Buy Now" onClick="getProductInfo('EQT_RUNNING_SUPPORT_93_SHOES');">
						<h6>Color: Core Black</h6>
						<div class="price">$70.00</div>
					</td>
				</tr>
			</table>
		</div>
	</div>
	


	<!-- Footer -->
	<div class="container footer">
		&copy; AWESOME SHOES. All rights reserved.
	</div>

</body>
</html>