<?php
require 'connect.php';

$h1b_dependent = $_POST['h1b_dependent'];
$willful_violator = $_POST['willful_violator'];
$support_h1b = $_POST['support_h1b'];
$labor_con_agree = $_POST['labor_con_agree'];
$case_number = $_POST['case_number'];

$query = "UPDATE employment_h1b_info ";
$query .= "SET h1b_dependent = '$h1b_dependent', ";
$query .= "willful_violator = '$willful_violator', ";
$query .= "support_h1b = '$support_h1b', ";
$query .= "labor_con_agree = '$labor_con_agree' ";
$query .= "WHERE case_number = '$case_number'";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
