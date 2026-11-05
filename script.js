

function lanzarVentanaSatelite() {

    const lado = Math.floor((screen.width - 400) / 2);
    const arriba = Math.floor((screen.height - 300) / 2);

    let ventana = window.open(
        'satelite.html',
        'miVentana',
        `width=${400},height=${300},top=${arriba},left=${lado}`
    );
}
