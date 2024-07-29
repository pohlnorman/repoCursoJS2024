function area(a) {
    let area = '';
    let pi = 3.1416;
    let radio = a;

    area = pi * (Math.pow(radio, 2));

    console.log('El area del circulo es :' + area)
}

area(5);