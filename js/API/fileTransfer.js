
var ft{
    
    win: function (r) {
        
        if(r.responseCode){
            //EXITOSO
            
            navigator.notification.alert('Registrado Correctamente', function(){
                navigator.vibrate(2000); 
                navigator.notification.beep(1);
                window.localStorage.setItem('uuid',10);
                window.location.href ='#home';

                },
                'Bienvenido',
                'Registrado'
            );


        }else{
            alert("Error")
        }
       
    },
    
    fail:function (error) {
        aler("Error " + error);
    },
        
    start:function(path){
        var uri = encodeURI("http://carlos.igitsoft.com/apps/test.php");

        var options = new FileUploadOptions();
        options.fileKey="foto";
        options.fileName="Fernando";
        options.mimeType="image/jpeg";
        var ft = new FileTransfer();     
        
        ft.upload(path, uri, ft.win, ft.fail, options);
    }




}





