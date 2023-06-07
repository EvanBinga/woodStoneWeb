<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// Получение данных из формы
$nameFormOne = $_POST['placeholderForm']

// Валидация данных и отображение предупреждения
// if (empty($name) || empty($number) || empty($email)) {
//   echo '<script>alert("Error: Заполните обязательные поля.");</script>';
//   echo '<script>window.history.back();</script>';
//   exit;
// }

// Проверка правильности адреса электронной почты
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo '<script>alert("Error: Некорректный адрес электронной почты.");</script>';
  echo '<script>window.history.back();</script>';
  exit;
}

// Отправка письма
$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'khaysarov.ivan@mail.ru';
$mail->Password = 'hzpwihwCJuJAvLmbKXxi';
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';

$mail->setFrom('khaysarov.ivan@mail.ru');
$mail->addAddress('1evan@mail.ru');
$mail->isHTML(true);
$mail->Subject = 'Заявка с тестового сайта';
$mail->Body = "{$nameFormOne} оставил заявку, его телефон: {$number}<br>
               Почта этого пользователя: {$email}<br>
               Вид работы: {$job}<br>
               Город: {$user_city}<br>
               Адрес: {$adres}<br>
               Гражданство: {$userwor}<br>
               График работы: {$graphic}<br>
               Резюме пользователя: {$usercvv}<br>
               О себе: {$about}<br>
               Дополнительный текст пользователя: {$usercv}<br>
               Согласие на обработку данных: {$useragr}";
$mail->AltBody = '';

if (!$mail->send()) {
  echo '<script>alert("Error: ' . $mail->ErrorInfo . '");</script>';
  echo '<script>window.history.back();</script>';
} else {
  echo '<script>alert("Успешно отправлено.");</script>';
}
?>