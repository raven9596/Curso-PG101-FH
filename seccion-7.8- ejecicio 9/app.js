function filtrarPorLetra(arr, letra){

    let nuevoArr =[];

    for(let i = 0; i < arr.length; i++){
        let nombre = arr[i];

        if(nombre[0] === letra){
            nuevoArr.push(nombre);
        }
    }

    return nuevoArr;
}

let heroes = ["Doom", "Dr. Strange", "Hulk", "She Hulk", "Spiderman", "Capitan Marvel"];

let heroesCon = filtrarPorLetra(heroes, "D");

console.log(heroesCon);