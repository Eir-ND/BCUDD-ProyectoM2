# PROYECTO 2: Sistema de votación en Javascript.

## Planteamiento

Este proyecto se resuelve mediante la creación de un script, el cual se enfoca en la problemática de creación de un sistema de votación.
Se realiza la solución con PF y el script debe ser ejecutado desde la consola con las funciones `crearEncuesta()`, `votarEncuesta()` y `mostrarResultados()` para así lograr un buen flujo en la ejecución. el ingreso de los datos se obtiene mediante `prompt()`.

La estructura de la variable `respuestasUsuario` en la cual se almacenan los datos es la siguiente:

```
// Cada encuesta creada a su vez crea un array en la variable respuestasUsuario.
respuestasUsuario = [[encuesta1], [encuesta2], [encuesta3], ...[encuestan]]

// Cada una de estas array contiene dentro de si un array diferente por cada vez que un usuario vota en la encuesta.
[encuesta1] = [[votacion1], [votacion2], [votacion3], ...[votacionn]]

// Las respuestas se almacenan como objetos por cada pregunta de la encuesta realizada, estos en un array.
[votacion1] = [{respuesta1}, {respuesta2}, {respuesta3}, ...{respuestan}]

// Cada respuesta se almacena como un objeto de la siguiente estructura

const respuesta = {
  opcion1: 1,  // Suponiendo que el usuario escogió la opción 1 de la pregunta
  opcion2: 0,
  opcion3: 0,
};
```

Se utiliza el archivo `app.js` vinculado al archivo `index.html` para 

## Requerimientos del proyecto

 - Permitir a los usuarios crear encuestas con opciones de respuesta.
 - Permitir a los usuarios votar en las encuestas.
 - Mostrar los resultados de las encuestas.
 - Almacenar los datos de las encuestas y los votos en una variable.
 - Almacenar los datos de las encuestas y los votos en una estructura de datos.
 - Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.
 
