<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $company = $_POST['company'];
    $mailFrom = $_POST['mail'];
    $subject = $_POST['subject'];
    $massage = $_POST['massage'];

    $mailTo = "hristo.dimitrov@nothx.tv";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from".$name.".\n\n".$massage;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}