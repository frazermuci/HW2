<?php
function read_csv($file_name)
{
	$ret_array = array();
	$count = 0;
	foreach(file($file_name) as $line)
	{
		if($count != 0)
		{
			$split = explode(",", $line);			
			$ret_array += array($split[1] => $split[0] . "|" . $split[3]);
		}
		++$count;
	}
	return $ret_array;
}

function read_tax_rates_zip_info()
{
	return read_csv("../data/tax_rates2.csv");
}
?>