<?php

$email = trim($_POST['email']);

$to  = "hi@asapeducation.ru" ;

$subject = "Подписались на рассылку ASAP";

$messages .= 'Контакт: <b>' . $email . '</b><br>';

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "Подписались на рассылку ASAP\r\n";

mail($to, $subject, $messages, $headers);

?>
