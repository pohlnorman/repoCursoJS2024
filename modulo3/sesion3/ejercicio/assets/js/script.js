// inicio funcion 1
var condicion = true;
// if
if (condicion) { // Si se cumple la condición ...
    // Se ejecuta este bloque de código.
}

function eval(valor) {
    if (valor.includes("hello")) {
        console.log("EL input si contiene la palabra hello")
    }
    if (valor.match(1)) {
        console.log("EL input si contiene el numero 1")
    }
}


// inicio funsion 2
var resultado = "esta variable indica si es positivo, cero o negativo.";

function evalIf(valor) {
    // si el valor es igual a 0, entonces la variable resultado será "cero".
    if (valor == 0) { resultado = "cero" }
    // si el valor es mayor a cero, entonces la variable resultado será "positivo".
    if (valor > 0) { resultado = "positivo" }

    // si el valor es menor a cero, entonces la variable resultado será "negativo".
    if (valor < 0) { resultado = "negativo" }
    document.getElementById("result").innerHTML = `El input '${valor}' es ${resultado}.`;
}


//inicio funsion 3
var resultadoElse = "esta variable indica si es positivo, cero o negativo.";

function evalIfElse(valor) {
    if (valor >= 0) {
        // si el valor es mayor o igual a cero, entonces la variable resultado será "positivo".
        resultadoElse = "positivo"
    } else {
        // O sino, entonces la variable resultado será "negativo".
        resultadoElse = "negativo"
    }
    document.getElementById("resultElse").innerHTML = `El input '${valor}' es ${resultadoElse}.`;
}


//inicio funsion for
function repite() {
    // Obtenemos los valores desde el input:
    var valor = document.getElementById('valor').value;
    var veces = document.getElementById('veces').value;
    // Repetiremos un valor por la cantidad de veces que indica el usuario:
    for (let i = 0; i < veces; i++) {
        console.log(`(${i}) ${valor}`);
    }
}

//inico funsion switch
function cambia(valor) {
    switch (valor) {
        case '1':
            console.log(`Para la opción '${valor}' se ejecuta este código.`);
            break;

        case '2':
            console.log(`Para la opción '${valor}' se ejecuta este código.`);
            break;

        case '3':
            console.log(`Para la opción '${valor}' se ejecuta este código.`);
            break;
        default:
            break;
    }
}

//inicio funsion do while
function hacerMientras() {
    var numero = document.getElementById('numero').value;
    var i = 1;

    do {
        // mostramos el valor de i
        console.log(i);
        // incrementamos i
        //i++;
        i = i * 4;
    } while (i <= numero);
}