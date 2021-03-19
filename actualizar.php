<?php 
include('BD.php');

if(isset($_POST['id'])){
    $id = $_POST['id'];
    $nombre= $_POST['usu'];
    $ciudad= $_POST['ciudad'];
    $pass= $_POST['pass'];

    $consulta = "UPDATE usuario SET IDCIUDAD='$ciudad', USUARIOS='$nombre', CONTRASENIA='$pass' WHERE IDUSU=$id";
    $busqueda = mysqli_query($conectar,$consulta);

    if(!$busqueda){
        die('No se pudieron actualizar los datos');
    }

    echo 'Datos Actualizados';


}
?>