/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */


class libro {
    constructor (ISBN, Titulo, Autor, NumPaginas){
        this.ISBN = ISBN;
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.NumPaginas = NumPaginas;
    }

    mostrarLibro(){
        console.log(`El libro ${this.Titulo} con ISBN ${this.ISBN} creado por el autor ${this.Autor} tiene páginas ${this.NumPaginas}`);
    }
}


const libro1 = new libro("123456789", "El libro 1", "Autor 1", 100);

const libro2 = new libro("987654321", "El libro 2", "Autor 2", 200);

console.log(libro1.mostrarLibro());
console.log(libro2.mostrarLibro());

if (libro1.NumPaginas > libro2.NumPaginas) {
    console.log("El libro 1 tiene más páginas");
}else if (libro1.NumPaginas < libro2.NumPaginas){
    console.log("El libro 2 tiene más páginas");
}else{
    console.log("Ambos libros tienen la misma cantidad de páginas");
}