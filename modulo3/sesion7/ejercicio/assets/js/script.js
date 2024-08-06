let str = `Hazlo funcionar, hazlo bien, hazlo rápido`;
console.log(str);
console.log(str.replaceAll("hazlo", "ABC"));

// expresión regular
let patron = /hazlo/gi;

console.log(
    str.replaceAll(patron, function (match) {
    if (match === "Hazlo") return "1234";
    if (match === "hazlo") return "ABC";
    })
);

//trimstart, trimend

const str2 = " JavaScript ";
const resultado = str2.trimStart();
console.log({ str2 });
console.log({ resultado });

const str3 = " JavaScript ";
const resultado2 = str3.trimEnd();
console.log({ str3 });
console.log({ resultado2 });

const presupuestoAnual = 1_000_000_000;
console.log(presupuestoAnual);

//oparador de fusion nula
const nombre = null ?? "Aquiles";
console.log(nombre);
const edad = undefined ?? 84;
console.log(edad);
const colorFav = 'azul' ?? 'rojo';
console.log(colorFav);
