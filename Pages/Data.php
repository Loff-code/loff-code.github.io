<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "POST request received";
} else {
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
