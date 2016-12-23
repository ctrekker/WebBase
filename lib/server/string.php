<?php
    header("Content-Type: text/plain");
    if(isset($_POST["res"])&&isset($_POST["id"])) {
        $name=$_POST["res"];
        $id=(int) $_POST["id"];

        $root=$_SERVER["DOCUMENT_ROOT"];
        $res_path=$root."/res/strings/".$name.".res";
        if(file_exists($res_path)) {
            $resContent=file_get_contents($res_path);
            $resArray=explode("***************", $resContent);
            
            if($id>=count($resArray)) {
                echo json_encode(array(
                    "response" => "ERROR",
                    "message" => "ID requested is out of range"
                ));
            }
            else echo $resArray[$id];
        }
        else echo json_encode(array(
            "response" => "ERROR",
            "message" => "Invalid request"
        ));
    }
    else echo json_encode(array(
        "response" => "ERROR",
        "message" => "Missing input parameters"
    ));
?>