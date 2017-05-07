<?php
$servername = "localhost";
$username = "root";
$password = "";
try
{
	global $conn;
	$conn = new PDO("mysql:host=$servername;dbname=shoe_store", $username, $password);
	// set the PDO error mode to exception
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)  
{
	echo "Connection failed: " . $e->getMessage();
} 
?>
