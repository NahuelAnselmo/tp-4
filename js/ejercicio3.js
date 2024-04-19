/*3-Escribe una clase que permita crear distinto
objetos “rectángulos”, con las propiedades de alto y
ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el
área */

class Rectangulo {
    constructor() {
      this.alto = parseFloat(prompt("Ingrese el alto del rectángulo:"));
      this.ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
    }
  
    modificarPropiedades() {
      this.alto = parseFloat(prompt("Ingrese el nuevo alto del rectángulo:"));
      this.ancho = parseFloat(prompt("Ingrese el nuevo ancho del rectángulo:"));
      console.log("Las propiedades del rectángulo han sido modificadas:");
      this.mostrarPropiedades();
    }
  
    mostrarPropiedades() {
      console.log("Alto:", this.alto);
      console.log("Ancho:", this.ancho);
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  const miRectangulo = new Rectangulo();
  
  // primeros datos del rectangulo
  console.log("Propiedades del rectángulo:");

  console.log("Perímetro del rectángulo:", miRectangulo.calcularPerimetro());
  
  console.log("Área del rectángulo:", miRectangulo.calcularArea());

  // segundo datos del rectangulo
  miRectangulo.mostrarPropiedades();
  
  miRectangulo.modificarPropiedades();
  
  console.log("Perímetro del rectángulo:", miRectangulo.calcularPerimetro());
  
  console.log("Área del rectángulo:", miRectangulo.calcularArea());
  