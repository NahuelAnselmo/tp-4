/*1- Crea un objeto llamado auto que tenga algunas
características como el color, marca, modelo y si está
encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto. */

class Auto {
  constructor(color, marca, modelo, estadoAuto) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.estadoAuto = Math.random() < 0.5;
  }

  encender() {
    if (!this.estadoAuto) {
      this.encendido = true;
      console.log("El auto ha sido encendido.");
    } else {
      console.log("El auto ya está encendido.");
    }
  }

  apagar() {
    if (this.estadoAuto) {
      this.apagar = false;
      console.log("El auto ha sido apagado.");
    } else {
      console.log("El auto ya está apagado.");
    }
  }
}

const modelo = prompt("ingrese el modelo del auto");
const marca = prompt("ingrese la marca del auto");
const color = prompt("ingrese el color del auto");

let miAuto = new Auto(modelo, marca, color);
console.log(miAuto);

if (this.estadoAuto) {
  console.log("El estado inicial del auto es: encendido.");
} else {
  console.log("El estado inicial del auto es: apagado.");
}

const accion = prompt("¿Desea encender (e) o apagar (a) el auto?");

if (accion === "e") {
  miAuto.encender();
} else if (accion === "a") {
  miAuto.apagar();
} else {
  console.log("Acción no válida.");
}
