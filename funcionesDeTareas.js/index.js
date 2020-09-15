const fs = require('fs');

const accionDelUsuario = process.argv[2];

const acciones = {
    
    accederATareas: function(){
        const data = fs.readFileSync('./tareas.json', 'utf-8');
        const tareas = JSON.parse(data);
        return tareas
    },
    
    guardarTareas: function(tareas){

        let tareasJson = JSON.stringify(tareas);
    
        fs.truncate('./tareas.json', 0, function() {
            fs.writeFile('./tareas.json', tareasJson, function (err) {
                if (err) {
                    return console.log("Error writing file: " + err);
                }
            });
        });

    },


    listar: function (){

        const tareas = this.accederATareas();

        let i = 1
        
        for(tarea of tareas){
    
            console.log('Titulo de la Tarea nº' + i + ': ' + tarea.titulo);
            console.log('Estado de la Tarea nº' + i + ': ' + tarea.estado);
            console.log('\n');
            i++;
        }
    
    },

    agregar: function (nuevaTarea){
    
        const tareas = this.accederATareas();

        objNuevaTarea = {titulo: nuevaTarea, estado: 'Pendiente'};

        tareas.push(objNuevaTarea);
        
        this.guardarTareas(tareas);
       
    
    },

    borrar: function (numeroDeTarea){

        const tareas = this.accederATareas();

        if(numeroDeTarea - 1 >=tareas.length){
            console.log('La tarea está fuera de rango');
        }else{
            
            const tareas = this.accederATareas();

            tareas.splice(numeroDeTarea - 1, 1);

            this.guardarTareas(tareas)
    
        }
    
    }


}


module.exports = acciones;
