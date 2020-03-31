<?php
require 'database.php';

$sql = "SELECT \"Connection successful!\"";

if($res = mysqli_query($con,$sql))
{
  echo json_encode($res);
}
else
{
  http_response_code(404);
}
