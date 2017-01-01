<?php
    session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>WebBase</title>
        <link rel="stylesheet" type="text/css" href="../../res/fonts/font.css"/>
        <link rel="stylesheet" type="text/css" href="../../lib/css/main.css"/>
        <link rel="stylesheet" type="text/css" href="../../lib/css/course.css"/>
        <script src="../../lib/js/main.js"></script>
        <script src="../../lib/js/course.js"></script>
    </head>
    <body>
        <div class="title-pane">
            <div class="header-container">
                <div class="main-header-container">
                    <h1 class="main-header"><a href="../home">WebBase</a></h1>
                </div>
            </div>
            <div class="user-container">
                <div class="user-options-list">
                    <span class="link user-option" link="NONE"><?php echo $_SESSION["user"]["username"]; ?></span>
                    <span class="v-divider"></span>
                    <span class="link user-option" link="../signout.php">Sign Out</span>
                </div>
            </div>
        </div>
        <div class="body-pane">
            <div class="course-vnav">
                <div class="course-list">
                    
                </div>
            </div>
            <div class="course">
                <div class="course-header-container">
                    <h2 class="course-header"></h2>
                </div>
                <div class="course-content-wrapper">
                    <div class="course-content-container">
                        
                    </div>
                    <div class="course-options">
                        <span class="button course-page-back">&#129104; Previous</span>
                        <span class="button course-page-next">Next &#129106;</span>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>