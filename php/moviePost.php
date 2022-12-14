<?php
	$id=$_POST['id'];
    $name=$_POST['name'];
	$synopsis=$_POST['synopsis'];
	$category=$_POST['category'];
    $duration=$_POST['duration'];
	$picture=$_POST['picture'];
	$popularity=$_POST['popularity'];

	$sql = "CREATE TABLE IF NOT EXISTS movie (
				id int NOT NULL,
				name varchar(255),
				synopsis varchar(255),
				category varchar(255),
				duration int,
				picture varchar(255),
				popularity int,
				UNIQUE (id));
			INSERT IGNORE INTO movie SET id = '$id', name = '$name', synopsis = '$synopsis', category = '$category', duration = '$duration', picture = '$picture', popularity = '$popularity';";
	
    $mysqlClient = new PDO('mysql:host=localhost;dbname=cinema;charset=utf8', 'root', 'root');

    $statement = $mysqlClient->prepare($sql);

    $statement->execute();

	echo "test2";
	/*
    if (mysqli_query($mysqlClient, $sql)) {
		echo "test2.5";
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo "test2.6";
		echo json_encode(array("statusCode"=>201));
	}
	
	echo "test3";
	
	mysqli_close($mysqlClient);
*/
	echo "test4";
?>