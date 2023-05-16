/* <div class="container">
        <p>1. Modifica el siguiente elemento para mostrar la posición del mouse en el documento:</p>
        <p id="mousePosition">Posición del mouse: </p>
    </div> */

// Como mostrar la posición del mouse en el documento:
// Obtener el elemento con el ID "mousePosition" y guardarlo en la variable mousePosition
let mousePosition = document.getElementById("mousePosition");

// Agregar un evento "mousemove" al documento
document.addEventListener("mousemove", function (event) {
    // Cuando ocurre el evento, se ejecuta esta función anónima
    // Actualizar el contenido del elemento mousePosition con la posición del mouse
    mousePosition.innerHTML = "Posición del mouse: " + event.clientX + "px, " + event.clientY + "px";
});

/* <div class="container">
        <p>2. Al dar click al siguiente botón, obtén el nombre y apellido de las siguientes cajas de texto, y agrega, después del botón, un elemento que tenga el nombre completo.</p>
        <form id="form1">
            First name: <input id="form-fname" type="text" name="fname" ><br>
            Last name: <input id="form-lname" type="text" name="lname" ><br><br>
        <input id="form1-submit" type="submit" value="Submit">
        </form>
</div> */
// Como resolver el comentario anterior:
// Obtener los elementos del formulario y el botón de envío por su ID
let form1 = document.getElementById("form1");
let formFname = document.getElementById("form-fname");
let formLname = document.getElementById("form-lname");
let form1Submit = document.getElementById("form1-submit");

// Agregar un evento "click" al botón de envío del formulario
form1Submit.addEventListener("click", function (event) {
    // Borrar el nombre completo anterior
    let previousFullName = document.querySelector("#form1 > div");
    if (previousFullName) {
        previousFullName.remove();
    }
    // Agregar un nuevo nombre completo
    // Prevenir el comportamiento predeterminado del botón de envío del formulario
    event.preventDefault();
    let fullName = document.createElement("div");
    fullName.innerHTML = formFname.value + " " + formLname.value;
    form1.appendChild(fullName);
});

/* <div class="container">
        <p>3. Agrega el código para agregar una fila, o una columna, a la siguiente tabla al dar click al botón correspondiente.</p>
        <table id="sampleTable">
            <tr>
                <td>Row 1 column 1</td>
                <td>Row 1 column 2</td>
            </tr>
            <tr>
                <td>Row 2 column 1</td>
                <td>Row 2 column 2</td>
            </tr>
        </table><br>
        <input id="btn-insert-r" type="button" value="Insert row">
        <input id="btn-insert-c" type="button" value="Insert column">
</div> */
// Como resolver el comentario anterior:
// Obtener el elemento de la tabla por su ID
let sampleTable = document.getElementById("sampleTable");

// Obtener el botón de inserción de fila por su ID
let btnInsertR = document.getElementById("btn-insert-r");

// Agregar un evento "click" al botón de inserción de fila
btnInsertR.addEventListener("click", function (event) {
    // Crear una nueva fila en la tabla
    let newRow = sampleTable.insertRow();

    // Iterar sobre las celdas de la primera fila existente para determinar la cantidad de columnas
    for (let i = 0; i < sampleTable.rows[0].cells.length; i++) {
        // Crear una nueva celda en la fila
        let newCell = newRow.insertCell(i);
        
        // Establecer el contenido de la nueva celda con el número de fila y columna correspondiente
        newCell.innerHTML = "Row " + sampleTable.rows.length + " column " + (i + 1);
    }
});

// Esta si la hizo copilot...
// Obtener el botón de inserción de columna por su ID
let btnInsertC = document.getElementById("btn-insert-c");

// Agregar un evento "click" al botón de inserción de columna
btnInsertC.addEventListener("click", function (event) {
    // Iterar sobre las filas existentes en la tabla
    for (let i = 0; i < sampleTable.rows.length; i++) {
        // Crear un nuevo elemento de celda (<td>)
        let newCol = document.createElement("td");
        
        // Establecer el contenido del nuevo elemento de celda con el número de fila y columna correspondiente
        newCol.innerHTML = "Row " + (i + 1) + " column " + (sampleTable.rows[i].cells.length + 1);
        
        // Agregar el nuevo elemento de celda a la fila actual
        sampleTable.rows[i].appendChild(newCol);
    }
});

