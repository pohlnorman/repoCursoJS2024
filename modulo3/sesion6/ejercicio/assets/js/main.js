function edades(){
    const edades = [];
    let cantidad = parseInt(prompt('cuantas edades ingresara?'));
    
    for (let i = 0; i < cantidad; i++) {
        let edad = parseInt(prompt('Ingredad edad mayor a 0 n° '+(i+1)))
        edades.push(edad);
        
    }
    let resultado = edades.filter(verificarMayorDeEdad);
    function verificarMayorDeEdad(edad) {
        return edad >= 18;
    }
    let edadesIngresadas = document.getElementById('textAreaEdadesIngresadas');
    let edadesResultado = document.getElementById('textAreaEdadesResultado')
    edadesIngresadas.innerHTML = edades;
    edadesResultado.innerHTML = resultado;
    console.log('mayores de edad: '+resultado);
};

function frutas(){
    const frutas = [];
    let cantidad = prompt('cuantas frutas va a ingresar?');

    for (let i = 0; i < cantidad; i++) {
        let fruta = prompt('Ingresa fruta '+(i+1));
        frutas.push(fruta); 
    }

    let BFruta = 'Mango';
    let busqueda = frutas.includes(BFruta);
    let frutasIngresadas = document.getElementById('textAreaFrutasIngresadas');
    let BuscarFruta = document.getElementById('textAreaBuscaFruta');
    let frutasResultado = document.getElementById('textAreaFrutasResultado');
    frutasIngresadas.innerHTML = frutas;
    BuscarFruta.innerHTML = BFruta;
    frutasResultado.innerHTML = busqueda;
    console.log(busqueda);
}

function fusion(){
    const numeroA=[];
    const numeroB=[];
    let cantidad = parseInt(prompt('cuantos numeros tendra cada arreglo?'));

    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(prompt('Ingrese numero '+(i+1)+' para el arreglo A'));
        numeroA.push(numero);        
    }

    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(prompt('Ingrese numero '+(i+1)+' para el arreglo B'));
        numeroB.push(numero);        
    }

    var union = numeroA.concat(numeroB.filter(function (x) {
        return !numeroA.includes(x)
        }));
    console.log(union);
    
    var interseccion = numeroA.filter((function (x) {
        return numeroB.includes(x)
        }));
    console.log(interseccion);
    
    var diferencia = numeroA.concat(numeroB).filter((function (x) {
        return !numeroA.includes(x) || !numeroB.includes(x)
        }));
    console.log(diferencia);

    let textArreglos = document.getElementById('textAreaArreglos');
    textArreglos.innerHTML = 'Arreglo A: '+numeroA+', arreglo B: '+numeroB;

    let unionArreglos = document.getElementById('textAreaUnion');
    unionArreglos.innerHTML = union;

    let interseccionArreglos = document.getElementById('textAreaInterseccion');
    interseccionArreglos.innerHTML = interseccion;

    let direfenciaArreglos = document.getElementById('textAreaDiferencia');
    direfenciaArreglos.innerHTML = diferencia;
    
}

function borrar(){
    let borrar = document.getElementsByTagName('textarea').reset();
    edadesIngresadas = document.getElementById('textAreaEdadesIngresadas').reset()
}