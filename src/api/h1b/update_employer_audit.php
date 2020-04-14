<?php
require 'connect.php';

$employer_name = $_POST['employer_name'];
$employer_business_dba = $_POST['employer_business_dba'];
$employer_address = $_POST['employer_address'];
$employer_city = $_POST['employer_city'];
$employer_state = $_POST['employer_state'];
$employer_postal_code = $_POST['employer_postal_code'];
$employer_country = $_POST['employer_country'];
$employer_province = $_POST['employer_province'];
$employer_phone = $_POST['employer_phone'];
$employer_phone_ext = $_POST['employer_phone_ext'];
$date_changed = $_POST['date_changed'];
$case_number = $_POST['case_number'];

$query = "UPDATE employer_audit ";
$query .= "SET employer_name = '$employer_name', ";
$query .= "employer_business_dba = '$employer_business_dba', ";
$query .= "employer_address = '$employer_address', ";
$query .= "employer_city = '$employer_city', ";
$query .= "employer_state = '$employer_state', ";
$query .= "employer_postal_code = '$employer_postal_code', ";
$query .= "employer_country = '$employer_country', ";
$query .= "employer_province = '$employer_province', ";
$query .= "employer_phone = '$employer_phone', ";
$query .= "employer_phone_ext = '$employer_phone_ext', ";
$query .= "date_changed = '$date_changed' ";
$query .= "WHERE case_number = '$case_number'";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
