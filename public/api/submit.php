<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

// Get the JSON content
$content = file_get_contents("php://input");
$data = json_decode($content, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid input data"]);
    exit;
}

// Extract and sanitize fields
$name = isset($data["name"]) ? strip_tags(trim($data["name"])) : "";
$email = isset($data["email"]) ? filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL) : "";
$phone = isset($data["phone"]) ? strip_tags(trim($data["phone"])) : "";
$service = isset($data["service"]) ? strip_tags(trim($data["service"])) : "";
$address = isset($data["address"]) ? strip_tags(trim($data["address"])) : "";
$message = isset($data["message"]) ? strip_tags(trim($data["message"])) : "";

// Validate required fields
if (empty($name) || empty($email) || empty($phone) || empty($service) || empty($address)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "All required fields must be completed."]);
    exit;
}

// 1. Save lead details locally on the server in a CSV file
$logFile = __DIR__ . "/leads.csv";
$fileHeaders = ["Date/Time", "Name", "Email", "Phone", "Service Required", "Project Address", "Details/Message"];
$isNewFile = !file_exists($logFile);

$file = fopen($logFile, "a");
if ($file) {
    if ($isNewFile) {
        fputcsv($file, $fileHeaders);
    }
    fputcsv($file, [
        date("Y-m-d H:i:s"),
        $name,
        $email,
        $phone,
        $service,
        $address,
        $message
    ]);
    fclose($file);
}

// 2. Email notification configuration
// You can replace this email address with any inbox (like a personal Gmail or active business email)
$to = "quote@urbancolourspainting.com"; 
$subject = "New Website Quote Request: " . $service;

$emailBody = "You have received a new project estimate request from your website contact form:\n\n";
$emailBody .= "Customer Name:   " . $name . "\n";
$emailBody .= "Email Address:   " . $email . "\n";
$emailBody .= "Phone Number:    " . $phone . "\n";
$emailBody .= "Service Requested: " . $service . "\n";
$emailBody .= "Project Address: " . $address . "\n\n";
$emailBody .= "Details / Description:\n" . $message . "\n\n";
$emailBody .= "--- \nThis lead has also been saved to your server leads dashboard file: /api/leads.csv\n";

$headers = "From: noreply@urbancolourspainting.ca\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send the email (fails gracefully if email features are not set up on your host yet, but data is still saved to the CSV file)
@mail($to, $subject, $emailBody, $headers);

echo json_encode(["success" => true, "message" => "Request submitted successfully"]);
exit;
