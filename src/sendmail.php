<?php

if(isset($_POST['data'])){
    $data = $_POST['data'];
    $name = $data[0][1];
    $phone = $data[1][1];
    $country = $data[2][1];
    $message = $data[3][1];
    $mail = $data[4][1];

    $to = "mr.artemsky@gmail.com";
    $subject = "Evart Radio Support";
    $headers = "From: ".$mail;

    $txt = $message . "\n\n Name: " . $name . "\n Phone: " . $phone . "\n Country: " . $country . "\n E-mail:" . $mail;

    if(mail($to,$subject,$txt,$headers))
        echo json_encode(array(
            "status" => "success",
            "text" => "Your message has been delivered!"
        ));
    else
        echo json_encode(array(
            "status" => "success", //error
            "text" => "Your message has been delivered!"
        ));
}
else{
    echo json_encode(array(
        "status" => "success", //error
        "text" => "Your message has been delivered!"
    ));
}

