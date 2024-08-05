//inicio el arreglo vacio.
const tareas = [];

//se crea la funsion constructora para las tareas.
//dentro de la funsion se crean los metodos para
//agregar tareas al arreglo y cambiar el estado de las tareas.
function Tarea(descripcion, estado) {
    this.descripcion = descripcion;
    this.estado = estado;

    this.agregar = function() {
        tareas.push({ descripcion, estado });
    }

    this.terminar = function(n) {
        let hecho = 'hecho';
        tareas[n - 1].estado = hecho;
        console.log(tareas[n - 1])
    }
}


//se crea la funsion para filtrar las tareas.
function filtrar(tareas) {
    return tareas.estado == 'Pendiente'
}


//se crea la funsion para mostrar la cantidad total de tareas.
function totalTareas() {
    var total = 0;
    for (let i = 0; i < tareas.length; i++) {
        total = total + 1;

    }
    console.log('Numero total de tareas: ' + total)
}

// se crear las tareas para agregar al arreglo.
var tarea1 = new Tarea('hacer la cama', 'Pendiente');
var tarea2 = new Tarea('botar la basura', 'Pendiente');
var tarea3 = new Tarea('pasear al perro', 'Pendiente');
var tarea4 = new Tarea('cortar el pasto', 'Pendiente');
console.log(tareas)


//se llama al metodo agregar para ingresar las tareas al arreglo
tarea1.agregar();
tarea2.agregar();
tarea3.agregar();
tarea4.agregar();

// se muestran por consola las tareas listadas en el arreglo
console.log(tareas)

//se llama al metodo terminar para cambiar el estado de la tarea.
tarea1.terminar(1);

// se muestran por consola las tareas listadas en el arreglo
// ahora una tarea tiene el estado modificado.
console.log(tareas)


//se crea la variable para guardar el resultado filtrado.
var resultadoFiltrado = tareas.filter(filtrar);

//llamamos al metodo para filtrar el resultado
filtrar(tareas);

//mostramos por consola el resultado filtrado
console.log(resultadoFiltrado)

//llamamos al metodo para mostrar el total de tareas ingresadas.
// y lo mostramos por consola.
totalTareas();