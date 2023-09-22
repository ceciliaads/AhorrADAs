// balance y nueva operacion ocultar-desocultar
const seeOperation =document.getElementById("see-operation");

const balance =document.getElementById("balance");
const newOperation =document.getElementById("see-newoperation");

const operation = () => { 
    balance.classList.remove("is-hidden");
    newOperation.classList.add("is-hidden");
} 

const hidden = () => { 
   newOperation.classList.remove("is-hidden");
   balance.classList.add("is-hidden");
} 

seeOperation.addEventListener("click" , () => hidden());

const clickBalance =document.getElementById("see-balance");

const click = () => { 
    newOperation.classList.add("is-hidden")
    balance.classList.remove("is-hidden");
}

clickBalance.addEventListener("click" , () => click());

//ocultar filtros 

const yesFiltros =document.getElementById("see-filtros"); 
const boxFiltros =document.getElementById("filtros");
const noFiltros =document.getElementById("toggle-filtros");

const mostrarFiltros = () => { 
    boxFiltros.classList.remove("is-hidden");
    yesFiltros.classList.add("is-hidden");
    noFiltros.classList.remove("is-hidden");
}

const ocultarFiltros = () => { 
    yesFiltros.classList.remove("is-hidden");
    noFiltros.classList.add("is-hidden");
    boxFiltros.classList.add("is-hidden");
}

noFiltros.addEventListener("click" , () => ocultarFiltros());
yesFiltros.addEventListener("click" , () => mostrarFiltros());

//Nueva operacion 

const listaDeOperac = [];

const addName = () => { 
let newOp = document.getElementById("description-input").value;
listaDeOperac.push(newOp);
let li = document.createTextNode('${newOp}');
let liItem = document.createElement('li');
liItem.appendChild(li);

console.log(listaDeOperac);
}

const agregar= document.getElementById("add-operation");

agregar.addEventListener("click" , () => addName());