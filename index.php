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

        <header class="d-flex justify-content-center col-12">
            <h1 class="col-4">GAME UI</h1>
        </header>

        <main class="d-flex justify-content-center align-items-center flex-column login-form">

            <section class="col-6 welcome">
                <h2>Welcome</h2>
            </section>

            <section class="username col-4 d-flex justify-content-center">
                <input type="text" placeholder="Username" class="col-12 py-2">
            </section>

            <section class="password col-4 d-flex justify-content-center">
                <input type="text" placeholder="Password" class="col-12 py-2">
            </section>

            <button class="col-2 login-btn">
                Login
            </button>

            <section class="col-12 d-flex justify-content-end">
                <button class="col-1 py-2">
                    <img src="gear.svg" width="30px" alt="Settings">
                </button>
            </section>
        </main>


    <?php endif; ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>