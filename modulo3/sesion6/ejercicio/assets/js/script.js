console.log('------ Inicio ejercicio 2------------');
var closet = ['abrigos', 'camisas', 'poleras', 'zapatos', 'zapatillas','pantalones', 'traje'];
console.log(closet);
// Eliminar un elemento del final de una matriz ( pop() )
console.log(`Eliminamos último elemento: '${closet.pop()}'`);
console.log(closet);

// Agregar un elemento al final de una matriz ( push() )
console.log(`Agregamos un elemento, ahora el tamaño de la matriz:
    '${closet.push('Cortavientos')}'`);
console.log(closet);

// Eliminar un elemento del principio de una matriz ( shift() )
console.log(`Eliminamos el primer elemento: '${closet.shift()}'`);
console.log(closet);

// Agregar un elemento al comienzo de una matriz ( unshift() )
console.log(`Agregamos un elemento al inicio, ahora el tamaño de la matriz
    es: '${closet.unshift('parka')}'`);
console.log(closet);

console.log('------ Inicio ejercicio 3-----------');
// Usando el método filter

function edades(){
    const edades = [];
    let cantidad = parseInt(prompt('cuantas edades ingresara?'));
    
    for (let i = 0; i < cantidad.length; i++) {
        edades.push(i);
        
    }
    console.log(edades)
}

//var edades = [32, 33, 16, 40];
console.log(edades)
var resultado = edades.filter(verificarMayorDeEdad);
function verificarMayorDeEdad(edad) {
    return edad >= 18;
}
console.log('mayores de edad: '+resultado);

var frutas = ["Plátano", "Naranja", "Manzana", "Mango"];
var busqueda = frutas.includes("Mango");
console.log(busqueda);

console.log('----------Uso del algebra----------');
var numeros = [1, 2, 3];
var letras = ["a", "b", "c"];
var alfanumerico = numeros.concat(letras);
console.log(alfanumerico);
    

var a = [1, 2, 3];
var b = [2, 4, 5];

var union = a.concat(b.filter(function (x) {
    return !a.includes(x)
    }))
console.log(union);

var interseccion = a.filter((function (x) {
    return b.includes(x)
    }))
console.log(interseccion);

var diferencia = a.concat(b).filter((function (x) {
    //[1,2,3,2,4,5]
    return !a.includes(x) || !b.includes(x)
    }));
console.log(diferencia);

