<?php

$name = trim($_POST['name']);
$nick = trim($_POST['nick']);
$phone = trim($_POST['phone']);
$email = trim($_POST['email']);
$services = trim($_POST['services']);

$to  = "hi@asapeducation.ru" ;

$subject = "Оставили заявку на обучение в ASAP";

$messages .= 'ФИО: <b>' . $name . '</b><br>';
$messages .= 'Ник в telegram: <b>' . $nick . '</b><br>';
$messages .= 'Почта: <b>' . $email . '</b><br>';
$messages .= 'Телефон: <b>' . $phone . '</b><br>';
$messages .= 'Направление: <b>' . $services . '</b><br>';

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "Оставили заявку на обучение в ASAP\r\n";

mail($to, $subject, $messages, $headers);

?>
