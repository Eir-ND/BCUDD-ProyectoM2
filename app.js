const encuestas = [];

function crearEncuesta() {
    const encuesta = [];
    const temaEncuesta = prompt("Ingresa el tema central de la encuesta: ");
    encuesta.push(temaEncuesta);
    for (var i = 1; i < 9; i++) {
    const enunciado = prompt("Ingresa una pregunta: ");
    const alternativas = prompt("Ingrese las opciones separadas por coma ( , )").split(",");
    const nuevaPregunta = {
        pregunta: enunciado,
        opciones: alternativas,
    }
    encuesta.push(nuevaPregunta);
    }
    // return nuevaPregunta;
    encuestas.push(encuesta);
    console.log("Se ha creado la encuesta satisfactoriamente.")
    alert("Se ha creado la encuesta satisfactoriamente.")
}


function mostrarEncuestas() {
    let opcionesEncuestas = '';
    for (let i = 0; i < encuestas.length; i++) {
        opcionesEncuestas += `\n ${i + 1} - ${encuestas[i][0]} \n`; //${encuestas[i]};
    }

    const encuestaAVotar = parseInt(prompt(`
    Lista de encuestas disponibles:
    ${opcionesEncuestas}
    Seleccione el número de la encuesta que desea votar:
    `));
        
    if (encuestaAVotar >= 1 && encuestaAVotar <= encuestas.length) {
        alert(`Ha seleccionado la encuesta "${encuestas[encuestaAVotar - 1][0]}".`);
    } else {
        alert('Selección inválida.');
    }
}

// function votarEncuesta() {
//     mostrarEncuestas();

// }

// encuestas.forEach((encuesta,indice) => {
//     prompt(`Encuesta N° ${indice + 1}: ${encuesta[0]}`)
// });


// Menú de interfaz
const opcion = parseInt(prompt(`
    Seleccionar una opción:
    1. Crear encuesta
`));
switch (opcion) {
    case 1:
        crearEncuesta();
        break
    default:
        alert("Opción inválida");
}