/* <div class="container">
        <p>4. Incluye dos cajas de input, para solicitar al usuario la posición de la fila y columna de la siguiente tabla, y otra para solicitar un texto. Al apretar el botón, actualiza el contenido de esa tabla en la posición que solicitaste, con la cadena de texto que solicitaste.</p>
        <table id="myTable">
            <tr>
                <td>Row1 cell1</td>
                <td>Row1 cell2</td>
                <td>Row1 cell3</td>
            </tr>
            <tr>
                <td>Row2 cell1</td>
                <td>Row2 cell2</td>
                <td>Row2 cell3</td>
            </tr>
            <tr>
                <td>Row3 cell1</td>
                <td>Row3 cell2</td>
                <td>Row3 cell3</td>
            </tr>
            </table><form><br>
            <input id="rowIndex" type="text" placeholder="Row Index">
            <input id="colIndex" type="text" placeholder="Col Index">
            <input id="newValue" type="text" placeholder="New Value">
            <input id="btn-change" type="button" value="Change content">
</div> */

// Como resolver el comentario anterior:
// Obtener los elementos por sus ID
let rowIndex = document.getElementById("rowIndex");
let colIndex = document.getElementById("colIndex");
let newValue = document.getElementById("newValue");
let btnChange = document.getElementById("btn-change");
let myTable = document.getElementById("myTable");

// Agregar un evento "click" al botón de cambio
btnChange.addEventListener("click", function (event) {
    // Obtener la fila y la celda específicas en base a los valores ingresados en los campos de índice
    let row = myTable.rows[rowIndex.value - 1];
    let cell = row.cells[colIndex.value - 1];
    
    // Establecer el nuevo valor en la celda seleccionada
    cell.innerHTML = newValue.value;
});


/* <div class="container">
        <p>5. Agrega el código para quitar o agregar elementos a la lista de opciones. Los colores pueden ser aleatorios.</p>
        <form>
            <select id="colorSelect">
                <option>Red</option>
                <option>Green</option>
                <option>White</option>
                <option>Black</option>
            </select>
            <input id="btn-add-color" type="button" value="Add color">
            <input id="btn-rmv-color" type="button" value="Remove color">
        </form>
</div> */

// Como resolver el comentario anterior:
// Obtener los elementos por sus ID
let colorSelect = document.getElementById("colorSelect");
let btnAddColor = document.getElementById("btn-add-color");
let btnRmvColor = document.getElementById("btn-rmv-color");

// Agregar un evento "click" al botón de agregar color
btnAddColor.addEventListener("click", function (event) {
    // Crear un nuevo elemento de opción (<option>)
    let newColor = document.createElement("option");
    
    // Establecer el texto del nuevo elemento de opción
    newColor.innerHTML = "Random Color";
    
    // Generar un color aleatorio y establecerlo como el color de fondo del nuevo elemento de opción
    newColor.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    // Agregar el nuevo elemento de opción al elemento select (colorSelect)
    colorSelect.appendChild(newColor);
});

// Agregar un evento "click" al botón de eliminar color
btnRmvColor.addEventListener("click", function (event) {
    // Eliminar el último elemento de opción del elemento select (colorSelect)
    colorSelect.removeChild(colorSelect.lastElementChild);
});

/* <div class="container">
        <p>6. Al poner el mouse encima de la siguiente imagen, genera dos números aleatorios entre 300 y 600 para el width y height de una imagen. Reemplaza la imagen de placeholder por otra similar con el tamaño random que generaste. El evento solo se dispara cuando el mouse entra en la imagen.</p>
        <img id="imagenGato" src="http://placekitten.com/200/300">
    </div>

    <div class="container">
        <h2>Conclusiones</h2>

        <h4>Experiencia general</h4>
        <h4>¿Cuándo y para qué usarías ChatGPT y cuándo Copilot?</h4>
        <h4>Ventajas de usar AI para programar</h4>
        <h4>Desventajas de usar AI para programar</h4>
</div> */

// Como resolver el comentario anterior:
// Obtener el elemento de imagen por su ID
let imagenGato = document.getElementById("imagenGato");

// Agregar un evento "mouseover" a la imagen
imagenGato.addEventListener("mouseover", function (event) {
    // Cuando ocurre el evento, se ejecuta esta función anónima
    // Generar una URL aleatoria de la imagen del gato usando la API PlaceKitten
    // La URL se construye concatenando dimensiones aleatorias entre 300 y 599 al final de la URL base
    imagenGato.src = "https://placekitten.com/" + (Math.floor(Math.random() * 300) + 300) + "/" + (Math.floor(Math.random() * 300) + 300);
});