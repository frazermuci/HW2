<?php
function read_csv($file_name, $check)
{
	$ret_array = array();
	$count = 0;
	foreach(file($file_name) as $line)
	{
		if($count != 0)
		{
			$split = explode(",", $line);
			if($check == 0)
			{
				$ret_array += array($split[0] => $split[1]);
			}
			else
			{
				$ret_array += array($split[0] => $split[3]);
			}
		}
		++$count;
	}
	return $ret_array;
}

function read_tax_rates()
{
	return read_csv("../data/tax_rates2.csv", 1);
}

function read_zip_codes()
{
	return read_csv("../data/zip_codes.csv", 0);
}

function get_states()
{
	$states = array();
	foreach(read_zip_codes() as $key => $value)
	{
		$states[] = $key;
	}
	return $states;
}
?>