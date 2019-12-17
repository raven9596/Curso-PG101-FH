class Carro {

    constructor(marca, tipo, puertas){

        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;

        this.creadoEn = "hoy";
        this.encendido = false;
        this.gasolina = 100;

    }

    encenderCarro(){
        if(this.encendido){
            console.error("El carro ya esta encendido... se daño el motor");
        }
        else{
            
            this.encendido = true
            console.log("El carro esta encendido");
        }

        return this;
    }

    realizarViaje(consumo){

        if(!this.encendido) return console.log("Carro apagado");
        if(consumo > this.gasolina) return console.log("No puede realizar el viaje: Gasolina " + this.gasolina + "%");
       
            this.gasolina = this.gasolina - consumo;
            return "le queda " + this.gasolina + "%";
       
    }

} // fin clase

let carro = new Carro("Mazda", "Sedan", 2);

console.log(carro);