<?php
require('read_in_csvs.php');

$echoable = "|";
	
if($_GET['zip_info'])
{
	$arr = read_tax_rates_zip_info();
	if(array_key_exists($_GET['zip_info'], $arr))
	{
		$echoable =  $arr[$_GET['zip_info']];
	}
}
echo $echoable;
?>