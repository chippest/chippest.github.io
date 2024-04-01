<?php
$servername  = "localhost";
$username = "u466925758_chipp";
$password = "Ibtisamisbest1";
$dbname = "u466925758_lulu";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("Connection failed ".$conn->connect_error);

}
?>