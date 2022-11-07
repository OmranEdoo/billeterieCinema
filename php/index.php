<?php
    try
    {
        // Connexion at MySQL
        $mysqlClient = new PDO('mysql:host=localhost;dbname=cinema;charset=utf8', 'root', 'root');

        $sqlQuery = 'SELECT COUNT(*) AS nbOfRoom FROM movieroom';
        $statement = $mysqlClient->prepare($sqlQuery);
        $statement->execute();
        $tab = $statement->fetchAll();

        foreach ($tab as $line) {
          ?>
          <p>test <?php echo $line[0]; ?></p>
          <?php
        }
    }
    catch(Exception $e)
    {
        // En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
    }  
?>