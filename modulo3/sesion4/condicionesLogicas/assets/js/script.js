function picnic() {
    var temperatura = document.getElementById('idTemperatura').value;
    var lluviaSol = document.getElementById('idSelectLluviaSol').value;
    var tiempo = document.getElementById('isSelectTiempo').value;

    temperatura = (temperatura >= 12 && temperatura <= 30) ? true : false;
    lluviaSol = (lluviaSol == 1) ? true : false;
    tiempo = (tiempo == 1) ? true : false;

    if (temperatura && lluviaSol && tiempo) {
        Swal.fire({
            title: "Excelente!!!!!",
            html: 'Es un buen momento para organizar un picnic',
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Mejor otro día.",
            html: 'Deja el picnic para otro momento',
            icon: "warning"
        });
    }


}