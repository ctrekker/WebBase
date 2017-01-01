<?php
    session_start();
    require_once('../lib/server/globals.php');

    $first=$_POST["suFirst"];
    $last=$_POST["suLast"];
    $email=$_POST["suEmail"];
    $username=$_POST["suUsername"];
    $password=$_POST["suPassword"];
    $confirm=$_POST["suPasswordC"];
    $ajax=false;
    if(isset($_POST["ajax"])) {
        $ajax=true;
    }

    //Make sure no fields are empty
    if(!empty($first)&&!empty($last)&&!empty($email)&&!empty($username)&&!empty($password)&&!empty($confirm)) {
        //Make sure email is valid
        if(!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            //Make sure password matches confirm
            if($password==$confirm) {
                //Make sure user doesn't already exist
                $filepath="./user/".$username.".json";
                if(!file_exists($filepath)) {
                    //Build json data for user 
                    $user=array (
                        "name" => array (
                            "first" => $first,
                            "last" => $last
                        ),
                        "email" => $email,
                        "username" => $username,
                        "password" => md5($password),
                        "UUID" => guidv4(),
                        "data" => array (
                            "tracking" => array (

                            )
                        )
                    );

                    file_put_contents($filepath, json_encode($user));

                    $_SESSION["user"]=$user;
                    if(!$ajax) header("Location: ./home");
                    else echo "COMPLETE";
                }
                else errmsg(4);
            }
            else errmsg(3);
        }
        else errmsg(2);
    }
    else errmsg(1);
?>