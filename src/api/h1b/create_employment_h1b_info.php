<?php
require 'connect.php';

$case_number = $_POST['case_number'];
$h1b_dependent = $_POST['h1b_dependent'];
$willful_violator = $_POST['willful_violator'];
$support_h1b = $_POST['support_h1b'];
$labor_con_agree = $_POST['labor_con_agree'];

$query = "INSERT INTO employment_h1b_info ";
$query .= "VALUES ('$case_number', ";
$query .= "'$h1b_dependent', ";
$query .= "'$willful_violator', ";
$query .= "'$support_h1b', ";
$query .= "'$labor_con_agree')";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
