// dictionary = {
//     'a' : 5,
//     'r' : 0,
//     'lista': [1,2,3]
// }
// dictionary['b'] = 0
// dictionary['b'] += 1

console.log("Hola Mundo!!")

function first_unic_char (input){
  function check_if_equal(char_index, input){
    for(let i = char_index + 1; i < input.length; ++i){
      if(input[char_index] == input[i]){
        return true;
      }
    }
    return false;
  }
  
  for (let i = 0; i < input.length; ++i){
    if (check_if_equal(i, input)){
      return input[i];
    }
  }
  return false;
}
// console.log("Linea a evaluar: " + 'abacddbec');
// console.log("Primer caracter que se repite: " + first_unic_char('abacddbec'));

function bubble_sort(array){
  let orderedQM = true;
  while(orderedQM){
    orderedQM = false;
    for(let i = 0; i + 1 < array.length; ++i){
      if(array[i]>array[i+1]){
        let temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        orderedQM = true;
      }
    }
  }
  return lista;
}

let prueba = [12, 2, 3, 6, 4, 1];
// console.log("Lista antes: " + prueba);
// console.log("Lista despues: " + bubble_sort(prueba));

function reverse_array(array){
  let new_array = []; 
  for(let i = array.length; i > 0 ; --i){
    new_array.push(array[i-1]);
  }
  return new_array;
}

// console.log("Lista antes: " + prueba);
// console.log("Lista despues: " + reverse_array(prueba));


// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3

// Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.

// function cap_first_all(input){
//   let i = 0;

//   do{
//     if(i == 0 || (input[i-1] == " " && input[i] != " ")){
//       console.log(input[i]);
//       input[i] = input[i].toUpperCase();
//       console.log(input[i]);
//     }
//     ++i;
//   }while(i<input.length);

//   return input;
// }

let stringDePrueba = "hola mundo!  adios mundo!";
console.log(stringDePrueba[0]);
stringDePrueba[0] = 4/*stringDePrueba[0].toUpperCase()*/;
console.log(stringDePrueba[0]);
// console.log(stringDePrueba);
// console.log(cap_first_all(stringDePrueba));




