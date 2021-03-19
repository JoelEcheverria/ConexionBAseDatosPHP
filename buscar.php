<?php
include('BD.php');



if (isset($_POST['idUsu'])) {
  $id= $_POST['idUsu'];
  if (!empty($id)) {
    $consultaUsu = "SELECT IDUSU,NOMBRE,USUARIOS,CONTRASENIA FROM usuario INNER JOIN ciudad ON usuario.IDCIUDAD= ciudad.IDCIUDAD  WHERE IDUSU = $id";
    $rsUsu = mysqli_query($conectar,$consultaUsu);

    if (!$rsUsu) {
      die('Query Error' . mysqli_error($conectar));
    }

    $json = array();
    while ($row = mysqli_fetch_array($rsUsu)) {
      $json[] = array(
          'id' => $row['IDUSU'],
          'ciudad' => $row['NOMBRE'],
          'nombre' => $row['USUARIOS'],
          'pass' => $row['CONTRASENIA']
      );
      $jsonstring = json_encode($json);
      echo $jsonstring;
    }
  } 
  
  
}else{
  $dato = $_POST['dato'];
  if(!empty($dato)) {
    $query = "SELECT * FROM usuario WHERE USUARIOS LIKE '$dato%'";
    $result = mysqli_query($conectar, $query);
    
    if(!$result) {
      die('Query Error' . mysqli_error($conectar));
    }
    
    $json = array();
    while($row = mysqli_fetch_array($result)) {
      $json[] = array(
        'usuario' => $row['USUARIOS'],
        'contrasenia' => $row['CONTRASENIA'],
        'id' => $row['IDUSU']
      );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
  }

}



?>