const Deva = {
    nombre: "Deva",
    tipo: "Gato",
    raza: "Khao manee",
    hablar: "Miau...",
    edad: 5,
    hambre: 10,

    comer: function(){
        if (this.hambre <= 10) {
            console.log(this.nombre + " - Hambre = " + parseInt(this.hambre) + 1);
        } else {
            console.log(this.nombre + " - Satisfech@");
        }
    },

    decir: function(){
        console.log(this.nombre + " - Dice: " + this.hablar);
    },

    datos: function(){
        console.log("Nombre: " + this.nombre);
        console.log("-- Tipo: " + this.tipo);
        console.log("-- Raza: " + this.raza);
        console.log("-- Hambre: " + this.hablar);
    }
}

const Navia = {
    nombre: "Navia",
    tipo: "Gato",
    raza: "Mestizo",
    hablar: "Miauuuuuuu",
    edad: 5,
    hambre: 8,

    comer: function(){
        if (this.hambre <= 10) {
            console.log(this.nombre + " - Hambre = " + parseInt(this.hambre) + 1);
        } else {
            console.log(this.nombre + " - Satisfech@");
        }
    },

    decir: function(){
        console.log("Miauuuuuuu")
    },

    datos: function(){
        console.log("Nombre: " + this.nombre);
        console.log("-- Tipo: " + this.tipo);
        console.log("-- Raza: " + this.raza);
        console.log("-- Hambre: " + this.hablar);
    }
}

const Baalito = {
    nombre: "Baalito",
    tipo: "Perro",
    raza: "Mestizo",
    hablar: "Guau!!!!",
    edad: 15,
    hambre: 5,

    comer: function(){
        if (this.hambre <= 10) {
            console.log(this.nombre + " - Hambre = " + parseInt(this.hambre) + 1);
        } else {
            console.log(this.nombre + " - Satisfech@");
        }
    },

    decir: function(){
        console.log("")
    },

    datos: function(){
        console.log("Nombre: " + this.nombre);
        console.log("-- Tipo: " + this.tipo);
        console.log("-- Raza: " + this.raza);
        console.log("-- Hambre: " + this.hablar);
    }
}

Navia.comer();
Deva.decir();
Baalito.datos();