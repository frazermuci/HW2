<?php
require('read_in_csvs.php');

$echoable = "";
	
if($_GET['zip'] && $_GET['zip'] != "false")
{
	$arr = read_zip_codes();
	$key = "\"" . $_GET['zip'] . "\"";
	if(array_key_exists($key, $arr))
	{
		$echoable =  str_replace("\"", "", $arr[$key]);
	}
}

if($_GET['tax'] && $_GET['tax'] != "false")
{
	$arr = read_tax_rates();
	if(array_key_exists($_GET['tax'], $arr))
	{
		$echoable =  $arr[$_GET['tax']];
	}
}
	
echo $echoable;
?>