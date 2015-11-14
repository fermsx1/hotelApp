var almacen = {
    db:null,
    th:null,
    np:null,
    nh:null,
    nd:null,
    
    guardarReserva : function(th,np,nh,nd){
        
        alert("Guardar Reserva");
        
        almacen.db = window.openDatabase("hotelApp", "1.0", "Hotel App", 200000);
        almacen.th = th;
        almacen.np = np;
        almacen.nh = nh;
        almacen.nd = nd;
        
        almacen.db.transaction(almacen.tablaReserva, almacen.error, almacen.exito);
        
         
        
    },
    
    error:function(e){
        
        $.mobile.loading("hide");
        
        alert("Error", "codigo " + e.code);
        
        window.location.href='#home';
    },
    
    exito:function(){
        $.mobile.loading("hide");
        
        alert("Reserva guardada, en esera de sincronizacion");
        
        window.location.href='#home';
    },
    
    tablaReserva:function (tx){
        tx.executeSql("CREATE TABLE IF NOT EXISTS reservas (th, np, nh, nd)");
        tx.executeSql("INSERT INTO reservas (th, np, nh, nd) VALUES('"+almacen.th+"','"+almacen.np+"','"+almacen.nh+"','"+almacen.nd+"')");        
    }
    
}