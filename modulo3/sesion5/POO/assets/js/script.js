function Empleado(nombre, salario, departamento) {
    this.nombre = nombre;
    this.salario = salario;
    this.departamento = departamento;
    this.aumento = function() {
        var aumento = 10000;
        this.salario = this.salario + aumento;
    };
    this.nuevoDepto = function() {
        var nuevoDpto = 'DDBB'
        this.departamento = nuevoDpto;
    }
    this.detalle = function() {
        console.log("Nombre: " + this.nombre + ", Salario: " + this.salario + ", Departamento: " + this.departamento);
    }
}

var p1 = new Empleado('Norman Pohl', 500000, 'Desarrollo');
var p2 = new Empleado('Katy Pacheco', 500000, 'Diseño');


p1.detalle();
p1.aumento();
p1.detalle();
p1.nuevoDepto();
p1.detalle();