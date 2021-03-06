<?php
    session_start();

    if(!isset($_SESSION["user"])) {
        header("Location: ../../");
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <title>WebBase</title>
        <link rel="stylesheet" type="text/css" href="../../res/fonts/font.css"/>
        <link rel="stylesheet" type="text/css" href="../../lib/css/main.css"/>
        <link rel="stylesheet" type="text/css" href="../../lib/css/app.css"/>
        <script src="../../lib/js/main.js"></script>
    </head>
    <body>
        <div class="title-pane">
            <div class="header-container">
                <div class="main-header-container">
                    <h1 class="main-header"><a href>WebBase</a></h1>
                </div>
            </div>
            <div class="user-container">
                <div class="user-options-list">
                    <span class="link user-option" link="NONE"><?php echo $_SESSION["user"]["username"] ?></span>
                    <span class="v-divider"></span>
                    <span class="link user-option" link="../signout.php">Sign Out</span>
                </div>
            </div>
        </div>
        <div class="body-pane">
            <div class="content-pane">
                <div class="courses-pane">
                    <h2 class="courses-header">Programming Courses</h2>
                    <div class="courses-container">
                        <!-- THIS WILL BE AUTOMATED WITH PHP!!! -->
                        <!-- TEMPLATE:
                        <div class="course-container">
                            <div class="course-header">
                                <h3>-title-</h3>
                            </div>
                            <div class="course-body">
                                <p>
                                    -content-
                                    <br>
                                    <br>
                                    <span class="button">Continue</span>
                                    <span>&nbsp;&nbsp;&nbsp;</span>
                                    <span class="link" link="course-options">Options</span>
                                </p>
                            </div>
                        </div>
                        -->
                        <div class="course-container">
                            <div class="course-background-container">
                                <img src="../../res/images/html.png" class="course-background-image"/>
                            </div>
                            <div class="course-content">
                                <div class="course-header">
                                    <h3>HTML</h3>
                                </div>
                                <div class="course-body">
                                    <p>
                                        The amazing course that will teach you how to make your own webpages!
                                        <br>
                                        <br>
                                        <span class="button" onclick="goto('../courses/#/HTML')">Start</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="course-container">
                            <div class="course-background-container">
                                <img src="../../res/images/css.png" class="course-background-image"/>
                            </div>
                            <div class="course-content">
                                <div class="course-header">
                                    <h3>CSS</h3>
                                </div>
                                <div class="course-body">
                                    <p>
                                        The amazing course that will teach you the power of stylesheets!
                                        <br>
                                        <br>
                                        <span class="button" onclick="goto('../courses/#/CSS')">Start</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="course-container">
                            <div class="course-background-container">
                                <img src="../../res/images/javascript.png" class="course-background-image"/>
                            </div>
                            <div class="course-content">
                                <div class="course-header">
                                    <h3>JavaScript</h3>
                                </div>
                                <div class="course-body">
                                    <p>
                                        The amazing course that will teach you the magic of interactive pages!
                                        <br>
                                        <br>
                                        <span class="button" onclick="goto('../courses/#/JavaScript')">Start</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="courses-pane">
                    <h2 class="courses-header">My Courses</h2>
                    <div class="courses-container">
                        <i>You have not started any courses yet!</i>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>