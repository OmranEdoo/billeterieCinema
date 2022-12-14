<?php
	//include 'js/movieManager.js';
	$id=$_POST['id'];
    $seatsArrangement=$_POST['seatsArrangement'];
	$roomNumber=$_POST['roomNumber'];
	$numberOfSeats=$_POST['numberOfSeats'];

	$sql = "CREATE TABLE IF NOT EXISTS movieRoom (
				id int NOT NULL,
				seatsArrangement varchar(255) NOT NULL,
				roomNumber int NOT NULL,
				numberOfSeats int NOT NULL,
				UNIQUE (id)
			);
			INSERT IGNORE INTO movieRoom SET 
				id = '$id', 
				seatsArrangement = '$seatsArrangement', 
				roomNumber = '$roomNumber',
				numberOfSeats = '$numberOfSeats';";
	
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