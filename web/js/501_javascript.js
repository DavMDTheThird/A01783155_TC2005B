// Let y const para crear variables

dictionary = {
    'a' : 5,
    'r' : 0,
    'lista': [1,2,3]
}
dictionary['b'] = 0
dictionary['b'] += 1


console.log("Hola Mundo!!")

function first_char_unico(input){
    for(let i = 0; i < input.lenght; i++){
        // charAt(i)
        cont += 1;
    }
    return cont;
}

function first_char_unico2(cadena) {
    for (let i = 0; i < cadena.length; i++) {
      let caracterActual = cadena.charAt(i);
      if (cadena.indexOf(caracterActual) === i && cadena.indexOf(caracterActual, i + 1) === -1) {
        return console.log(caracterActual);
      }
    }
  }
  
  // Prueba la función
let strg_prueba = 'abacddbec';
let primerCaracter = primerCaracterUnico(strg_prueba);
// console.log(primerCaracter);


let preba1 = first_char_unico(strg_prueba);
console.log(preba1);

