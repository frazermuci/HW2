<?php 
require_once('connect.php');
global $conn;

function checkForInjection($string)
{;}


if($_GET['order_info'])
{
$arr = explode("|", $_GET['order_info']);
checkForInjection($arr);
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

/*echo '<html>
<head>
</head>
<body>
</body>
</html>';*/
echo $_GET['order_info'];
}
?>