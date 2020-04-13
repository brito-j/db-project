<?php
require 'connect.php';

if (isset($_GET['table'])) {
  $table = $_GET['table'];
} else {
  $table = 'h1b_info';
}

if (isset($_GET['page'])) {
  $page = $_GET['page'];
} else {
  $page = 1;
}

if (isset($_GET['size'])) {
  $rows_per_page = $_GET['size'];
} else {
  $rows_per_page = 10;
}

$offset = ($page - 1) * $rows_per_page;

$page_total_query = "SELECT COUNT(*) FROM $table";
try {
  $statement = $connection->prepare($page_total_query);
  $statement->execute();
  $result = $statement->fetchAll();
  $total_rows = $result[0][0];
  $total_pages = ceil($total_rows / $rows_per_page);
} catch (PDOException $exception) { echo json_encode($exception); }

$query = "SELECT * FROM $table LIMIT $offset, $rows_per_page";
try {
  $statement = $connection->prepare($query);
  $statement->execute();
  $response = $statement->fetchAll();
  echo json_encode($response);
} catch (PDOException $exception) { echo json_encode($exception); }
