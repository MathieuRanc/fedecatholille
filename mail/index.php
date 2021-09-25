<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once('vendor/autoload.php');

// importation de la fonction generateRandomString($length = 10)
require('./functions.php');

use PHPMailer\PHPMailer\PHPMailer;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$recaptcha = new \ReCaptcha\ReCaptcha($_ENV['SECRET_KEY']);

$resp = $recaptcha->setExpectedHostname('fedecatholille.fr')
    ->verify($_POST["token"]);

if ($resp->isSuccess()) {
    if (isset($_POST["message"]) && !empty($_POST["message"])) {
        $content = htmlspecialchars($_POST["message"]);
        if (isset($_POST["logo"]) && !empty($_POST["logo"])) {
            $type = getBlobExtension($_POST["logo"]);
            $path = 'assets/logo-' . generateRandomString(20) . '.' . $type;

            $imgData = explode(',', $_POST["logo"])[1];

            $fp = fopen($path, 'w');
            fwrite($fp, base64_decode($imgData));
            fclose($fp);
        }
    } else {
        $status = 403;
        $message = "Il y a eu une erreur";
    }
} else {
    $status = 403;
    $message = "Il y a eu une erreur";
}

if (isset($content)) {
    $content = str_replace(['&lt;br/&gt;', '
'], '<br/>', $content);
    $content = str_replace('&lt;/strong&gt;', '</strong>', $content);
    $content = str_replace('&lt;strong&gt;', '<strong>', $content);

    $email = new PHPMailer();
    $email->CharSet = "UTF-8";
    $email->SetFrom($_ENV['SENDER'], 'Fede catho Lille'); // Name is optional
    $email->Body = $content;
    $email->AddAddress($_ENV['DESTINATORY']);
    if (isset($path)) {
        $email->Subject = 'Rejoindre la fede';
        $email->AddAttachment($path, 'logo.' . $type);
    } else {
        $email->Subject = 'Prise de contact';
    }
    $email->IsHTML(true);
    $email->Send();

    $message = "L'email a bien été envoyé";
    $status = 201;
} else {
    if (!isset($message)) {
        $message = "Il y a eu une erreur";
    }
    $status = 403;
}
http_response_code($status);
echo json_encode(["message" => $message, "status" => $status]);
