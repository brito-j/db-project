<?php
require 'connect.php';

$case_number = $_POST['case_number'];
$agent_representing_employee = $_POST['agent_representing_employer'];
$agent_attorney_name = $_POST['agent_attorney_name'];
$agent_attorney_city = $_POST['agent_attorney_city'];
$agent_attorney_state = $_POST['agent_attorney_state'];

$query = "INSERT INTO agent_info ";
$query .= "VALUES ('$case_number', ";
$query .= "'$agent_representing_employee', ";
$query .= "'$agent_attorney_name', ";
$query .= "'$agent_attorney_city', ";
$query .= "'$agent_attorney_state')";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
