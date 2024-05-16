<?php

$authorized = false; // Assume unauthorized by default

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'send_email') {
    // Implement your authorization logic here to set $authorized to true if authorized
    $authorized = true; // Placeholder for authorization logic

    if ($authorized) {
        require_once 'send-email.php';
    }
}

if (!$authorized) {
    $status = "failed";
    $response = "Unauthorized access";
}

// Return the response as JSON
header('Content-Type: application/json; charset=utf-8');
exit(json_encode(array("status" => $status ?? "failed", "response" => $response ?? "Invalid request"), JSON_UNESCAPED_UNICODE));
