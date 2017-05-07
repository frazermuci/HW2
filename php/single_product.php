<?php 
if($_GET['shoe_page'])
{
echo '<html>
<head>
<script>
</script>
<title>NMD_R1 Shoes</title>
<!-- Authors:
     Arameh Giragosian     , STD ID: 16195776, UCInetID: giragosi
     Matthew Stephen Frazer, STD ID: 70509018, UCInetID: frazerm
     IN4MATX 124 - Spring 2017
     PA 2 -  Building a web application using PHP, Ajax, and MySQL -->
	
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="css/main.css"></link>
	
	<script src="./js/auto_fill.js"></script>
	<!-- <script src="./js/invoice.js"></script> -->
	<!--<script src="./js/validation.js"></script> -->
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
				<li><a href="products.php">Products</a></li>
				<li><a href="about.html">About Us</a></li>
				<li><a href="our_team.html">Our Team</a></li>
			</ul>
		</div>
	</div>
	<!-- Products Informations-->
		<div class="container">
			<div class="productInfo">
			<br />
			<br />
				<table class="productInfo">
					<tr>
						<td>
							<div class="smallImage">
								
							</div>
						</td>
						<td>
							<div class="div_main_image">
							
							</div>
						</td>
						<td>
							<div class="shoeInfo">
										<h1 class="shoeName">' . $_GET['shoe_page'] . '</h1> 
										<h4></h4>
										<h3 class="shoePrice"></h3>
										<h6 class="shoeColor"></h6>
								<div class="shoeDescription">
								</div>
								
								<div class="shoeSize">
									Size: <select>
									<option value="8">8</option>
									<option value="9">9</option>                                                              
									<option value="10">10</option>
									</select>
								</div>
								<div class="shoeQuantity">
									Quantity: <input type="number" value="1" min="1" max="5"/>
								</div>
								<a href="#placeOrder" class="button">BUY NOW</a>
							</div>
						</td>
					</tr>
				</table>
				<br />
				<br />
				<br />
				<hr>
				<div id="placeOrder" class="customerInfo">
					<h2>CHECKOUT INFO</h2>
					<div class="customerName">
						NAME: <input type="text" name="name"/>LAST NAME: <input type="text" lastName="city" size="37"/>
					</div>
					<div class="customerPhone">
						PHONE NUMBER: <input type="text" name="phone"/>EMAIL: <input type="text" name="email"/>
					</div>
					<div class="customerShippingAddress">
						SHIPPING ADDRESS: <input type="text" name="shippingAddress" size="50"/>CITY/TOWN: <input type="text" name="shippingCity"/>
					<br/> STATE: <input class="state_input" type="text" name="state"/> ZIP: <input id="zip1_id" type="text" name="zip1" onkeyup="autoFillZipTax(this);"/> 
					</br> TAX: <h1 id = "tax1"></h1>
					</div>
				</div>
				<div class="shippingMethod">
					SHIPPING METHOD: <select>
					<option value="overnight">Overnight</option>
					<option value="2DayExpd">2-days expedited</option>                            
					<option value="6DayGround">6-days ground</option>
					</select>
				</div>
				<div class="cardInfo">
					CARD NUMBER: <input type="number" name="cardNumber"/>
					CARD CVC NUMBER: <input type="number" name="address"/>
					EXP. DATE: <input type="date" name="address"/>
				</div>
				<div class="customerBillingAddress">
					BILLING ADDRESS: <input type="text" name="billingAddress" size="50"/>CITY/TOWN: <input type="text" name="billingCity"/>
					<br/> STATE: <input class="ba_state_input" type="text" name="state"/> ZIP: <input id="zip2_id" type="text" name="zip2" onkeyup="autoFillZipTax(this);"/> 
					<br/> TAX: <h1 id = "tax2"></h1>
				</div>
				<div class="placeOrderButton">
					<button class="button" onClick="generate_invoice()">CHECKOUT YOUR ORDER</button>
				</div>				
			<br />
			<br />
			</div>
		</div>
	<!-- Footer -->
	<div class="container footer">
		&copy; AWESOME SHOES. All rights reserved.
	</div>
 <script src="./js/single_product.js"></script>
</body>
</html>';
}
?>