<?php
$data = [];
if ($_POST) {
    $name = "";
    $family = "";
    $email = "";
    $phone = "";
    $comments = "";
    $recipient="sample@sample.com"; // Your email comes here

    if (isset($_POST['name'])) {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }

    if (isset($_POST['family'])) {
        $family = filter_var($_POST['family'], FILTER_SANITIZE_STRING);
    }

    if (isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    if (isset($_POST['phone'])) {
        $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    }

    if (isset($_POST['comments'])) {
        $comments = htmlspecialchars($_POST['comments']);
    }


    $headers = 'MIME-Version: 1.0' . "\r\n"
        . 'Content-type: text/html; charset=utf-8' . "\r\n"
        . 'From: ' . $email . "\r\n";
    if (mail($recipient, $phone, $comments, $headers)) {
        $data = array(
            'status' => 'Congratulation',
            'message' => 'Your message sent successfully.'
        );
    } else {
        $data = array(
            'status' => 'Error',
            'message' => 'Your message did not send.'
        );
    }
} else {
	$data = array(
		'status' => 'Warning',
		'message' => 'Something went wrong, Please try again.'
	);
}
echo json_encode($data);
