<?php
$id=$_POST['id'];
	$sessionId=$_POST['sessionId'];
    $x=$_POST['x'];
	$y=$_POST['y'];
	$state=$_POST['state'];

	$sql = "CREATE TABLE IF NOT EXISTS seats (
				id int,
				sessionId int,
				x int,
				y int,
				state varchar(255) NOT NULL,
				UNIQUE(id)
			);
			INSERT IGNORE INTO seats SET 
				id = '$id',
				sessionId = '$sessionId', 
				x = '$x', 
				y = '$y', 
				state = '$state';";
	
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