# holamer.github.io
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página de GitHub</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1 id="saludo">Hola amor</h1>
        <p id="pregunta">¿Me amas?</p>
        <div id="respuestas">
            <button onclick="responder('si')">Sí</button>
            <button onclick="responder('no')">No</button>
 
function responder(respuesta) {
    var respuestaAmor = document.getElementById('respuestaAmor');

    if (respuesta === 'si') {
        respuestaAmor.innerText = 'Yo mucho más ❤️';
    } else {
        respuestaAmor.innerText = ':(';
    }
}
