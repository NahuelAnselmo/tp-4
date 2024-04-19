/*Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log("Código:", this.codigo);
      console.log("Nombre:", this.nombre);
      console.log("Precio:", this.precio);
    }
  }
  
  const productos = [];
  
  let continuar;
  do {
    const codigo = prompt("Ingrese el código del producto:");
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
  
    const nuevoProducto = new Producto(codigo, nombre, precio);
  
    productos.push(nuevoProducto);
  
    continuar = prompt("¿Desea ingresar otro producto? (s/n)").toLowerCase() === 's';
  } while (continuar);
  
  console.log("Datos de los productos:");
  productos.forEach(producto => {
    producto.imprimeDatos();
    console.log("--------------------");
  });
  