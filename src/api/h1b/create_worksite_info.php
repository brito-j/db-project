<?php
require 'connect.php';

$case_number = $_POST['case_number'];
$public_disclosure_location = $_POST['public_disclosure_location'];
$worksite_city = $_POST['worksite_city'];
$worksite_county = $_POST['worksite_county'];
$worksite_state = $_POST['worksite_state'];
$worksite_postal_code = $_POST['worksite_postal_code'];

$query = "INSERT INTO worksite_info ";
$query .= "VALUES ('$case_number', ";
$query .= "'$public_disclosure_location', ";
$query .= "'$worksite_city', ";
$query .= "'$worksite_county', ";
$query .= "'$worksite_state', ";
$query .= "'$worksite_postal_code')";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
