<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name = htmlspecialchars(trim($_POST["name"]));
  $email = htmlspecialchars(trim($_POST["email"]));
  $subject = htmlspecialchars(trim($_POST["subject"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  $to = "basheersamman2003@gmail.com";


  $email_subject = "New Contact Form Submission: " . $subject;
  $email_body = "You have received a new message from your contact form.\n\n" .
    "Name: $name\n" .
    "Email: $email\n\n" .
    "Message:\n$message";


  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";


  if (mail($to, $email_subject, $email_body, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
} else {
  echo "Invalid request method.";
}
