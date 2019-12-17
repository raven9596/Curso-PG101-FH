function maslargo(arr){
let nombrelargo = "";

for(let i = 0; i < arr.length; i++ ){

    let nombre = arr[i];
    if(nombre.length > nombrelargo.length){
        nombrelargo = nombre;
    }

}

    return nombrelargo;
}

let heroes = ["Deadpool", "Ciclope", "Magneto", "Xavier"];

let heroeLargo = maslargo(heroes);

console.log(heroeLargo);