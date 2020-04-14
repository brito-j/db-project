<?php
require 'connect.php';

$total_workers = $_POST['total_workers'];
$new_employment = $_POST['new_employment'];
$continued_employment = $_POST['continued_employment'];
$change_previous_employment = $_POST['change_previous_employment'];
$new_concurrent_employment = $_POST['new_concurrent_employment'];
$change_employer = $_POST['change_employer'];
$amended_petition = $_POST['amended_petition'];
$full_time_position = $_POST['full_time_position'];
$case_number = $_POST['case_number'];

$query = "UPDATE employment_info ";
$query .= "SET total_workers = '$total_workers', ";
$query .= "new_employment = '$new_employment', ";
$query .= "continued_employment = '$continued_employment', ";
$query .= "change_previous_employment = '$change_previous_employment', ";
$query .= "new_concurrent_employment = '$new_concurrent_employment', ";
$query .= "change_employer = '$change_employer', ";
$query .= "amended_petition = '$amended_petition', ";
$query .= "full_time_position = '$full_time_position' ";
$query .= "WHERE case_number = '$case_number'";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
