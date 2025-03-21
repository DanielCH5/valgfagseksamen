<?php
$page = $_GET['page'] ?? 'login';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php if ($page === 'login'): ?>
        <title>Log In</title>
    <?php elseif ($page === 'settings'): ?>
        <title>Settings</title>
    <?php elseif ($page === 'game'): ?>
        <title>Game</title>
    <?php endif; ?>
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
                                <img src="settings.png" width="40px" alt="Settings">
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
                        Controls
                    </div>
                    <div class="setting3">
                        Game
                    </div>
                    <div class="setting4">
                        Video
                    </div>
                </div>

                <div class="settingsmenu">
                    <div class="settingsdivA">
                        <div class="settingsPunkt">
                            <div>
                                Username
                            </div>
                            <div class="indtastetUsername">
                                Please enter your username using the button below.
                            </div>
                        </div>
                        <div class="settingsPunkt">
                            <div>
                                Switch names
                            </div>
                            <div>
                                <div class="usernameChange" onclick="changeName()">
                                    Change username
                                </div>
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
                            <img src="player1.png" width="100%" alt="">
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
                    <div class="map">
                        <img src="scene.png" style="border-radius: 50%" alt="">
                    </div>
                </div>

                <div class="popUp">
                    <div class="popupWindow">
                        <p>For the best experience, enter fullscreen on your browser</p>
                        <p>Open/close Character Window: C <br>
                            Open/close Inventory Window: B <br>
                            Open/close Skill Tree (not active): T <br>
                            Click on items in your inventory to equip them to your character. <br>
                            Cast spells using your keyboard buttons: Q, W, E, R.</p>

                    </div>
                </div>

                <div class="characterMenu">
                    <div class="characterItems">
                        <div class="characterTab">
                            Character
                        </div>
                        <div id="playerHead">
                            <img src="ironhelmet.png" alt="">
                        </div>
                        <div id="playerChest">
                            <img src="ironchest.png" alt="">
                        </div>
                        <div id="playerLegs">
                            <img src="ironlegs.png" alt="">
                        </div>
                        <div id="playerBoots">
                            <img src="ironboots.png" alt="">
                        </div>
                        <div id="playerRing">
                            <img src="ringofmagic.png" alt="">
                        </div>
                        <div id="playerPrimary">
                            <img src="ironsword.png" alt="">
                        </div>
                        <div id="playerSecondary">
                            <img src="holystaff.png" alt="">
                        </div>
                    </div>
                    <div class="characterStats">

                        <div class="characterUsernameIcon">
                            <div id="characterUsername" class="indtastetUsername">

                            </div>
                            <div id="playerIcon">
                                <div class="playerIcon">
                                    <img src="player1.png" width="100%" height="100%" alt="">
                                </div>
                            </div>
                        </div>


                        <div class="stat">
                            <div class="statName">
                                Strength:
                            </div>
                            <div class="statNumber1">

                            </div>
                        </div>
                        <div class="stat">
                            <div class="statName">
                                Intellect:
                            </div>
                            <div class="statNumber2">

                            </div>
                        </div>
                        <div class="stat">
                            <div class="statName">
                                Vitality:
                            </div>
                            <div class="statNumber3">

                            </div>
                        </div>
                        <div class="stat">
                            <div class="statName">
                                Stamina:
                            </div>
                            <div class="statNumber4">

                            </div>
                        </div>
                        <div class="stat">
                            <div class="statName">
                                Agility:
                            </div>
                            <div class="statNumber5">

                            </div>
                        </div>
                        <div class="stat">
                            <div class="statName">
                                Spirit:
                            </div>
                            <div class="statNumber6">

                            </div>
                        </div>

                    </div>
                </div>

                <div class="inventory">
                    <div class="inventoryTitle">
                        Backpack
                    </div>
                    <div class="inventorySlots">
                        <div class="inventoryslotA">
                            <img src="bfsword.png" width="50px" alt="">
                        </div>
                        <div class="inventoryslotB">
                            <img src="sfg9000.png" width="50px" alt="">
                        </div>
                        <div class="inventoryslotC">
                            <img src="bfg9000.png" width="50px" alt="">
                        </div>
                        <div class="inventoryslotD">
                            <img src="leatherboots.png" width="30px" alt="">
                        </div>
                        <div class="inventoryslotE">
                            <img src="ringofshadows.png" width="30px" alt="">
                        </div>
                        <div class="inventoryslotF">
                            <img src="dragonarmor.png" width="30px" alt="">
                        </div>
                        <div class="inventoryslotG">
                            <img src="demonstaff.png" width="30px" alt="">
                        </div>
                        <div class="inventoryslotH">
                            <img src="conquerorhelmet.png" width="30px" alt="">
                        </div>
                        <div class="inventoryslotI">
                            <img src="leatherkilt.png" width="30px" alt="">
                        </div>
                    </div>
                </div>
                <div class="menuOptionsA">
                    <div class="menuItem" onclick="openCharacter()">
                        <div class="menuPic">
                            <img src="helmet.png" width="40px" alt="">
                        </div>
                    </div>
                    <div class="menuItem" onclick="openTree()">
                        <div class="menuPic">
                            <img src="tome.png" width="40px" alt="">
                        </div>
                    </div>
                </div>
                <div class="spellContainer">
                    <div>
                        <img src="spell1.png" alt="">
                    </div>
                    <div>
                        <img src="spell2.png" alt="">
                    </div>
                    <div>
                        <img src="spell3.png" alt="">
                    </div>
                    <div>
                        <img src="spell4.png" alt="">
                    </div>
                </div>
                <div class="menuOptionsB">

                    <a href="?page=settings">

                        <div class="menuItem">
                            <div class="menuPic">
                                <img src="settings.png" width="40px" alt="Settings">
                            </div>
                        </div>
                    </a>

                    <div class="menuItem" onclick="openBags()">


                        <div class="menuPic">
                            <img src="backpack.png" width="40px" alt="">
                        </div>

                    </div>
                </div>
                <div class="skillTree">
                    Skill Tree
                    Work in progress
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