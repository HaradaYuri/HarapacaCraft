<?php
// メールの宛先アドレスを設定する
$to = "yuri.harada504@gmail.com";

// メールの件名を設定する
$subject = "お問い合わせフォームからのメッセージ(harapaca-craft.com)";

// POSTからデータを受け取る。
$name = $_POST['お名前'];
$email = $_POST['メールアドレス'];
$message = $_POST['メッセージ本文'];

// メールの本文を作成する
$body = "名前: " . $name . "\n";
$body .= "メールアドレス: " . $email . "\n";
$body .= "メッセージ: " . $message . "\n";

// メールを送信する
mail($to, $subject, $body);

echo "メッセージが送信されました。";
?>
