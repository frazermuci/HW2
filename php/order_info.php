<?php 
require_once('conection.php');
global $conn;

function checkForInjection($string)
{;}

if($_GET['order_info'])
{
$arr = explode("|", $_GET['order_info']);
checkForInjection($arr);
$prepared = $conn->$prepare("INSERT INTO order_info.contact_info () VALUES (?,?,?,?)");
$prepared.execute('ssss',$arr[0],$arr[1],$arr[2], $arr[3]);

$prepared = $conn->$prepare("INSERT INTO order_info.shipping_info () VALUES (?,?,?,?,?)");
$prepared.execute('sssss',$arr[4],$arr[5],$arr[6], $arr[7], $arr[8]);

$prepared = $conn->$prepare("INSERT INTO order_info.card_info () VALUES (?,?,?)");
$prepared.execute('sss',$arr[9],$arr[10],$arr[11]);

$prepared = $conn->$prepare("INSERT INTO order_info.billing_info () VALUES (?,?,?,?)");
$prepared.execute('ssss',$arr[12],$arr[13],$arr[14], $arr[15]);

$prepared = $conn->$prepare("INSERT INTO order_info.product_info () VALUES (?,?,?,?)");
$prepared.execute('ssss',$arr[16],$arr[17],$arr[18], $arr[19]);

echo '<html>
<head>
</head>
<body>
</body>
</html>';
}
?>