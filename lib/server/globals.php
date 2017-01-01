<?php
    if(!isset($_SESSION)) {
        session_start();
    }
    $errors=array (
        array ("1000", "Incorrect username or password"),
        array ("1001", "One or more required fields are empty"),
        array ("1002", "Invalid email address entered"),
        array ("1003", "Password and confirm password do not match"),
        array ("1004", "Account with inputted username already exists")
    );

    function errmsg($num) {
        echo $GLOBALS["errors"][$num][1];
    }

    function guidv4() {
        if (function_exists('com_create_guid') === true)
            return trim(com_create_guid(), '{}');

        $data = openssl_random_pseudo_bytes(16);
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // set version to 0100
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // set bits 6-7 to 10
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }
    function write_userdata($data) {
        $_SESSION["user"]=$data;
        file_put_contents($_SERVER["DOCUMENT_ROOT"]."/app/user/".$data["username"].".json", json_encode($data));
    }
?>