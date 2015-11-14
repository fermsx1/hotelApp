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
        
        //$.mobile.loading("hide");
        
        alert("Error", "codigo " + e.code);
        
        window.location.href='#home';
    },
    
    exito:function(){
        
        
        alert("Reserva guardada, en esera de sincronizacion");
        
        window.location.href='#home';
    },
    
      reservaLeida:function(){
                
       alert("Sincronizacion correcta");
        
    //    window.location.href='#home';
    },
    
      historialGuardado:function(){
        
        
       // alert("Reserva guardada, en esera de sincronizacion");
        
       // window.location.href='#home';
    },
    
    tablaReserva:function (tx){
        tx.executeSql("CREATE TABLE IF NOT EXISTS reservas (th, np, nh, nd)");
        tx.executeSql("INSERT INTO reservas (th, np, nh, nd) VALUES('"+almacen.th+"','"+almacen.np+"','"+almacen.nh+"','"+almacen.nd+"')");        
    },
    
    syncData : function(){
        
        almacen.db = window.openDatabase("hotelApp", "1.0", "Hotel App", 200000);
        almacen.db.transaction(almacen.leerReservas, almacen.error, almacen.reservaLeida);

    },
    
    leerReservas : function(tx){
        //[] Para declarar arreglos
        
        tx.executeSql("SELECT * from reservas", [], function(tx2,response){
            //Leer la respuesta
            for(i=0; i<response.rows.length;i++){
                server.envRes(response.rows.item(i).th, response.rows.item(i).np,  response.rows.item(i).nh,                                 response.rows.item(i).nd )
                
                almacen.th = response.rows.item(i).th;
                almacen.np = response.rows.item(i).np;
                almacen.nh = response.rows.item(i).nh;
                almacen.nd =  response.rows.item(i).nd;
                
                almacen.db.transaction(almacen.tablaHistorial, almacen.error, almacen.historialGuardado);

                
            }
            

            
        }, almacen.error);
        
    
    }, 
    tablaHistorial : function(tx){
          tx.executeSql("CREATE TABLE IF NOT EXISTS historial (th, np, nh, nd)");
        tx.executeSql("INSERT INTO historial (th, np, nh, nd) VALUES('"+almacen.th+"','"+almacen.np+"','"+almacen.nh+"','"+almacen.nd+"')");  
    }
    
}