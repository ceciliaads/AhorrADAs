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
  
  const operacion = () => {
    $("#balance").classList.remove("is-hidden");
    $("#see-newoperation").classList.add("is-hidden");
  };
  
  const hidden = () => {
    $("#see-newoperation").classList.remove("is-hidden");
    $("#balance").classList.add("is-hidden");
  };
  
  $("#see-operation").addEventListener("click", () => hidden());
  
  //const clickBalance =document.getElementById("see-balance");
  
  const click = () => {
    $("#see-newoperation").classList.add("is-hidden");
    $("#balance").classList.remove("is-hidden");
  };
  
  $("#see-balance").addEventListener("click", () => click());
  
  //ocultar filtros
  
  const mostrarFiltros = () => {
    $("#filtros").classList.remove("is-hidden");
    $("#see-filtros").classList.add("is-hidden");
    $("#toggle-filtros").classList.remove("is-hidden");
  };
  
  const ocultarFiltros = () => {
    $("#see-filtros").classList.remove("is-hidden");
    $("#toggle-filtros").classList.add("is-hidden");
    $("#filtros").classList.add("is-hidden");
  };
  
  $("#toggle-filtros").addEventListener("click", () => ocultarFiltros());
  $("#see-filtros").addEventListener("click", () => mostrarFiltros());
  
  //Nueva operacion
  
  let operaciones = traerDatos("operaciones") || [];
  
  const addOperation = () => {
    let operation = {
      id: randomId(),
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
  };
  
  $("#add-operation").addEventListener("click", operacion);
  $("#add-operation").addEventListener("click", addOperation);
  
  const conOperaciones = () => {
    if (!operaciones) {
      $("#whitout-operations").classList.remove("is-hidden");
      $("#con-operaciones").classList.add("is-hidden");
    } else {
      $("#whitout-operations").classList.add("is-hidden");
      $("#con-operaciones").classList.remove("is-hidden");
    }
  };
  
  const mostrarOperaciones = (arrayOperaciones) => {
    $(".small-operaciones").innerHTML = "";
  
    console.log($(".small-operaciones"));
    arrayOperaciones.forEach(({ id, description, amount, category, date }) => {
      $(".small-operaciones").innerHTML = `<div class="small-operaciones">
          <div class="columns is-multiline is-mobile is-hidden">
                    <h3 class="has-text-weight-semibold">${description}</h3>
                  </div>
                  <div class="colum i-3-tablet is-6-mobile has-text-right-mobile">
                    <span class="tag is-primary is-light">${category}</span>
                  </div>
                  <div class="column is-2-tablet has-text-grey is-hidden-mobile has-text-right-tablet"> <span>
                      ${new Date(date).getDate()}/${
        new Date(date).getMonth() + 1
      }/${new Date(date).getFullYear()}
                  </span> 
                  </div>
                  <div class="column is-size-5-mobile is-2-tablet is-6-mobile has-text-right-tablet has-text-weight-bold >
              <span>${amount}</span>
          </div>
                  <div class="colum is-2-tablet is-6-mobile has-text-right"> 
                    <p class="is is-fullwidth">
                      <a id="editar${id}" class="mr-3 is-size-7 edit-link is-hidden" href="#">Editar</a>
                      <a id="eliminar${id}" class="is-size-7 delete-link" href="#">Eliminar</a>
                    </p>
                  </div>
                </div>`;
    });
    conOperaciones();
  };

const editarOperaciones = () => { 
$("editar").classList.remove("is-hidden");
$("#see-newoperation").classList.add("is-hidden");
}



