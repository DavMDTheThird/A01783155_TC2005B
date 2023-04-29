// David Medina Domínguez
// Tarea de Javascript

// console.log("Hola Mundo!!");

// ------------ Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec' ------------

function first_unic_char (input){
  function check_if_equal(char_index, input){
    for(let i = char_index + 1; i < input.length; ++i){ //.length - O(1) por alguna razon...
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

console.log("   Pruebas Ejercicio #1");
const prueba_str = 'abacddbec';
console.log("Linea a evaluar: " + prueba_str);
console.log("Primer caracter que se repite: " + first_unic_char(prueba_str));

// ------------ Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números. ------------

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
  return array;
}

console.log("   Pruebas Ejercicio #2");
let prueba_int_arr = [12, 2, 3, 6, 4, 1];
console.log("Lista antes: " + prueba_int_arr);
console.log("Lista despues: " + bubble_sort(prueba_int_arr));

// ------------ Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'. ------------

function reverse_array(array){
  let new_array = []; 
  for(let i = array.length; i > 0 ; --i){
    new_array.push(array[i-1]); //push() - O(1)
  }
  return new_array;
}

console.log("   Pruebas Ejercicio #3");
console.log("Lista antes: " + prueba_int_arr);
console.log("Lista despues: " + reverse_array(prueba_int_arr));


// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3
// AQUI FALTA LA SEGUNDA FUNCION DE LA 3

// ------------ Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula. ------------

// let i = 0;  // Intento #1
// do{
//   if(i == 0 || (input[i-1] == " " && input[i] != " ")){
//     console.log(input[i]);
//     input[i] = input[i].toUpperCase(); //----Esto al parecer no se puede SADGE----
//     console.log(input[i]);
//   }
//   ++i;
// }while(i<input.length);

// Intento #2
function cap_first_all(input){
  function do_cap_first_all(index, input){
    if (index === 0){
      return (input[index].toUpperCase() + input.slice(1)); //Pensaria que hubiera un error si solo entregan solo un caracter, pero no.
    }
    else{
      return (input.slice(0, index) + input[index].toUpperCase() + input.slice(index + 1));  /*.slice() - O(n) .toUpperCase() - O(n)*/
    }
  }
  // No funciona si se meten strings con elementos antes de la palabra, como es: '¡' o '¿'
  // Pero funciona con multiples espacios.
  if(input[0] != input[0].toUpperCase()){ //Solo el primer elemento
    input = do_cap_first_all(0 , input);
  }
  for(let i = 0; i < input.length; ++i){ //Todos los elmentos que sobran
    if(input[i-1] == " " && input[i] != input[i].toUpperCase()){
      input = do_cap_first_all(i , input);
    }
  }
  return input;
}

console.log("   Pruebas Ejercicio #4");
let stringDePrueba = "hola mundo! adios mundo!";
console.log(stringDePrueba);
console.log(cap_first_all(stringDePrueba));

// ------------ Escribe una función que calcule el máximo común divisor de dos números. ------------

function max_comm_div(num1, num2){
  function find_divisors(input){
    let array_divisors = [];
    for(let i = 1; i <= input; ++i){ //Por si llegan a ser primos (<=)
      if(input % i === 0){
        array_divisors.push(i);
      }
    }
    return array_divisors.reverse();
  }

  num1_divisors =  find_divisors(num1);
  num2_divisors =  find_divisors(num2);

  if(num1_divisors.length < num2_divisors.length){ //Hacer las iteraciones menos posibles I think
    for(let i = 0; i < num1_divisors.length; ++i){
      if(num2_divisors.includes(num1_divisors[i])) //.includes() - O(n)
      return num1_divisors[i];
    }
  }
  else{
    for(let i = 0; i < num2_divisors.length; ++i){
      if(num1_divisors.includes(num2_divisors[i])){
        return num2_divisors[i];
      }
    }
  }
}

console.log("   Pruebas Ejercicio #5");
console.log("Maximo Comun Divisor: " + max_comm_div(7,14));
console.log("Maximo Comun Divisor: " + max_comm_div(128,11));
console.log("Maximo Comun Divisor: " + max_comm_div(18,99));

// ------------ Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'. ------------

function toHackerSpeak(input){
  function get_Lib_HackerSpeak(char){ // Returns a list with the appropiate letter library change
    const Lib_HackerSpeak = {
      "a":['A', 'a', '4', '/ \\', '@', '/-\\','^','(L','Д'],
      "b":['B', 'b', 'I3', '8', '13', '|3', 'ß', '!3', '(3', '/3', ')3', '|-]', 'j3'],
      "c":['C', 'c','[', '¢', '<', '(', '©'],
      "d":['D', 'd', ')', '|)', '(|', '[)', 'I>', '|>', 'T)', 'I7', 'cl', '|}', '|]'],
      "e":['E', 'e', '3', '&', '£', '€', '[-', '|=-'],
      "f":['F', 'f', '|=', 'ƒ', '|#', 'ph', '/=', 'v'],
      "g":['G', 'g', '6', '&', '(_+', '9', 'C-', 'gee', '(?,', '[,', '{,', '<-', '(.'],
      "h":['H', 'h', '#', '/-/', '\\-\\', '[-]',']-[',')-(','(-)',':-:','|~|','|-|',']~[','}{','!-!','1-1','\\-/','I+I'],
      "i":['I', 'i', '1', '|', '][', ' !', 'eye', '3y3'],
      "j":['J', 'j',',_|', '_|', '._|', '._]', '_]', ',_]', ']'],
      "k":['K', 'k', '>|', '|<', '1<', '|c', '|(7<'],
      "l":['L', 'l', '1', '7', '|_', '|'],
      "m":['M', 'm', '/\\/\\', '/V\\', '[V]', '|\\/|', '^^', '<\\/>', '{V}', '(v)', '(V)', '|\\|\\', ']\\/[', 'nn', '11'],
      "n":['N', 'n', '^/', '|\\|', '/\\/', '[\\]', '<\\>', '{\\}', '/V', '^', 'ท', 'И'],
      "o":['O', 'o', '0', '()', 'oh', '[]', '<>','Ø'],
      "p":['P', 'p', '|*', '|o', '|º', '|^', '|>', '|"', '9', '[]D', '|°', '|7'],
      "q":['Q', 'q', '(_,)', '()_', '2', '0_', '<|', '&', '9', '¶', '⁋', '℗'],
      "r":['R', 'r', 'I2', '9', '|`', '|~', '|?', '/2', '|^', 'lz', '7', '2', '12', '®', '[z', 'Я', '.-', '|2', '|-', '3'],
      "s":['S', 's', '5', '$', 'z', '§', 'ehs', 'es', '2'],
      "t":['T', 't', '7', '+', '-|-', '][', '†', '«|»', '~|~'],
      "u":['U', 'u', '(_)', '|_|', 'v', 'L|', 'บ'],
      "v":['V', 'v', '\\/', '|/', '\\|'],
      "w":['W', 'w', '\\/\\/', 'vv', '\\N', '\'//', '\\\\\\\'', '\\^/', '\\/\\/', '(n)', '\\V/', '\\X/', '\\|/', '\\_|_/', '\\_:_/', 'uu', '2u', '\\//\\//', 'พ', '₩'],
      "x":['X', 'x', '><', '}{', 'ecks', 'x', '?', '}{', ')(', ']['],
      "y":['Y', 'y', 'j', '`/', '\\|/', '¥', '\\//'],
      "z":['Z', 'z', '2', '7_', '-/_', ' %', '>_', 's', '~/_', '-\\_', '-|_'],
      " ":[' ']
    }

    if(char in Lib_HackerSpeak){
      return Lib_HackerSpeak[char];
    }
    else{
      return [char];
    }
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  // Math.floor() y Math.random() -> O(1)
  }
  function do_toHackerSpeak(index, input){
    appropiate_list = get_Lib_HackerSpeak(input[index]);
    random_HackerSpeak = appropiate_list[getRandomInt(0, appropiate_list.length)];

    if (index === 0){
      // console.log(input[index] + " -->" + random_HackerSpeak);
      return (random_HackerSpeak + input.slice(1));
    }
    else{
      // console.log(input[index] + " -->" + random_HackerSpeak);
      return (input.slice(0, index) + random_HackerSpeak + input.slice(index + 1)); 
    }
  }

  for(let i = 0; i < input.length; ++i){
    input = do_toHackerSpeak(i, input);
  }

  return input;
}

console.log("   Pruebas Ejercicio #6");
console.log("String antes: " + stringDePrueba);
console.log("String despues: " + toHackerSpeak(stringDePrueba));

// ------------ Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12] ------------

function getFactores(num){
  let array_factors = [];
  for(let i = 1; i <= num; ++i){ //Por si llegan a ser primos (<=)
    if(num % i === 0){
      array_factors.push(i);
    }
  }
  return array_factors;
}

console.log("   Pruebas Ejercicio #7");
console.log(getFactores(12));

// ------------ Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0] ------------

function noDuplicates(input){
  let return_input = new Set();

  for(let i = 0; i < input.length; ++i){
    return_input.add(input[i]);
  }
  return return_input;
}
console.log("   Pruebas Ejercicio #8");
let noDuplicados = noDuplicates([1, 0, 1, 1, 0, 0, 6]);
console.log("Quitar duplicados de [1, 0, 1, 1, 0, 0]: " + noDuplicados);
console.log(noDuplicados);

// ------------ Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta. ------------

function getSmallestSTR(lista_STR){
  let index_least = 0;
  for(let i = 0; i < lista_STR.length; ++i){
    if(lista_STR[index_least].length > lista_STR[i].length){
      index_least = i;
    }
  }
  return lista_STR[index_least].length;
}

console.log("   Pruebas Ejercicio #9");
let pr = ["Hola como estas", "Bien y tu?", stringDePrueba, "Que me dijiste?", "Cosas de ITC", "Hippopotomonstrosesquipedaliophobia"];
console.log(getSmallestSTR(pr));

// ------------ Escribe una función que revise si una cadena de texto es un palíndromo o no. ------------

function isPalindromeQM(input){
  input = input.replace(/\s/g, ''); // /\s/g --> Es la forma de escribir espacios o tabs
  input = input.replace(/\,/g, ''); // Quitar las comas
  input = input.toLowerCase();

  let reverse_input = input.split(""); 
  reverse_input = reverse_input.reverse(); 
  reverse_input = reverse_input.join(''); 


  if(input == reverse_input){
    return true;
  }
  else{
    return false;
  }
}

console.log("   Pruebas Ejercicio #10");
let prueba_str_2 = "A man, a plan, a canal, Panama";
console.log(prueba_str_2 +" --> "+isPalindromeQM(prueba_str_2));
let prueba_str_3 = "Anita lava la tina";
console.log(prueba_str_3 +" --> "+isPalindromeQM(prueba_str_3));
let prueba_str_4 = "Aibohphobia";
console.log(prueba_str_4 +" --> "+isPalindromeQM(prueba_str_4));

// ------------ Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético. ------------

function orderARR_STR(arr_STR){
  arr_STR = arr_STR.map(function (STR){
    STR = STR.toLowerCase();
    STR = STR.replace(/\,/g, '');
    STR = STR.split(" ");
    STR = STR.sort();
    STR = STR.join(" ");
    return STR;
  });
  return arr_STR;
}

console.log("   Pruebas Ejercicio #11");
let prueba_orderARR_STR = [prueba_str_2, prueba_str_3, prueba_str_4];
console.log(orderARR_STR(prueba_orderARR_STR));

// ------------ Escribe una función que tome una lista de números y devuelva la mediana y la moda. ------------

function get_Median_Mode(arr_NUMS){
  function get_Median(arr_NUMS){
    arr_NUMS = arr_NUMS.sort();
    if(arr_NUMS.length % 2 === 0){
      return (arr_NUMS[arr_NUMS.length/2] + arr_NUMS[arr_NUMS.length/2 - 1])/2;
    }
    else{
      return arr_NUMS[Math.floor(arr_NUMS.length/2)];
    }
  }

  function get_Mode(arr_NUMS){
    let modeDic = {};
    let len = 0;
    for(let i = 0; i < arr_NUMS.length; ++i){ //Esto ya esta bien
      if(arr_NUMS[i] in modeDic){
        modeDic[arr_NUMS[i]] += 1;
      }
      else{
        modeDic[arr_NUMS[i]] = 1;
        len += 1;
      }
    }

    let Mode = [];
    let rep = 1;
    let value_key;

    for(let num_key in modeDic){
      value_key = modeDic[num_key];      
      if(value_key == rep){
        Mode.push(num_key);
      }
      else if(value_key > rep){
        Mode = [num_key];
        ++rep;
      }
    }
    if(Mode.length === len){
      return false
    }

    return Mode;
  }

  return [get_Median(arr_NUMS), get_Mode(arr_NUMS)];
}

console.log("   Pruebas Ejercicio #12");
const pruebaMedianMode1 = [17, 65, 23, 20, 10, 70, 30];
const pruebaMedianMode2 = [1 ,2, 3, 4, 6, 8 ,10, 10, 1, 7];
const pruebaMedianMode3 = [2 ,1, 5, 4, 9, 8, 10, 1, 7];
const pruebaMedianMode4 = [5,5,5,2,2,3,3,7,7,7,7,10];
console.log(get_Median_Mode(pruebaMedianMode1));
console.log(get_Median_Mode(pruebaMedianMode2));
console.log(get_Median_Mode(pruebaMedianMode3));
console.log(get_Median_Mode(pruebaMedianMode4));


// ------------ Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente. ------------

function mostFrequentSTR(ARR_STR){
  let dict = {};
  let mostSTR = "";
  let Count = 0;
  
  for (let i = 0; i < ARR_STR.length; ++i) {
    let STR = ARR_STR[i];
    if (!dict[STR]) {
      dict[STR] = 1;
    }
    else{
      dict[STR]++;
    }
    if(dict[STR] > Count) {
      Count = dict[STR];
      mostSTR = STR;
    }
  }
  
  return mostSTR;
}

console.log("   Pruebas Ejercicio #13");
let prueba_mostFrequent1 = ['que','hola','hola','que','que','adios', 'hola', 'hola'];
console.log(mostFrequentSTR(prueba_mostFrequent1));


// ------------ Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario. ------------

function isPowerOfTwo(num){
  if (num < 1){
    return false;
  }
  if (num === 1){
    return true;
  }
  if (num % 2 !== 0){
    return false;
  }

  return isPowerOfTwo(num / 2);
}

console.log("   Pruebas Ejercicio #14");
console.log("1650 es una potencia de dos? --> " + isPowerOfTwo(1650));
console.log("60 es una potencia de dos? --> " + isPowerOfTwo(60));
console.log("1024 es una potencia de dos? --> " + isPowerOfTwo(1024));
console.log("2048 es una potencia de dos? --> " + isPowerOfTwo(2048));


// ------------ Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente. ------------

function DESC_ARR(ARR){
  ARR = ARR.sort(function(a, b){
    return b - a;
  });
  return ARR;
}

console.log("   Pruebas Ejercicio #15");
let ARR_prueba = [1, 6, 9, 8, 3, 2, 5, 7, 0, 10];
console.log("Lista antes: " + ARR_prueba);
console.log("Lista despues: " + DESC_ARR(ARR_prueba));