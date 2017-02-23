/*var span=document.createElement("span");
function mensajeNombre(){
    var nom=document.getElementById("name");
    span.innerHTML="escriba su nombre";
    nom.parentNode.appendChild(span);  
}
var spanNom=document.createElement("span");
function nombreAviso(){
    console.log("mamacita");
    var nombre2=document.getElementById("name");
    spanNom.innerHTML=" ingrese su nombre";
   nombre2.parentNode.appendChild(spanNom);
}



var apeSpan=document.createElement("span");
function mensajeApellido(){
    var apelli=document.getElementById("lastname");
    apeSpan.innerHTML="escriba correctamente su apellido";
    apelli.parentNode.appendChild(apeSpan);  
}
var apeSpan2=document.createElement("span");
function mensajeAviso(){
    var apellido2=document.getElementById("lastname");
    apeSpan2.innerHTML="ingrese su apellido";
    apellido2.parentNode.appendChild(apeSpan2);  
}

// correo
var span3=document.createElement("span");
function mensajeCorreo(){
    var email = document.getElementById("input-email"); 
    span3.innerHTML="verifique su correo";
    email.parentNode.appendChild(span3);
}

// contraseña
var span4 =document.createElement("span");
function  contrasenia (){
    var password = document.getElementById("input-password");
    span4.innerHTML="Su contraseña debe tener 6 caracteres";
    password.parentNode.appendChild(span4);
}


var span5=document.createElement("span");
function mensajeSelec(){
    var opcione= document.querySelector("select");
    span5.innerHTML="Elija una de las opciones que le da";
    opcione.parentNode.appendChild(span5);
}


function validateForm()
{
    var valiNombre = /^[a-zA-Z]*$/;
    var valiCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contra = document.getElementById("input-password").value;
    var twitter = document.getElementById("input-social").value;
    var selec= document.querySelector("select").value;
    
    if(nombre ==="" ||apellido===""||correo===""||contra===""){
        nombreAviso();
        mensajeAviso();
        mensajeCorreo();
        contrasenia ();
        mensajeSelec();
    }else{
        spanNom.style.display="none";
        apeSpan2.style.display="none";
        span3.style.display="none";
        span4.style.display="none";
    }
    
    
    if (!valiNombre.test(nombre))
    {
        mensajeNombre();
    }else{
        if(nombre.toLowerCase())
        {   
            document.getElementById("name").value=nombre.charAt(0).toUpperCase()+nombre.slice(1);
            span.style.display="none";
            mensajeNombre();
        }else{
            nombreAviso(); 
            span.style.display="none";
        }  
    }
 
  //va
    if (!valiNombre.test(apellido))
    {
        mensajeApellido();
    }else{
        if(apellido.toLowerCase())
        {
            document.getElementById("lastname").value=apellido.charAt(0).toUpperCase()+apellido.slice(1);
            mensajeApellido();
            apeSpan.style.display="none";
        }else{
            mensajeAviso(); 
        }  
    }
    
  //vc
 if (!valiCorreo.test(correo)){
        mensajeCorreo();
        return false; 
    }else{
       span3.style.display="none";
    }
 
 //vac
 if (contra.length<=6){
        contrasenia();
       
    }else{
       
       span4.style.display="none";
    } 
   
    
    // vo 
    if (selec ==0) {
       mensajeSelec();
        return false;
    } else {
        span5.style.display="none";
    } 
}*/
$(document).ready(function(){
    $("#boton").click(function(){
        var name =$("#name").val();
        var surnames =$("#lastname").val();
        var mail=$("#input-email").val();
        var acode=$("#input-password").val();
        
         //decalarando una variable 
        var eliminar =$("span");
        for(var i=0; i<eliminar.length; i++){
            eliminar[i].remove(eliminar[i]);
        }
    
    if(name.length==0){
        $(".name-container").append("<span>llene sus datos</span>");
        //append sirve para crear un elemento hijo y lo agrega al final
    }
        if(surnames.length==0){
            $(".lastname-container").append("<span>ingrese su apellido</span>");
        }
        if(mail.length==0){
            $(".email-container").append("<span>ingrese su correo</span>");
        }
        if(acode.length==0){
            $(".contrase").append("<span>ingrese su contraseña</span>");
        }
        //validacion de formulario
        //Nombre
        var noNumer=(/[0-9]/g).test(name);
        if(noNumer==true){
            $(".name-container").append("<span>La manera correcta es con letras</span>");
            }
        //Apellido
        var noNume=(/[0-9]/g).test(surnames);
        if(noNume==true){
            $(".lastname-container").append("<span>La manera correcta es con letras</span>")
        }
        //correo
        var noNum=(/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i);
        //!noNum.test(mail) cuando se adiferente a la variable noNun
        if(!noNum.test(mail)){
            $(".email-container").append("<span>verifique su correo</span>");
        }
        //contraseña
            if(acode.length<=6){
                $(".contrase").append("<span>su contraseña deve tener minimo 6 caracteres</span");
            }
        //eliminando span
       
        
        });
});



