<?php
    session_start();
    require_once('../../lib/server/globals.php');
    if(isset($_SESSION["user"])) {
        $user=$_SESSION["user"];
        if(isset($_POST["action"])) {
            if($_POST["action"]=="SET"&&isset($_POST["category"])&&isset($_POST["name"])&&isset($_POST["data"])) {
                $category=$_POST["category"];
                $name=$_POST["name"];
                $track_data=$_POST["data"];
                $track_data=json_decode($track_data, true);
                if(gettype($track_data)!="NULL") {
                    $user["data"]["tracking"][$category][$name]=$track_data;
                    write_userdata($user);
                    echo "COMPLETE";
                }
            }
            else if($_POST["action"]=="GET"&&isset($_POST["category"])&&isset($_POST["name"])) {
                $category=$_POST["category"];
                $name=$_POST["name"];
                if(isset($user["data"]["tracking"][$category][$name])) {
                    echo json_encode($user["data"]["tracking"][$category][$name]);
                }
                else echo "null";
            }
        }
        else if(isset($_POST["reset"])) {
            $user["data"]["tracking"]=array ();
            write_userdata($user);
            echo "COMPLETE";
        }
    }
?>