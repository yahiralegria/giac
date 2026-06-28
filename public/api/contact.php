<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['message' => 'Método no permitido.']);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['message' => 'Solicitud inválida.']);
    exit;
}

$name = trim((string) ($payload['name'] ?? ''));
$company = trim((string) ($payload['company'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$description = trim((string) ($payload['description'] ?? ''));

if ($name === '' || $email === '' || $description === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Nombre, correo electrónico y descripción son obligatorios.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'El correo electrónico no tiene un formato válido.']);
    exit;
}

$to = getenv('CONTACT_TO_EMAIL') ?: 'contacto@giac.mx';
$from = getenv('MAIL_FROM') ?: 'no-reply@giac.mx';
$safeName = str_replace(["\r", "\n"], ' ', $name);
$safeEmail = str_replace(["\r", "\n"], ' ', $email);

$subject = 'Nuevo mensaje de contacto - ' . $safeName;
$message = implode("\n", [
    'NUEVA SOLICITUD DE COTIZACIÓN',
    '',
    'Nombre: ' . $name,
    'Empresa: ' . ($company !== '' ? $company : 'No especificada'),
    'Correo electrónico: ' . $email,
    '',
    'Descripción del proyecto:',
    $description,
]);

$headers = [
    'From: GIAC Oil & Gas <' . $from . '>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $subject, $message, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['message' => 'No pudimos enviar el correo. Intenta de nuevo más tarde.']);
    exit;
}

echo json_encode(['message' => 'Solicitud enviada correctamente.']);
