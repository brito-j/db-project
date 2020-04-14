<?php
require 'connect.php';

$job_title = $_POST['job_title'];
$soc_code = $_POST['soc_code'];
$soc_name = $_POST['soc_name'];
$naics_code = $_POST['naics_code'];
$case_number = $_POST['case_number'];

$query = "UPDATE job_description ";
$query .= "SET job_title = '$job_title', ";
$query .= "soc_code = '$soc_code', ";
$query .= "soc_name = '$soc_name', ";
$query .= "naics_code = '$naics_code' ";
$query .= "WHERE case_number = '$case_number'";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
