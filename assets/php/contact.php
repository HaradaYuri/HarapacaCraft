<?php
session_start();

$to = "harapaca.craft@gmail.com";
$subject = "お問い合わせフォームからのメッセージ";
$errmessage = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['お名前'], ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($_POST['メールアドレス'], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['メッセージ本文'], ENT_QUOTES, 'UTF-8');

    if (empty($name)) {
        $errmessage[] = "名前を入力してください";
    }

    if (empty($email)) {
        $errmessage[] = "メールアドレスを入力してください";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errmessage[] = "無効なメールアドレスです";
    }

    if (empty($message)) {
        $errmessage[] = "メッセージを入力してください";
    }

    if (count($errmessage) === 0) {
        $body = "名前: " . $name . "\n";
        $body .= "メールアドレス: " . $email . "\n";
        $body .= "メッセージ: " . $message . "\n";

        mail($to, $subject, $body);
        echo '<div class="success-message" style="width: 100%; height: 100%; background-color: #0092dd; display: flex; border-radius: 50px;">';
        echo '<div class="success-message" style="width: 100%; height: 200px; display: flex; flex-direction: column; margin: auto;">';
        echo '<div style="color: #ffffff; font-size: 16px; margin: auto; font-family: "M PLUS Rounded 1c", sans-serif;">メッセージが送信されました。</div>';
        echo '<a href="../../index.html" style="width: 80px; height: 55px; background-color: #ffffff; color: #0092dd; border-radius: 50px; margin: auto; display: flex;"><p style="margin: auto;">戻る</p></a>';
        echo '</div>';
        echo '</div>';


         // セッション変数をクリアする
        $_SESSION['お名前'] = '';
        $_SESSION['メールアドレス'] = '';
        $_SESSION['メッセージ本文'] = '';
        $_SESSION = array();
    } else {
        // メール送信に失敗した場合の処理
        echo "メールの送信に失敗しました。";
        $_SESSION['お名前'] = $name;
        $_SESSION['メールアドレス'] = $email;
        $_SESSION['メッセージ本文'] = $message;
    }
}
?>
