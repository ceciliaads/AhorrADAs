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


