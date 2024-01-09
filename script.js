function responder(respuesta) {
    var respuestaAmor = document.getElementById('respuestaAmor');

    if (respuesta === 'si') {
        respuestaAmor.innerText = 'Yo mucho más ❤️';
    } else {
        respuestaAmor.innerText = ':(';
    }
}
