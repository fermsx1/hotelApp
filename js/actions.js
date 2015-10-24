var fn = {
    init: function(){
        //var x= false;
        
        if(!fn.estaRegistrado){
            window.location.href ='#registro';
        }
        
        
        $('#regSend').click(fn.getReg);
        $('#tomarFoto').click(mc.start());
    },
    
    deviceReady: function(){
        document.addEventListener("deviceready", onDeviceReady, false);

    },
    
    estaRegistrado : function (){
        if(window.localStorage.getItem('uuid')!=undefined){
            return true;
        }else{
            return false;
        }
    },
    
    getReg:function(){
        var nom = $('#regNom').val();
        var tel = $('#regTel').val();
        var mail = $('#regMail').val();
        //var nom = document.getElementById('regNom').value;
        var foto = $('#fotoTomada').attr("rel");
        
        
        //&& foto!=undefined && foto!=''
        if( nom!='' && tel !='' && mail != '' && foto!=undefined && foto !='' ){
                
            //alert(nom + ' - ' + tel + ' - ' + mail);            
                
            fn.enviarRegistro(nom,mail,tel, foto);
            
        }else{
            alert("Todos los campos son requeridos");
            
            navigator.notification.alert('Todos los campos son requeridos');
        }

        
    },
    
    enviarRegistro:funcion(nombre, mail, telefono, foto){
        $.ajax({
              method: "POST",
              url: "http://carlos.igitsoft.com/apps/test.php",
              data: { nom: nombre, 
                      mail = mail, 
                      tel: telefono     
                    }
            }).done(function( msg ) {
                
                if(msg == 1 ){
                    //ENVIAR FOTO
                    ft.start(foto);
                else{
                    alert( "Datos incorrectos" );    
                }
                
              });
        
    }



}

//window.addEventListener("load", fn.init, false);
//jQuery.(document).ready(fn.init);
//$(document).ready(fn.init);
                    
//COMENTAR AL COMPILAR
                    
//$(fn.init);

//DESCOMENTAR AL COMPILAR

$(fn.deviceReady);