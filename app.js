const encuestas = [];

function crearEncuesta() {
    const encuesta = [];
    for (var i = 1; i < 9; i++) {
    let enunciado = prompt("Ingresa una pregunta: ");
    let alternativas = prompt("Ingrese las opciones separadas por coma ( , )").split(",");
    let nuevaPregunta = {
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