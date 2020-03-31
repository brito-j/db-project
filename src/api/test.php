<?php
require 'database.php';

$query = "SELECT \"Connection successful!\"";

try {
  $statement = $connection->prepare($query);
  $statement->execute();
  $res = $statement->fetchAll();
  echo json_encode($res);
} catch (PDOException $exception) {
  $res = "Query: " . $query . " unsuccessful.";
  echo json_encode($res);
}
