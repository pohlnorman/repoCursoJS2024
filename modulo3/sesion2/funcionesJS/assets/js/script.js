function categoria() {
    var cat = prompt('Ingrese la opcion de la categoria del producto:\n\n1. Ropa\n2.Eletrónica');

    if (cat == 1) {
        var cat = 1;
    } else if (cat == 2) {
        var cat = 2;
    }
    return cat;
}

function suma() {
    var can = parseInt(prompt('Ingrese la cantidad de productos:'));
    var valor = parseInt(prompt('Ingrese valor del producto:'));

    var suma = can * valor;
    return suma;
}

function venta() {
    var c = categoria();
    var s = suma();
    if (c == 1) {
        var total = (s - (s * 5 / 100));
    } else if (c == 2) {
        var total = (s - (s * 10 / 100));
    }
    alert(`El total de su compra es: ${total}`);
    document.getElementById('venta').innerHTML = `El total de su compra es: $${total}`;

}
venta();