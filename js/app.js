document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elmentos de las interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    
    inputCC.addEventListener('input', comprobarCC); // Reto del profesor


    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();

        resetearFormulario();
    })

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetearFormulario();

            // Crear un alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Email enviado correctamente';
    
            // Inyectar el alertaExito al formulario
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);


        }, 3000);
    }

    function validar(e){

        if(e.target.value.trim() === ''){
            mostrarAlerta(`EL campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarEmail();


    }

    // Function hecha para el Reto del profesor
    function comprobarCC(e) {
        if(e.target.id === 'cc' && !validarEmail(e.target.value) && !e.target.value == ''){
            mostrarAlerta('El email no es valido', e.target.parentElement);
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            eliminarCC(e);
            console.log(email);
            return;
        }

        if (validarEmail(e.target.value)){
            // Si el correo es correcto agrega una nueva propiedad cc con el valor validado
            email[e.target.name] = e.target.value.trim().toLowerCase();
            console.log(email);
            limpiarAlerta(e.target.parentElement);
            comprobarEmail();
            return;
        }

        console.log(email);
        eliminarCC(e);
        limpiarAlerta(e.target.parentElement);
        comprobarEmail();

    }

    // Function hecha para el Reto del profesor
    function eliminarCC(e){
        if('cc' in email) { // Comprueba si la propiedad cc existe en el objeto email
            delete email.cc;
        } 
    }

    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);


        // Generar un alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        // Comprueba si ya existe una alerta y si existe la elimina
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }

    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
 
    }

    function resetearFormulario() {
        // Reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        eliminarCC(); //Eliminar propiedad CC del objeto email al presionar Reset si existe
        console.log(email);
        
        formulario.reset();
        comprobarEmail();
    }


});