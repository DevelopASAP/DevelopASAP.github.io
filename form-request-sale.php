<?php

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$email = trim($_POST['email']);
$services = trim($_POST['services']);

$to  = "hi@asapeducation.ru" ;

$subject = "Хотят скидочку в ASAP";

$messages .= 'ФИО: <b>' . $name . '</b><br>';
$messages .= 'Почта: <b>' . $email . '</b><br>';
$messages .= 'Телефон: <b>' . $phone . '</b><br>';

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "Хотят скидочку в ASAP\r\n";

mail($to, $subject, $messages, $headers);

?>
