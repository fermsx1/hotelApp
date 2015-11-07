var conexion={
    estaConectado : funtion(){
    
        if(navigator.connection.type != Connection.NONE){
            return true;    
        }else{
            return false;
        }
    }
    
}