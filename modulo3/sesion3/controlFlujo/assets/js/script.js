function tickets() {
    var asiento = parseInt(prompt('Seleccione tipo de asiento1 \n1.-Asiento normal $5.000\n2.-Asiento preferencial $9.000\n3.-Asiento VIP $13.000 '));
    var valor = '';
    var total = '';
    var dcto = '';
    var totalDcto = '';
    var subTotal = '';



    switch (asiento) {
        case 1:
            var cantidad = parseInt(prompt('Ingrese la cantidad de asientos que desea reservar:'));

            while (cantidad <= 0) {
                alert('La cantidad minima de asientos para reservar de 1.\nIntenta nuevamente.');
                cantidad = parseInt(prompt('Ingrese la cantidad de asientos que desea reservar:'));
            }

            if (cantidad > 4) {
                valor = 5000;
                dcto = valor * 10 / 100;
                totalDcto = cantidad * dcto;
                subTotal = cantidad * valor;
                total = (subTotal - totalDcto);
            } else {
                valor = 5000;
                totalDcto = 0;
                subTotal = cantidad * valor;
                total = subTotal;
            }
            //alert(`Tipo de asiento: Normal\nCantidad de asientos: ${cantidad}\nValor entradas: $${valor}\nSubtotal: $${subTotal}\nDescuento: $${totalDcto}\nEl total de su reserva es $${total}`);
            Swal.fire({
                title: "Reserva exitosa",
                html: 'Tipo de asiento: Normal<br> Cantidad de asientos: ' + cantidad + '<br>Valor entradas: $' + valor + '<br>Subtotal: $' + subTotal + '<br>Descuento: $' + totalDcto + '<br>El total de su reserva es: $' + total,
                icon: "success"
            });
            break;
        case 2:
            var cantidad = parseInt(prompt('Ingrese la cantidad de asientos que desea reservar:'));

            while (cantidad <= 0) {
                alert('La cantidad minima de asientos para reservar de 1.\nIntenta nuevamente.');
                cantidad = parseInt(prompt('Ingrese la cantidad de asientos que desea reservar:'));
            }

            if (cantidad > 4) {
                valor = 9000;
                dcto = valor * 10 / 100;
                totalDcto = cantidad * dcto;
                subTotal = cantidad * valor;
                total = (subTotal - totalDcto);
            } else {
                valor = 5000;
                totalDcto = 0;
                subTotal = cantidad * valor;
                total = subTotal;
            }
            Swal.fire({
                title: "Reserva exitosa",
                html: 'Tipo de asiento: Normal<br> Cantidad de asientos: ' + cantidad + '<br>Valor entradas: $' + valor + '<br>Subtotal: $' + subTotal + '<br>Descuento: $' + totalDcto + '<br>El total de su reserva es: $' + total,
                icon: "success"
            });
            break;
        case 3:
            var cantidad = parseInt(prompt('Ingrese la cantidad de asientos que desea reservar:'));

            while (cantidad <= 0) {
                alert('La cantidad minima de asientos para reservar de 1.\nIntenta nuevamente.');
                cantidad = parseInt(prompt('Ingrese la cantidad de asientos que desea reservar:'));
            }

            if (cantidad > 4) {
                valor = 13000;
                dcto = valor * 10 / 100;
                totalDcto = cantidad * dcto;
                subTotal = cantidad * valor;
                total = (subTotal - totalDcto);
            } else {
                valor = 13000;
                totalDcto = 0;
                subTotal = cantidad * valor;
                total = subTotal;
            }
            Swal.fire({
                title: "Reserva exitosa",
                html: 'Tipo de asiento: Normal<br> Cantidad de asientos: ' + cantidad + '<br>Valor entradas: $' + valor + '<br>Subtotal: $' + subTotal + '<br>Descuento: $' + totalDcto + '<br>El total de su reserva es: $' + total,
                icon: "success"
            });
            break;

        default:
            console.log('Opcion invalida');
            break;
    }
}

tickets();