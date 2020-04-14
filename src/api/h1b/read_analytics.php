<?php
require 'connect.php';

if (isset($_GET['table'])) {
    $table = $_GET['table'];
} else {
    die("No table selected.");
}


$query = "SELECT * FROM $table LIMIT 1000";
try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
