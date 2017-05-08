<?php 
require_once('connect.php');
global $conn;

function checkForInjection($arr)
{
	foreach($arr as $string)
	{
		if(preg_match("/[#=\*\|;,:%]|(Select|Delete)(?=(.*From))|Insert(?=(.*Into))|Drop(?=(.*Table))|Create(?=(.*(Schema|Table)))|Update(?=(.*Set))|(Or|And)(?=(.*(In|Any|All|=|\!=|)))/i",$string))
		{
			echo "Detected SQL statement in value " . $string;
			exit();
		}
	}
}

function checkValidationForm($arr)
{
	$patterns = array("/^[^0-9()*&^%$#@!.,;:]*$/", "/^[^0-9()*&^%$#@!.,;:]*$/",
					  "/^[1-9][0-9]{2}-[0-9]{3}-[0-9]{4}$/", "/^[0-9A-z]*@[0-9A-z]*\.[a-z]{2,3}$/",
					  "/^[1-9]*[ A-z]*$/", "/^[ A-z]*$/", "/^[ A-z]*$/", "/^[0-9]*$/",
					  "/^[0-9]*\.[0-9]*$/", "/^[A-z]*$/", "/^[0-9]{12}$/", "/^[0-9]{3,4}$/",
					  "/^(2[0-9]{3})-(1[0-2]|0[1-9])-(0[1-9]|[12][0-9]|3[01])$/", "/^[1-9]*[ A-z]*$/",
					  "/^[A-z ]*$/", "/^[A-z ]*$/", "/^[0-9]*$/", "/^[0-9]*\.[0-9]*$/", "/^[ A-z]*$/", "/^[0-9]*$/",
					  "/^[0-9]*$/", "/^[0-9]*$/");
	for($i = 0; $i < sizeof($patterns); ++$i)
	{
		if(!preg_match($patterns[$i], $arr[$i]))
		{
			echo "form input invalid";
			exit();
		}
	}
}

if($_GET['order_info'])
{
$arr = explode("|", $_GET['order_info']);
checkForInjection($arr);
checkValidationForm($arr);
$prepared = $conn->prepare("INSERT INTO order_info.contact_info (fname, lname, pnumber, email) VALUES (:fname,:lname,:pnumber,:email)");
$prepared->bindParam(':fname', $arr[0]);
$prepared->bindParam(':lname', $arr[1]);
$prepared->bindParam(':pnumber', $arr[2]);
$prepared->bindParam(':email', $arr[3]);
$prepared->execute();

$prepared = $conn->prepare("INSERT INTO order_info.shipping_info (address, city, state, zip, tax, method) VALUES (:address,:city,:state,:zip,:tax,:method)");
$prepared->bindParam(':address', $arr[4]);
$prepared->bindParam(':city', $arr[5]);
$prepared->bindParam(':state', $arr[6]);
$prepared->bindParam(':zip', $arr[7]);
$prepared->bindParam(':tax', $arr[8]);
$prepared->bindParam(':method', $arr[9]);
$prepared->execute();

$prepared = $conn->prepare('INSERT INTO order_info.card_info (card_num, cvc_num, exp) VALUES (:card_num,:cvc_num,:exp)');
$prepared->bindParam(':card_num', $arr[10]);
$prepared->bindParam(':cvc_num', $arr[11]);
$prepared->bindParam(':exp', $arr[12]);
$prepared->execute();

$prepared = $conn->prepare("INSERT INTO order_info.billing_info (address, city, state, zip, tax) VALUES (:address,:city,:state,:zip,:tax)");
$prepared->bindParam(':address', $arr[13]);
$prepared->bindParam(':city', $arr[14]);
$prepared->bindParam(':state', $arr[15]);
$prepared->bindParam(':zip', $arr[16]);
$prepared->bindParam(':tax', $arr[17]);
$prepared->execute();

$prepared = $conn->prepare("INSERT INTO order_info.product_info (product_name, price, size, quantity) VALUES (:product_name,:price,:size,:quantity)");
$prepared->bindParam(':product_name', $arr[18]);
$prepared->bindParam(':price', $arr[19]);
$prepared->bindParam(':size', $arr[20]);
$prepared->bindParam(':quantity', $arr[21]);
$prepared->execute();

$subtotal = (int)$arr[21] * (int)$arr[19];
$tax = (float)$arr[17];
$total = $subtotal + $subtotal*$tax;

echo '
<html>
<head>
<title>Our Team</title>

<!-- Authors:
     Arameh Giragosian     , STD ID: 16195776, UCInetID: giragosi
     Matthew Stephen Frazer, STD ID: 70509018, UCInetID: frazerm
     IN4MATX 124 - Spring 2017
     PA 2 -  Building a web application using PHP, Ajax, and MySQL -->
	
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="css/main.css" />
</head>
<body>
<div class="container">
		<h1 style=\'text-align: center;\'>Order Confirmation</h1>
		<div class="navbar">
			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="products.php">Products</a></li>
				<li><a href="about.html">About Us</a></li>
				<li><a href="our_team.html">Our Team</a></li>
			</ul>
		</div>
	</div>
<div class="container">
</br>
<div>
	<h1>Hello ' . $arr[0] . ' ' . $arr[1] . ' your purchase of ' . $arr[18] . ' has been processed.</h1>
</div>
<div>
	</br>
	<table>
	<tr><td>'. 'Quantity: ' . $arr[21] . '</td></tr>
	<tr><td>' . 'Price: $' . $arr[19] . '</td></tr>
	<tr><td>' . 'Size: ' . $arr[20] . '</td></tr>
	<tr><td>' . 'Sub-Total: ' . $subtotal . '</td></tr>
	<tr><td>' . 'Sales Tax: ' . $arr[17] . '</td></tr>
	<tr><td>' . 'Total: ' . $total . '</td></tr>
	</table>
</div>
</div>
</body>
</html>';
}
?>