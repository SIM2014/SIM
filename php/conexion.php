<?php
$mysql_host = "localhost";
$mysql_user = "valdivieso";
$mysql_password = "nyet6MXCL2Fs7bUq";
$mysql_database = "valdiviesoconsultores";

// Conectando, seleccionando la base de datos
$link = mysqli_connect($mysql_host, $mysql_user, $mysql_password)
        or die('No se pudo conectar: ' . mysqli_error());
echo 'Connected successfully';
mysqli_select_db($link, $mysql_database) 
        or die('No se pudo seleccionar la base de datos');
echo 'Connected to database successfully';
mysqli_close($link);
