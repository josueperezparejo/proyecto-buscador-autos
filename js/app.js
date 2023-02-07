// Variables & Selectores
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const btnReset = document.querySelector('#btn-reset');

// crea los años
const years = document.createElement('option');
const max = new Date().getFullYear();
const min = max - 10;

for (let i = max; i > min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

marca.addEventListener('input', (event) => {
    datosBusqueda.marca = event.target.value;
    filtrarAuto();
});

year.addEventListener('input', (event) => {
    datosBusqueda.year = Number(event.target.value);
    filtrarAuto();
});

minimo.addEventListener('input', (event) => {
    datosBusqueda.minimo = Number(event.target.value);
    filtrarAuto();
});

maximo.addEventListener('input', (event) => {
    datosBusqueda.maximo = Number(event.target.value);
    filtrarAuto();
});

puertas.addEventListener('input', (event) => {
    datosBusqueda.puertas = Number(event.target.value);
    filtrarAuto();
});

transmision.addEventListener('input', (event) => {
    datosBusqueda.transmision = event.target.value;
    filtrarAuto();
});

color.addEventListener('input', (event) => {
    datosBusqueda.color = event.target.value;
    filtrarAuto();
});

btnReset.addEventListener('click', (event) => {
    event.preventDefault();

    // Inputs Formulario
    marca.value = '';
    year.value = '';
    minimo.value = '';
    maximo.value = '';
    puertas.value = '';
    transmision.value = '';
    color.value = ''

    // Objeto Datos de Busquedad
    datosBusqueda.marca = '';
    datosBusqueda.year = '';
    datosBusqueda.minimo = '';
    datosBusqueda.maximo = '';
    datosBusqueda.puertas = '';
    datosBusqueda.transmision = '';
    datosBusqueda.color = '';

    filtrarAuto();
});

// Funciones
function limpiarHTML() {
    const contenedor = document.querySelector('#resultado');

    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarAutos(autos) {
    limpiarHTML();

    const contenedor = document.querySelector('#resultado');

    autos.forEach((auto) => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    })
}

function noResultado() {
    limpiarHTML();
    
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto) {
    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }
    return auto;
}