<?php
require 'connect.php';

$case_status = $_POST['case_status'];
$case_submitted = $_POST['case_submitted'];
$decision_date = $_POST['decision_date'];
$visa_class = $_POST['visa_class'];
$employment_start_date = $_POST['employment_start_date'];
$employment_end_date = $_POST['employment_end_date'];
$original_cert_date = $_POST['original_cert_date'];
$case_number = $_POST['case_number'];

$query = "UPDATE case_info ";
$query .= "SET case_status = '$case_status', ";
$query .= "case_submitted = '$case_submitted', ";
$query .= "decision_date = '$decision_date', ";
$query .= "visa_class = '$visa_class', ";
$query .= "employment_start_date = '$employment_start_date', ";
$query .= "employment_end_date = '$employment_end_date', ";
$query .= "original_cert_date = '$original_cert_date' ";
$query .= "WHERE case_number = '$case_number'";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
