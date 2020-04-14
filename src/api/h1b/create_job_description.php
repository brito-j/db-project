<?php
require 'connect.php';

$case_number = $_POST['case_number'];
$job_title = $_POST['job_title'];
$soc_code = $_POST['soc_code'];
$soc_name = $_POST['soc_name'];
$naics_code = $_POST['naics_code'];

$query = "INSERT INTO job_description ";
$query .= "VALUES ('$case_number', ";
$query .= "'$job_title', ";
$query .= "'$soc_code', ";
$query .= "'$soc_name', ";
$query .= "'$naics_code')";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
