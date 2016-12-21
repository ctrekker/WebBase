<?php
    header("Content-type", "text/plain");

    $course=get("id");
    $page=(int) get("page");
    if($page==0) $page=1;

    $TITLE_CONTENT="|---|";
    $PAGE_PAGE="|=====|";

    if(file_exists("../../res/courses/$course.course")) {
        $course_contents=file_get_contents("../../res/courses/$course.course");
        $course_pages=explode($PAGE_PAGE, $course_contents);
        if($page>count($course_pages)) $page=count($course_pages);
        $values=explode($TITLE_CONTENT, $course_pages[$page-1]);
        $content=$values[1];
        $title=$values[0];
        
        $out=array(
            "responseType" => "CONTENT",
            "content" => $content,
            "title" => $title,
            "navigation" => array(

            )
        );

        //Create navigation array
        $nav=array();
        foreach($course_pages as $page=>$value) {
            $page_title=explode($TITLE_CONTENT, $value)[0];
            $hash="#/".$course."/page/".($page+1);
            $nav[]=array("title" => $page_title, "hash" => $hash);
        }
        $out["navigation"]=$nav;

        echo json_encode($out);
    }
    else {
        echo json_encode(array(
            "responseType" => "ERROR",
            "message" => "The course you have attempted to access does not exist! You can try visiting our most popular course, the <a href='#/HTML'>HTML</a> course, or go back to <a href='../home/'>home</a>."
        ));
    }

    function get($key) {
        if(isset($_GET[$key])) {
            return $_GET[$key];
        }
        else return null;
    }
?>