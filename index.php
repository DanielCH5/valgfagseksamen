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
    <?php if ($page === 'login'): ?>


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
                    <a href="?page=settings">
                        <div class="menuItem">
                            <div class="menuItemKey">

                            </div>
                            <div class="menuPic">
                                <img src="gear.svg" width="40px" alt="Settings">
                            </div>
                        </div>
                    </a>
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
                                Username
                            </div>
                            <div class="indtastetUsername">
                                Username not entered. Please log out and enter your name.
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
                    <div class="settingsbutton">
                        <div onclick="logOut();">
                            Log out
                        </div>
                    </div>

                    <div class="settingsbutton">
                        <div onclick="GoBackWithRefresh();">
                            Back
                        </div>
                    </div>
                </div>
            </div>
        </div>




    <?php elseif ($page === 'game'): ?>
        <div class="container">

            <div class="gameContainer">
                <div class="playerUI">
                    <div class="playerIcon">
                        <div>

                        </div>
                    </div>
                    <div class="playerBars">
                        <div id="playerName" class="indtastetUsername">

                        </div>
                        <div class="playerHP">
                            10,000/10,000
                        </div>
                        <div class="playerMana">
                            5,000/5,000
                        </div>
                    </div>
                </div>
                <div class="miniMap">

                </div>

                <div class="popUp">

                </div>

                <div class="characterMenu">
                    <div class="characterItems">
                        <div id="playerHead">

                        </div>
                        <div id="playerChest">

                        </div>
                        <div id="playerLegs">

                        </div>
                        <div id="playerBoots">

                        </div>
                        <div id="playerRing">

                        </div>
                        <div id="playerPrimary">

                        </div>
                        <div id="playerSecondary">

                        </div>
                    </div>
                    <div class="characterStats">

                    </div>
                </div>

                <div class="inventory">
                    <div class="inventoryslotA">

                    </div>
                    <div class="inventoryslotB">

                    </div>
                    <div class="inventoryslotC">

                    </div>
                    <div class="inventoryslotD">

                    </div>
                    <div class="inventoryslotE">

                    </div>
                    <div class="inventoryslotF">

                    </div>
                    <div class="inventoryslotG">

                    </div>
                    <div class="inventoryslotH">

                    </div>
                    <div class="inventoryslotI">

                    </div>
                </div>
                <div class="menuOptionsA">
                    <div class="menuItem">
                        C
                    </div>
                    <div class="menuItem">
                        T
                    </div>
                </div>
                <div class="spellContainer">

                </div>
                <div class="menuOptionsB">
                    <div class="menuItem">
                        <a href="?page=settings">
                            <div class="menuItem">
                                <div class="menuItemKey">

                                </div>
                                <div class="menuPic">
                                    <img src="gear.svg" width="40px" alt="Settings">
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="menuItem" onclick="openBags()">
                        B
                    </div>
                </div>
                <div class="skillTree">

                </div>
            </div>

        </div>
    <?php endif; ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
    <?php if ($page === 'login') {
        echo '<script type="text/javascript">greetUser()</script>';
    } else {
        echo '<script type="text/javascript">setName()</script>';
    } ?>
</body>

</html>