<?php
// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the CSV file content from the POST request
    $csvContent = file_get_contents('php://input');

    // Process the CSV content as needed
    // For example, you can save it to a file or a database
    $log = "Received CSV file:\n" . $csvContent . "\n";

    // Debugging: Print the log to the browser
    echo $log;

    // Save the CSV content to a file
    if (file_put_contents('received_data.csv', $csvContent) !== false) {
        echo "CSV file saved successfully";
    } else {
        echo "Error saving CSV file";
    }
} else {
    // Handle other HTTP methods (GET, etc.) if needed
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
