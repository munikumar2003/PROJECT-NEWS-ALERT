<?php
$servername = "localhost";
$email = "root";
$password = "";
$database = "usersdb";

$conn = new mysqli($servername, $email, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"]; // Note: In a real-world scenario, you should hash the password.

    $checkUsernameQuery = "SELECT * FROM users WHERE email='$email'";
    $checkUsernameResult = $conn->query($checkUsernameQuery);
    if($checkUsernameResult->num_rows > 0) {
        echo "Username already registered.";
    } 
    else {
        $sql = "INSERT INTO users (name,email, password) VALUES ('$name','$email', '$password')";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successful!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
