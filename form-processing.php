<?php

# Пасхалка для тех, кто захочет посмотреть результат работы скрипта в dev-tools браузера
# Можно убрать
echo "Oopsie! Sharing my secret TOKEN with you: watch?v=GhJ043zp8hI";

$bot_credentials_file = file_get_contents("./bot_credentials.json");
$bot_credentials = json_decode($bot_credentials_file, true);
$bot_token = $bot_credentials["token"];
$chat_id = $bot_credentials["chat_id"];

$url = sprintf('https://api.telegram.org/bot%s/sendMessage', $bot_token);

$form_type = trim($_POST['form']);
$form_page = trim($_POST['page']);
$form_name = trim($_POST['name']);
$form_phone = trim($_POST['phone']);

if ($form_type == "edu_request") {

    $form_nickname = trim($_POST['nick']);
    $form_edu_prog = trim($_POST['services']);
    
    $message_text_template = "Заявка с сайта.\n" .
                             "Страница заявки:\n%s\n\n" .
                             "Отправитель: <i>%s</i>;\n" .
                             "Номер: <code>%s</code>;\n" .
                             "Телеграм/WhatsApp: @%s;\n" .
                             "Направление: <i>%s</i>.";
    
    $compiled_message_text = sprintf($message_text_template, $form_page, $form_name, $form_phone, $form_nickname, $form_edu_prog);

} elseif ($form_type == "consultation") {

    $form_email= trim($_POST['email']);
    
    $message_text_template = "Заявка на консультацию.\n" .
                             "Страница заявки:\n%s\n\n" .
                             "Отправитель: <i>%s</i>;\n" .
                             "Номер: <code>%s</code>;\n" .
                             "Почта: <code>%s</code>.\n";
    
    $compiled_message_text = sprintf($message_text_template, $form_page, $form_name, $form_phone, $form_email);

} else {
    exit(0);
}

$message_data = [
    'chat_id' => $chat_id,
    'parse_mode' => 'html',
    'text' => $compiled_message_text
]; 

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($message_data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_exec($ch);
curl_close($ch); 

?>