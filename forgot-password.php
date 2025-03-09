<?php
include 'db.php';

$email = $_POST['email'];
$newPassword = password_hash("newpassword123", PASSWORD_DEFAULT);

$sql = "UPDATE users SET password='$newPassword' WHERE email='$email'";

if ($conn->query($sql) === TRUE) {
    echo "Password reset successfully. New password is: newpassword123";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
