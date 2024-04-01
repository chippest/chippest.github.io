<?php
include("connection.php");
$fn = $_POST['firstName'];
$ln = $_POST['lastName'];
$us = $_POST['username'];
$pass = $_POST['password'];
$email = $_POST['email'];

$stmt = $conn->prepare("insert into logreg(firstname, lastname, username, password, email) values (?,?,?,?,?);");
    $stmt->bind_param("sssss", $fn, $ln, $us, $pass, $email);
    $stmt->execute();
    echo "Account created successfully";
?>