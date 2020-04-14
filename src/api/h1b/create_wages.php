<?php
require 'connect.php';

$case_number = $_POST['case_number'];
$prevailing_wage = $_POST['prevailing_wage'];
$pw_unit_of_pay = $_POST['pw_unit_of_pay'];
$pw_wage_level = $_POST['pw_wage_level'];
$pw_source = $_POST['pw_source'];
$pw_source_year = $_POST['pw_source_year'];
$pw_source_other = $_POST['pw_source_other'];
$wage_rate_of_pay_from = $_POST['wage_rate_of_pay_from'];
$wage_rate_of_pay_to = $_POST['wage_rate_of_pay_to'];
$wage_unit_of_pay = $_POST['wage_unit_of_pay'];

$query = "INSERT INTO wages ";
$query .= "VALUES ('$case_number', ";
$query .= "'$prevailing_wage', ";
$query .= "'$pw_unit_of_pay', ";
$query .= "'$pw_wage_level', ";
$query .= "'$pw_source', ";
$query .= "'$pw_source_year', ";
$query .= "'$pw_source_other', ";
$query .= "'$wage_rate_of_pay_from', ";
$query .= "'$wage_rate_of_pay_to', ";
$query .= "'$wage_unit_of_pay')";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
