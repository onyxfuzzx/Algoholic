<?php
include 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];  // ⚠️ Plaintext password (insecure)

// Insert data directly without hashing (Not recommended for production)
$sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Registration successful";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
