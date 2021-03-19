$(document).ready(function() {

  
    
    
    //REGISTRAR
    $(".enviarRegistro").click(function() {
        var op = document.formulario.seleccionar.selectedIndex;
        var ops = document.formulario.seleccionar.options[op].value;
    const datosUsu = {
      usu: $('#nombreRegis').val(),
      pass: $('#contraseniaRegis').val(),
      ciudad: ops
    };

    alert(ops);
    const url =  'insertar.php';
    $.post(url, datosUsu, (response) => {
      console.log(response);
    });
  });


  //INGRESAR A LA PAGINA REGISTRAR
  
  function myFunction() {
    window.open("registrar.html");
  }
    $(".registrar").click(function () {
      myFunction();
    });
   
    


  //BUSCAR
  $(".btnEntrar").click(function() {
    let usu= $('#nombres').val();
    let pass= $('#contrasenia').val();
   
    
    if($('#nombres').val()) {
      let dato = $('#nombres').val();
    
      $.ajax({
        url: 'buscar.php',
        data: {dato},
        type: 'POST',
        success: function (response) {
          console.log(response);
           if(!response.error) {
            let result = JSON.parse(response);
            
            let usuario = '';
            let contrasenia= '';
            result.forEach(rs => {
              usuario = rs.usuario;
              contrasenia = rs.contrasenia;  
              id = rs.id;  
            });
         
            if(usuario == usu && contrasenia==pass){
                alert("son correctos");
              
                 regresaDatos(id);
            }else{
                alert("No correctos");
            }
          }
        } 
      });
    }
  });

  //RETORNAR DATOS
  function regresaDatos(id) {
    const idUsu= id;
    
    $.post('buscar.php', {idUsu} ,(response)=>{

      
      
        console.log(response);
        
        if(!response.error){
          let result = JSON.parse(response);
          let enviar='';
          
          result.forEach(res=>{
            id = res.id;
            Nombre = res.nombre;
            Ciudad = res.ciudad;
            Contrasenia = res.pass;

            
              enviar =`
              <ul id=dat>
              <li>ID: ${res.id}</li>
              <li>NOMBRE:   ${Nombre}</li>
              <li>CIUDAD:  ${Ciudad}</li>
              <li>CONTRASEÑA:     ${Contrasenia}</li>
              </ul>
              ` 
            
          });
          
          var V_Incio=window.open('inicio.php','_self');
          V_Incio.document.write(enviar);
          V_Incio.addEventListener("load",Actualizar());
          $("#dat").css({
            "color":"rgb(41, 64, 68)",
             "font-size": "35px",
            'border': '5px solid rgb(93, 24, 172)',
            'margin-left': '200px',
            'margin-right': '200px'
            });
            
        }
    });
  
 }

  function Actualizar() {
    document.write(`<input  id ="ver" type="button"  value="Ver para actualizar los datos del usuario"><br><br>`);
    document.body.style.backgroundColor='rgb(125, 146, 202)';
    $("input").css({
                  "background-color": "rgb(21, 60, 133)",
                   "font-size": "30px",
                   "color":"white",
                   'margin-left': '200px',
                  });
                
    $('#ver').on("click",function() {
      $("#ver").hide(1500);
      document.write(` <form name="frm">
      <div id=f>
      ID. <input class= "textField" type="text" name="cod" id="cod" value="${id}" ><br><br>
      NOMBRE. <input class= "textField" type="text" name="nombre" id="nombre" value="${Nombre}"="Ingrese Usuario"><br><br>
      CIUDAD. <select id="nuevaCiudad" name="nuevaCiudad">
              <option value="1">Cayambe</option>
              <option value="2">Quito</option>
              <option value="3">Otavalo</option>
              <option value="4">Guayaquil</option>
               </select><br><br>
      CONTRASEÑA. <input class= "textField" type="text" name="password" id="password" value="${Contrasenia}"="Ingrese Usuario"><br><br>
             </div>         
      </form>

      `);
      $("input").css({
        'background':' rgb(4, 90, 40)',
         "font-size": "30px",
         "color":"white",
        
        });
      $("#f").css({
       
         "font-size": "30px",
         "color":"black",
         'margin-left': '200px'
        });
        $("#nuevaCiudad").css({
          'background':' rgb(4, 90, 40)',
           "font-size": "20px",
           "color":"white"
          });

      
      document.write(`<input  id ="actualizar" type="button"  value="Actualizar"><br><br>`);
      $("#actualizar").css({
        "background-color": "rgb(21, 60, 133)",
         "font-size": "30px",
         "color":"white",
         'margin-left': '200px',
        });
            $("#actualizar").click(function() {
                 var selecInd = document.frm.nuevaCiudad.selectedIndex;
                 var opcion = document.frm.nuevaCiudad.options[selecInd].value;

                 
               const nuevoDatos = {
                    id: $('#cod').val(),
                   usu: $('#nombre').val(),
                   pass: $('#password').val(),
                   ciudad: opcion
                };
                  const url =  'actualizar.php';
                 $.post(url, nuevoDatos, (response) => {
                    alert(response);
                    
                });
               
                
              });

           });
          
           
  }

  });
  































































var intentos=3;
function guardar(){
   /*var username=document.getElementById("nombres").value;
    var password = document.getElementById("contrasenia").value;

    if(username == "admin"&& password=="12345" ){
        alert('USUARIO Y PASSWORD CORRECTO');
    }else{
        alert('INCORRECTO PASSWORD O USUARIO');
        intentos--;
        if(intentos==0){*/
            alert('SE HA BLOQUEADO LA APLICACION VUELVA A INTENTARLO MÁS TARDE')
           /* document.getElementById("nombres").disabled=true;
            document.getElementById("contrasenia").disabled=true;
            document.getElementById("bottom").disabled=true;
            return false;
        }
    }*/
    
}