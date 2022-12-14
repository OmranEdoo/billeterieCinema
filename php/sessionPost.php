<?php
	//include 'js/movieManager.js';
	$id=$_POST['id'];
    $idMovie=$_POST['idMovie'];
	$idMovieRoom=$_POST['idMovieRoom'];
	$hour=$_POST['hour'];

	$sql = "CREATE TABLE IF NOT EXISTS session (
				id int NOT NULL,
				idMovie int NOT NULL,
				idMovieRoom int NOT NULL,
				hour int,
				UNIQUE (id)
			);
			INSERT IGNORE INTO session SET 
				id = '$id', 
				idMovie = '$idMovie', 
				idMovieRoom = '$idMovieRoom',
				hour = '$hour';";
	
    $mysqlClient = new PDO('mysql:host=localhost;dbname=cinema;charset=utf8', 'root', 'root');

    $statement = $mysqlClient->prepare($sql);

    $statement->execute();
/*
    if (mysqli_query($mysqlClient, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	
	mysqli_close($mysqlClient);*/
?>