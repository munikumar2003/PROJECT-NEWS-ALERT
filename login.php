<?php
session_start();
$servername = "localhost";
$email = "root";
$password = "";
$database = "usersdb";

$conn = new mysqli($servername, $email, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        //echo "Login succesfull.";
        $status = "success";
        if ($status === 'success') {
            $row = $result->fetch_assoc();
            $_SESSION["name"] = $row["name"];
            echo "<p style='color: green;'>Login successful!</p>";
            header("Location: main.html");
        }
        exit();
    } else {
        $status = "error";
        if ($status === 'error') {
            echo "<p style='color: red;'>Invalid Username/Password.</p>";
        }
        //header("Location: loginpage.html");
        exit();
    }
}

$conn->close();
?>
