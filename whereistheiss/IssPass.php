<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if (isset($_GET['lat']) && isset($_GET['lon'])) {
    $ch = curl_init();
    if (isset($_GET['alt']) && $_GET['alt'] > 0) {
        curl_setopt($ch, CURLOPT_URL, "http://api.open-notify.org/iss-pass.json?lat=" . $_GET['lat'] . "&lon=" . $_GET['lon'] . "&alt=" . $_GET['alt']);
    } else {
        curl_setopt($ch, CURLOPT_URL, "http://api.open-notify.org/iss-pass.json?lat=" . $_GET['lat'] . "&lon=" . $_GET['lon']);
    }
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
    $headers = [];
    $headers[] = "Accept: application/json";
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $result = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

    echo $result;
} else {
    return "Sorry your device does not support this.";
}

