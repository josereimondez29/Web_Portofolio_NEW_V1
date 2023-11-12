<?php
$data = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $family = filter_input(INPUT_POST, 'family', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $comments = htmlspecialchars($_POST['comments']);

    $recipient = "josereimondez29@gmail.com"; // Tu dirección de correo electrónico

    $subject = "Mensaje de contacto de $name $family";

    $message = "
        <html>
        <head>
            <title>Mensaje de contacto</title>
        </head>
        <body>
            <p><strong>Nombre:</strong> $name $family</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Teléfono:</strong> $phone</p>
            <p><strong>Comentarios:</strong> $comments</p>
        </body>
        </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n"
        . "Content-type: text/html; charset=utf-8" . "\r\n"
        . "From: $email" . "\r\n";

    if (mail($recipient, $subject, $message, $headers)) {
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
        'message' => 'Invalid request method.'
    );
}

echo json_encode($data);
?>
