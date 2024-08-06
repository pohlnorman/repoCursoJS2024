libros=[
    {
        'Titulo':'El señor de los anillos',
        'Autor':'J.R.R. Tolkien',
        'Anio':1954
    },
    {
        'Titulo':'Cien años de soledad',
        'Autor':'Gabriel García Márquez',
        'Anio':1967
    },
    {
        'Titulo':'1984',
        'Autor':'George Orwell',
        'Anio':null
    }
]

//inicio codigo para formatear los libros
function formato() {
    for (let i = 0; i < libros.length; i++) {
        console.log('------------------');
        console.log('Título: '+libros[i].Titulo);
        console.log('Autor: '+libros[i].Autor.replaceAll(' ','_'));
        console.log('Año de publicación: '+ (libros[i].Anio ?? 'No especificado'));
    }
}
formato();

//inicio funcion para buscar lor autor
function buscarPorAutor(autor) {
    return autor.Autor === "George Orwell"
}
let autor = libros.find(libro => buscarPorAutor(libro));
console.log(autor);
