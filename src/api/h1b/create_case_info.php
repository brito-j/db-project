<?php
require 'connect.php';

$case_number = $_POST['case_number'];
$case_status = $_POST['case_status'];
$case_submitted = $_POST['case_submitted'];
$decision_date = $_POST['decision_date'];
$visa_class = $_POST['visa_class'];
$employment_start_date = $_POST['employment_start_date'];
$employment_end_date = $_POST['employment_end_date'];
$original_cert_date = $_POST['original_cert_date'];

$query = "INSERT INTO case_info ";
$query .= "VALUES ('$case_number', ";
$query .= "'$case_status', ";
$query .= "'$case_submitted', ";
$query .= "'$decision_date', ";
$query .= "'$visa_class', ";
$query .= "'$employment_start_date', ";
$query .= "'$employment_end_date', ";
$query .= "'$original_cert_date')";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
