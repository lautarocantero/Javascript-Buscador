//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la busqueda

const datosBusqueda = {
    marca: "",
    year: "",
    puertas: "",
    color: "",
    transmision: ""
};

//eventos
            
document.addEventListener('DOMContentLoaded', ()=>{
    //mostrar autos
    mostrarAutos();

    //llenar opciones de años
    cargarYear();

})

//eventos para los options

marca.addEventListener('change',e =>{
    
    datosBusqueda.marca = e.target.value;
    
})

year.addEventListener('change',e =>{
    
    datosBusqueda.year = e.target.value;
    
})

minimo.addEventListener('change',e =>{
    
    datosBusqueda.minimo = e.target.value;
    
})

maximo.addEventListener('change',e =>{
    
    datosBusqueda.maximo = e.target.value;
    
})

puertas.addEventListener('change',e =>{
    
    datosBusqueda.puertas = e.target.value;
    
})

transmision.addEventListener('change',e =>{
    
    datosBusqueda.transmision = e.target.value;
    
})

color.addEventListener('change',e =>{
    
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
    
})

    
//funciones

function mostrarAutos(){
    autos.forEach(auto => {
        const autoHTML = document.createElement('P');

        const {marca,modelo,year,precio,puertas,color,transmision} = auto;

        autoHTML.textContent = 
        `
            ${marca} - ${modelo} - año : ${year} - precio: ${precio} -
            ${puertas} puertas - color: ${color} - transmision: ${transmision}
        
        `
        resultado.appendChild(autoHTML);
    });
}

            //cargar year

function cargarYear(){
    
    for(let i = max; i > min; i--){
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}