<?php
if (isset($_GET['name'])) {
    $name = $_GET['name'];
    echo "Hello, " . htmlspecialchars($name) . "!";
}
?>
