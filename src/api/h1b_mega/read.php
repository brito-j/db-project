<?php
require 'connect.php';

$query = "SELECT * FROM h1b_info LIMIT 1000";
try {
    $statement = $connection->prepare($query);
    $statement->execute();
    $res = $statement->fetchAll();
    echo json_encode($res);
} catch (PDOException $exception) { echo json_encode($exception); }
