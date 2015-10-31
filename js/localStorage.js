//Archivo de bases de datos


var localStorage = {
    registroLocal: function(){
        window.localStorage.setItem('nom', device.uuid);
        window.location.href='#home';
    },
    estaRegistrdo: function(){
        var nom  = window.localStorage.getItem('nom');
        if(nom != undefined){
            return true;
        }else{
            return false;
        }
    }
};
