<?php
    try
    {
        // Connexion at MySQL
        $mysqlClient = new PDO('mysql:host=localhost;dbname=cinema;charset=utf8', 'root', 'root');

        $sqlQuery = $_POST["query"];
        $statement = $mysqlClient->prepare($sqlQuery);
        $statement->execute();
        $tab = $statement->fetchAll();

        foreach ($tab as $line) {
            for ($x = 0; $x < count($line); $x++) {
            echo $line[$x];
            echo " ";
            }
          echo "\n";
        }
    }
    catch(Exception $e)
    {
        // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
    }  
?>