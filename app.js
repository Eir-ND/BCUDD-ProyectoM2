const encuestas = [];
const respuestasUsuario = [];

function crearEncuesta() {
    const encuesta = [];
    const temaEncuesta = prompt("Ingresa el tema central de la encuesta: ");
    encuesta.push(temaEncuesta);
    for (let i = 1; i < 9; i++) {
        const enunciado = prompt("Ingresa una pregunta: ");
        const alternativas = prompt("Ingrese las opciones separadas por coma ( , )").split(",");
        const nuevaPregunta = {
        pregunta: enunciado,
        opciones: alternativas,
        };

        encuesta.push(nuevaPregunta);
    }

    encuestas.push(encuesta);
    respuestasUsuario.push([]);
    console.log("Se ha creado la encuesta satisfactoriamente.")
    alert("Se ha creado la encuesta satisfactoriamente.")
}


function mostrarEncuestas() {
    let opcionesEncuestas = '';
    for (let i = 0; i < encuestas.length; i++) {
        opcionesEncuestas += `\n ${i + 1} - ${encuestas[i][0]} \n`;
        }

    const encuestaAVotar = parseInt(prompt(`
    Lista de encuestas disponibles:
    ${opcionesEncuestas}
    Seleccione el número de la encuesta:
    `));
        
    if (encuestaAVotar >= 1 && encuestaAVotar <= encuestas.length) {
        alert(`Ha seleccionado la encuesta de tema "${encuestas[encuestaAVotar - 1][0]}".`);
        } else {
        alert('Selección inválida.');
        }
    return encuestaAVotar - 1;
}

function votarEncuesta() {
    const index = mostrarEncuestas();
    const respuestas =[];
    let encuesta = encuestas[index];

    encuesta.slice(1).forEach((pregunta) => {
        const opcionEscogida = parseInt(prompt(`
        Selecciona una opción:
        ${pregunta.pregunta} 
        1. ${pregunta.opciones[0]}
        2. ${pregunta.opciones[1]}
        3. ${pregunta.opciones[2]}
        `));
        const respuesta = {
            opcion1: 0,
            opcion2: 0,
            opcion3: 0,
        };

        if (opcionEscogida >= 1 && opcionEscogida <= 3) {
            switch (opcionEscogida) {
                case 1:
                    respuesta.opcion1 = 1;
                    break
                case 2:
                    respuesta.opcion2 = 1;
                    break
                case 3:
                    respuesta.opcion3 = 1;
                    break
            }
            respuestas.push(respuesta);
        } else {
            alert('Respuesta inválida, se omitirá esta pregunta.');
            respuestas.push(respuesta);
        }
    });

    respuestasUsuario[index].push(respuestas);
    console.log(respuestasUsuario);
} 

function mostrarResultados() {
    const index = mostrarEncuestas();

    for (let i = 1; i < encuestas[index].length; i++) {
        const pregunta = encuestas[index][i];
        const opciones = pregunta.opciones;
        const totalRespuestas = respuestasUsuario[index].length;
        const sumaRespuestas = {
            opcion1: 0,
            opcion2: 0,
            opcion3: 0
        };

        respuestasUsuario[index].forEach(respuestas => {
            const respuestaActual = respuestas[i - 1];
            sumaRespuestas.opcion1 += respuestaActual.opcion1;
            sumaRespuestas.opcion2 += respuestaActual.opcion2;
            sumaRespuestas.opcion3 += respuestaActual.opcion3;
        });

        console.log(`
        Pregunta N° ${i}: ${pregunta.pregunta}: 
        Respuestas totales:
        1. ${opciones[0]}: ${sumaRespuestas.opcion1}.
        2. ${opciones[1]}: ${sumaRespuestas.opcion2}.
        3. ${opciones[2]}: ${sumaRespuestas.opcion3}.
        
        Total de respuestas: ${totalRespuestas}
        `);
    }
}

// Menú de interfaz
// const opcion = parseInt(prompt(`
//     Seleccionar una opción:
//     1. Crear encuesta
//     2. Votar encuesta
//     3. Resultados
// `));
// switch (opcion) {
//     case 1:
//         crearEncuesta();
//         break
//     case 2:
//         votarEncuesta();
//         break
//     case 3:
//         mostrarResultados();
//         break
//     default:
//         alert("Opción inválida");
// }