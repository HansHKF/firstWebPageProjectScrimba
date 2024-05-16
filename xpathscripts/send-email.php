<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


if (isset($_POST['name']) && isset($_POST['email'])) {
    $name = $_POST['name'];
    // Sanitize and validate the email address
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    require_once __DIR__ . "/phpMailer/PHPMailer.php";
    require_once __DIR__ . "/phpMailer/SMTP.php";
    require_once __DIR__ . "/phpMailer/Exception.php";
    require_once __DIR__ . "/conf.php";

    $mail = new PHPMailer(true);

    //smtp settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = EMAIL_USERNAME;
    $mail->Password = EMAIL_PASSWORD;
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';

    try {
        //email settings
        $mail->isHTML(true);

        // Sender information
        $mail->setFrom($email, $name);
        // Add recipient, subject, and body of the email
        $mail->addAddress("redirectedmailservicertr@gmail.com");
        $mail->Subject = ("$email ($subject)");
        $mail->Body = $body;
        // Send mail
        if ($mail->send()) {
            $status = "success";
            $response = "success";
        } else {
            $status = "error";
            $response = "failed";
        }

    } catch (Exception $e) {

        $status = "failed";
        $response = "Error: " . $mail->ErrorInfo; // Get the error information from PHPMailer

        // Check if the error info contains a specific error message
        if (strpos($response, 'Invalid address') !== false) {
            // Option 1: Send message invalid email
            $response = "Invalid";
        } else {
            // Option 2: Send message send errorResponse

        }

     
    }
}



// Return the response as JSON
header('Content-Type: application/json; charset=utf-8');
exit(json_encode(array("status" => $status, "response" => $response), JSON_UNESCAPED_UNICODE));




