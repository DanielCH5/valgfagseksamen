<?php
$page = $_GET['page'] ?? 'login';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <?php if ($page === 'login'):?>
        

        <div class="container">
            <div class="logincontainer">


                <div class="title">
                    <h1>GAME UI</h1>
                </div>
                <div class="login-form">
                    <div class="welcome">
                        <div class="welcome-title">
                            <h2>Welcome <span class="indtastetUsername"></span><span class="inputCursor"></span></h2>
                        </div>
                    </div>
                    <div class="username">
                        <input type="text" placeholder="Username" class="submit-name-input">
                    </div>
                    <div class="login">
                        <button class="login-btn" onclick="setUsername()">
                            Login
                        </button>
                    </div>
                </div>

                <div class="settings">
                    <div class="menuItem" onclick="clearUsername()">
                        <div class="menuItemKey">
                            Esc
                        </div>
                        <div class="menuPic">
                            <img src="gear.svg" width="40px" alt="Settings">
                        </div>
                    </div>
                </div>
            </div>
           
        </div>


    <?php elseif ($page === 'settings'): ?>
        <div class="container">
            <div class="settingscontainer">

                <div class="settingsnav">
                    <div class="setting1">
                        Settings
                    </div>
                    <div class="setting2">
                        Settings
                    </div>
                    <div class="setting3">
                        Settings
                    </div>
                    <div class="setting4">
                        Settings
                    </div>
                </div>

                <div class="settingsmenu">
                    <div class="settingsdivA">
                        <div class="settingsPunkt">
                            <div>
                                Resolution
                            </div>
                            <div class="indtastetUsername">
                                Resolution
                            </div>
                        </div>
                        <div class="settingsPunkt">
                            <div>
                                Resolution
                            </div>
                            <div>
                                Resolution
                            </div>
                        </div>
                        <div class="settingsPunkt">
                            <div>
                                Resolution
                            </div>
                            <div>
                                Resolution
                            </div>
                        </div>
                        <div class="settingsPunkt">
                            <div>
                                Resolution
                            </div>
                            <div>
                                Resolution
                            </div>
                        </div>
                        
                    </div>
                    <div class="settingsdivB">
                        <div class="settingsPunkt">
                            <div>
                                Resolution
                            </div>
                            <div>
                                Resolution
                            </div>
                        </div>
                        <div class="settingsPunkt">
                            <div>
                                Resolution
                            </div>
                            <div>
                                Resolution
                            </div>
                        </div>
                        <div class="settingsPunkt">
                            <div>
                                Resolution
                            </div>
                            <div>
                                Resolution
                            </div>
                        </div>
                        <div class="settingsPunkt">
                            <div>
                                Resolution
                            </div>
                            <div>
                                Resolution
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="settingsbuttons">

                </div>
            </div>
        </div>



    <?php endif; ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
    <?php if ($page === 'login'){echo '<script type="text/javascript">greetUser()</script>';}else{echo '<script type="text/javascript">setName()</script>';}  ?>
</body>

</html>