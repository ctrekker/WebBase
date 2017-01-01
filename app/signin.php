<?php
    session_start();
    require_once('../lib/server/globals.php');

    $username=$_POST["siUsername"];
    $password=md5($_POST["siPassword"]);
    $ajax=false;
    if(isset($_POST["ajax"])) {
        $ajax=true;
    }

    $filename="./user/".$username.".json";
    if(!empty($username)&&!empty($password)) {
        if(file_exists($filename)) {
            $user=json_decode(file_get_contents($filename), true);
            if($password==$user["password"]) {
                $_SESSION["user"]=$user;
                if(!$ajax) header("Location: ./home/");
                else echo "COMPLETE";
            }
            else {
                errmsg(0);
            }
        }
        else {
            errmsg(0);
        }
    }
    else errmsg(1);
?>