<?php

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);

$to  = "hi@asapeducation.ru" ;

$subject = "Нужна помощь в ASAP";

$messages .= 'ФИО: <b>' . $name . '</b><br>';
$messages .= 'Почта: <b>' . $email . '</b><br>';
$messages .= 'Телефон: <b>' . $phone . '</b><br>';
$messages .= 'Сообщение: <b>' . $message . '</b><br>';

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "Нужна помощь в ASAP\r\n";

mail($to, $subject, $messages, $headers);

?>
