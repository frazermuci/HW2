<?php
function handleQuery($prep, $name)
{
	$str = "";
	$count = 0;
	while($res = $prep->fetch())
	{
		if($count > 0)
		{
			$str = $str . ";";
		}
		$str = $str . $res[0] . "|" . $res[1] . "|" . $res[2] . "|" . $res[3] . "|" . $res[4] . "|" . $res[5] . "|" . $res[6];
		++$count;
	}
	return $str;
}

function getProductInfo()
{
	$servername = "localhost";
	$username = "root";
	$password = "";
	try {
		$conn = new PDO("mysql:host=$servername;dbname=shoe_store", $username, $password);
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
	catch(PDOException $e)
    {
		echo "Connection failed: " . $e->getMessage();
    } 
	if($_GET['name'])
	{
		$name = $_GET['name'];
		$prepared = $conn->prepare("SELECT * FROM product_info JOIN images ON product_info.product_name = images.product_name WHERE images.product_name = '". $name . "'");
		$prepared->execute();
		$result = handleQuery($prepared, $name);
		$conn = null;
		return $result;
	}
	else
	{
		$conn = null;
	}
}

$result = getProductInfo();
echo "" . $result;
?>
