<?php

  include('BD.php');

if(isset($_POST['usu'])) {//si la variable existe
  # echo $_POST['name'] . ', ' . $_POST['description'];
  $usu = $_POST['usu'];
  $pass = $_POST['pass'];
  $ciudad = $_POST['ciudad'];
  
  $dUsu = "INSERT into usuario(usuarios, contrasenia,idciudad) VALUES ('$usu', '$pass',$ciudad)";
  //$dCiu = "INSERT into ciudad(nombre) VALUES ('$ciudad')";

  $resultUsu = mysqli_query($conectar, $dUsu);
  //$resultCiud = mysqli_query($conectar, $dCiu);

  if (!$resultUsu) {
    die('Query Failed.');
  }

  echo "Task Added Successfully";  

}

?>
