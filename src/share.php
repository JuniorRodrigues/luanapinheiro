<?php

$bot   = $_GET['bot'];

if (strtolower($bot) == 'whatsapp') {
    $title = 'Luana Pinheiro';
    $description = 'Aprenda a dançar com aulas de dança do ventre em Suzano ou online do nível básico ao avançado. Conheça também as aulas de Baby Ballet, e Street kids';
    $image = 'assets/images/share/whatsapp.jpg';
} else {
    $title = 'Luana Pinheiro';
    $description = 'Aprenda a dançar com aulas de dança do ventre em Suzano ou online do nível básico ao avançado. Conheça também as aulas de Baby Ballet, e Street kids';
    $image = 'assets/images/share/facebook.jpg';
}

$isHTTPS  = (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') || (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || $_SERVER['SERVER_PORT'] == 443;
$host     = $_SERVER['HTTP_HOST'];
$path     = preg_replace('/share\.php/', '', $_SERVER['PHP_SELF']);
$protocol = $isHTTPS ? 'https://' : 'http://';
$base_url = $protocol.$host.$path;

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>

    <meta property="og:title" content="<?php echo $title; ?>" />
    <meta property="og:description" content="<?php echo $description; ?>" />
    <meta property="og:image" content="<?php echo $base_url.$image; ?>?v2" />
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:type" content="website" />
</head>
<body>
</body>
</html>
