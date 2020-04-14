<?php
require 'connect.php';

$table = $_POST['table'];
$case_number = $_POST['case_number'];

$query = "DELETE FROM $table ";
$query .= "WHERE case_number = '$case_number'";

try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
