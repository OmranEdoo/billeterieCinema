<?php
    $sessionsId=$_POST['sessionsId'];
	$email=$_POST['email'];
	$seatsId=$_POST['seatsId'];

	$sql = "CREATE TABLE IF NOT EXISTS session (
				sessionsId int,
				email varchar(255),
				seatsId int
			);
			INSERT INTO session SET 
				sessionsId = '$sessionsId', 
				email = '$email',
				seatsId = '$seatsId';";
	
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