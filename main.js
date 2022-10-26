/* Menu desplegable */

const menu = document.querySelector('.nav');
const icono = document.querySelector('.menu');

console.log(menu);
console.log(icono);

icono.addEventListener('click', ()=>{
    menu.classList.toggle('spread')
});

/* Formulario de Adopcion */

const form = document.querySelector('.form-show');
const btnOpenForm = document.querySelector('#open-form');
const btnCloseForm = document.querySelector('#form-close');

btnOpenForm.addEventListener('click', ()=> {
    form.classList.remove('inactive');
})

btnCloseForm.addEventListener('click', ()=> {
    form.classList.add('inactive');
})

/* Validacion del formulario */

const botonEnvio = document.querySelector("#envioForm");

botonEnvio.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector('form'); 
    let adoptante = capturarDatosAdoptante(form);
    
    
    let errores = validarAdoptante(adoptante);

    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return;
    }

    let mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";

});

function capturarDatosAdoptante(form){

    let adoptante = {
        nombre: form.inputNombre.value, 
        nacimiento: form.inputNacimiento.value,
        email: form.inputEmail.value,
        telefono: form.inputTelefono.value,
        direccion: form.inputDireccion.value,
        localidad: form.inputLocalidad.value,
        vivienda: form.inputVivienda.value,
        mascota: form.inputMascota.value,
        redes: form.inputRedes.value,
        familiares: form.inputFamilia.value,
        otrosAnimales: form.inputAnimales.value,
        vacaciones: form.inputVacaciones.value,
        mudanza: form.inputMudanza.value,
        veterinario: form.inputVeterinario.value,
        compromiso: form.inputCompromiso.value,
        comentarios: form.inputComentarios.value,
    }
    return paciente; 
}

function validarAdoptante(adoptante){
    let errores = []

    if(adoptante.nombre.length == 0){
        errores.push("El nombre no puede estar vacío");
    }
    if(adoptante.nacimiento.length == 0){
        errores.push("La fecha de nacimiento no puede estar vacía");
    }
    if(adoptante.email.length == 0){
        errores.push("El email no puede estar vacío");
    }
    if(adoptante.telefono.length == 0){
        errores.push("El telefono no puede estar vacío");
    }
    if(adoptante.direccion.length == 0){
        errores.push("El domicilio no puede estar vacío");
    }
    if(adoptante.localidad.length == 0){
        errores.push("La localidad no puede estar vacía");
    }
    if(adoptante.vivienda.length == 0){
        errores.push("La vivienda no puede estar vacía");
    }
    if(adoptante.familiares.length == 0){
        errores.push("La familia no puede estar vacía");
    }
    if(adoptante.otrosAnimales.length == 0){
        errores.push("Debe decirnos si tiene o no otras mascotas");
    }
    if(adoptante.vacaciones.length == 0){
        errores.push("Debe decirnos que haria en caso de vacaciones");
    }
    if(adoptante.mudanza.length == 0){
        errores.push("Debe decirnos que haria en caso de mudanza");
    }
    if(adoptante.veterinario.length == 0){
        errores.push("Debe decirnos si tiene un veterinario de confianza");
    }
    if(adoptante.compromiso.length == 0){
        errores.push("Debe decirnos si se compromete a cuidar a su mascota");
    }
    
    return errores; 
}

function exhibirMensajesErrores(errores){
    let ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""
    errores.forEach(function(error){
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

/* Pet shop */

function clicked(marca,cantidad,precio){ 
    alert("Marca:"+" "+marca +"\nCantidad:"+" "+cantidad+"\nPrecio:"+" "+precio)
}