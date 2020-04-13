<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

function connect() {
    $db_host = 'localhost';
    $db_port = '3308';
    $db_user = 'root';
    $db_pass = 'rootpass';
    $db_name = 'h1b_mega';

    $connection = new PDO('mysql:host='.$db_host.';port='.$db_port.';dbname='.$db_name, $db_user, $db_pass);

    if (!$connection) {
        die("Connection unsuccessful:");
    }

    return $connection;
}

$connection = connect();
