var server = {
	path: null,
	regSend: function(nom, tel, mail, foto){
		server.path = foto;
		$.ajax({
			method: "POST",
			url: "http://carlos.igitsoft.com/apps/test.php",
			data: { nom: nom, mail: mail, tel: tel }
		}).done(server.regDone);
	},
	regDone: function(msg){
		if(msg == 1){
			fileTransfer.sendPhoto(server.path);
		}else
			navigator.notification.alert("Hubo un error al enviar los datos", null, "Error al enviar datos", "Aceptar");
	},
    
    envRes:function(th,np,nh,nd){
        $mobile.loading("show");
        $.ajax({
			method: "POST",
			url: "http://carlos.igitsoft.com/apps/test.php",
			data: { tipo: th, numnp: np, numnh: nh, numnd:nd }
		}).done(function(respuesta){
            $mobile.loading("hide");
            
            alert("Prueba server");
            
            if(respuesta == "1"){
                alert("Los datos han sido guardados");
                //Agregar al historial de reservas
            }else{
                alert("Error al guardar datos al servidor");
            }
        });
    }
};