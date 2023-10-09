const traerDatos = (key) => { 
    return JSON.parse(localStorage.getItem(`${key}`));
}; 

const subirDatos = (key, datos) => { 
     localStorage.setItem(`${key}`, JSON.stringify(datos));
};

const randomId = () => self.crypto.randomUUID();
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// balance y nueva operacion ocultar-desocultar
//const seeOperation =document.getElementById("see-operation");

//const balance =document.getElementById("balance");
//const newOperation =document.getElementById("see-newoperation");

const operacion = () => { 
    $("#balance").classList.remove("is-hidden");
    $("#see-newoperation").classList.add("is-hidden");
} 

const hidden = () => { 
    $("#see-newoperation").classList.remove("is-hidden");
    $("#balance").classList.add("is-hidden");
} 

$("#see-operation").addEventListener("click" , () => hidden());

//const clickBalance =document.getElementById("see-balance");

const click = () => { 
    $("#see-newoperation").classList.add("is-hidden")
    $("#balance").classList.remove("is-hidden");
}

$("#see-balance").addEventListener("click" , () => click());

//ocultar filtros 

//const yesFiltros =document.getElementById("see-filtros"); 
//const boxFiltros =document.getElementById("filtros");
//const noFiltros =document.getElementById("toggle-filtros");

const mostrarFiltros = () => { 
    $("#filtros").classList.remove("is-hidden");
    $("#see-filtros").classList.add("is-hidden");
    $("#toggle-filtros").classList.remove("is-hidden");
}

const ocultarFiltros = () => { 
    $("#see-filtros").classList.remove("is-hidden");
    $("#toggle-filtros").classList.add("is-hidden");
    $("#filtros").classList.add("is-hidden");
}

$("#toggle-filtros").addEventListener("click" , () => ocultarFiltros());
$("#see-filtros").addEventListener("click" , () => mostrarFiltros());

//Nueva operacion 

let operaciones = traerDatos("operaciones") || [];

const addOperation = () => { 
    let operation = {
        id:randomId(),
        description: $("#description-input").value,
        amount: Number($("#amount-input").value), 
        type: $("#type-operation").value,
        category: $("#select-category").value, 
        date: $("#date-input").value.replace(/-/g, "/"), 
    };

    console.log(operation);
    operaciones = [...operaciones, operation];
    console.log(operaciones);
    subirDatos("operaciones", operaciones);
    mostrarOperaciones(operaciones);
    operacion();
    //cargarOperaciones(traerOperaciones());
    //mostrarVista("balance");
};

$("#add-operation").addEventListener("click", () => addOperation());


console.log($("#see-operation"));



const op = document.getElementById("con-operaciones");

// const addName = () => { 
// let newOp = document.getElementById("description-input").value;
// //listaDeOperac.push(newOp);
// let li = document.createTextNode('${newOp}');
// let liItem = document.createElement('li');
// liItem.appendChild(li);
// //("con-operaciones").appendChild(liItem);
// //("con-operaciones").innerHTML = " "

// console.log(listaDeOperac);
//} 

//const agregar= document.getElementById("add-operation");

//agregar.addEventListener("click" , () => addName());
const conOperaciones = () => { 
    if ($("con-operaciones").innerHTML === "") {
        $("#whitout-operations").classList.remove("is-hidden");
        $("con-operaciones").classList.add("is-hidden");
    } else {
        $("#whitout-operations").classList.add("is-hidden");
        $("con-operaciones").classList.remove("is-hidden");
    }

}



const mostrarOperaciones = (arrayOperaciones) => { 
    $("small-operaciones").innerHTML = "";
    arrayOperaciones.array.forEach(({id, description, amount, type, category, date})=> {
        $("small-operaciones").innerHTML = `<div class="small-operaciones">
        <div class="columns is-multiline is-mobile is-vcentered">
                  <h3 class="has-text-weight-semibold">${description}</h3>
                </div>
                <div class="colum i-3-tablet is-6-mobile has-text-right-mobile">
                  <span class="tag is-primary is-light">${category}</span>
                </div>
                <div class="column is-2-tablet has-text-grey is-hidden-mobile has-text-right-tablet"> <span>
                    ${new Date(fecha).getDate()}/${
                    new Date(fecha).getMonth() + 1
                }/${new Date(fecha).getFullYear()}
                </span> </div>
                <div class="column is-size-5-mobile is-2-tablet is-6-mobile has-text-right-tablet has-text-weight-bold >
            <span>
                ${amount}
            </span>
        </div>
                <div class="colum is-2-tablet is-6-mobile has-text-right"> 
                  <p class="is is-fullwidth">
                    <a id="editar${id}" class="mr-3 is-size-7 edit-link is-hidden" href="#"> Editar </a>
                    <a id="eliminar${id}" class="is-size-7 delete-link is-hidden" href="#"> Eliminar </a>
                  </p>
                </div>
              </div>`
    });
    conOperaciones() 
}





                