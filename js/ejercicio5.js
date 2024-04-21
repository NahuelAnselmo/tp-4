/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */


class Persona {
    constructor(nombre, edad, sexo, peso, altura, año) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = this.generaDNI();
        this.sexo = sexo.toUpperCase();
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = año;
    }

    mostrarGeneracion() {
        let generacion = "";

        if (this.añoNacimiento >= 1928 && this.añoNacimiento <= 1945) {
            generacion = "Baby Boomer";
        } else if (this.añoNacimiento >= 1946 && this.añoNacimiento <= 1964) {
            generacion = "Generación X";
        } else if (this.añoNacimiento >= 1965 && this.añoNacimiento <= 1980) {
            generacion = "Generación Millennials";
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1996) {
            generacion = "Generación Z";
        } else if (this.añoNacimiento >= 1997 && this.añoNacimiento <= 2012) {
            generacion = "Generación Alpha";
        } else {
            generacion = "No definida";
        }

        return `La persona pertenece a la generación ${generacion}.`;
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return "La persona es mayor de edad.";
        } else {
            return "La persona es menor de edad.";
        }
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de nacimiento: ${this.añoNacimiento}`;
    }

    generaDNI() {
        return Math.floor(Math.random() * 100000000);
    }
}

function generarAñoNacimiento() {
    return Math.floor(Math.random() * (2012 - 1928 + 1)) + 1928;
}

function calcularEdad(añoNacimiento) {
    const añoActual = new Date().getFullYear();
    return añoActual - añoNacimiento;
}

function obtenerDatosPersona() {
    const nombre = prompt("Ingrese el nombre de la persona:");
    const sexo = prompt("Ingrese el sexo de la persona (H para hombre, M para mujer):");
    const peso = parseFloat(prompt("Ingrese el peso de la persona en kg:"));
    const altura = parseFloat(prompt("Ingrese la altura de la persona en metros:"));
    const añoNacimiento = generarAñoNacimiento();
    const edadCalculada = calcularEdad(añoNacimiento);
    
    return new Persona(nombre, edadCalculada, sexo, peso, altura, añoNacimiento);
}

const personas = [];

const cantidadPersonas = parseInt(prompt("¿Cuántas personas desea ingresar?"));

for (let i = 0; i < cantidadPersonas; i++) {
    const persona = obtenerDatosPersona();
    personas.push(persona);
}

console.log("Personas ingresadas:");
personas.forEach((persona, index) => {
    console.log(`Persona ${index + 1}:`);
    console.log(persona.mostrarDatos());
    console.log(persona.mostrarGeneracion());
    console.log(persona.esMayorDeEdad());
    console.log("--------------------");
});

