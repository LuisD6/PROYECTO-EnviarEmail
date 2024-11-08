# Proyecto: Enviar Correo Electrónico

Este proyecto consiste en una aplicación web para validar y enviar un formulario de correo electrónico. A través de este proyecto, se pone en práctica la validación de formularios, manejo de eventos en JavaScript y la interacción de la interfaz con el usuario para mejorar la experiencia de envío de emails.

## Descripción del Proyecto

La aplicación permite a los usuarios ingresar un correo electrónico, asunto y mensaje, y valida la entrada en tiempo real. También incluye la funcionalidad de una opción CC (con copia), que es opcional, y notifica visualmente si el correo se ha enviado correctamente. Además, este proyecto incluye el cumplimiento de un reto propuesto por el profesor para la validación de la sección CC.

## Funcionalidades Clave

1. **Validación en Tiempo Real**: 
   - Cada campo es validado al momento de su ingreso para garantizar que los datos sean correctos antes de permitir el envío.
   - Los campos de **correo electrónico**, **asunto** y **mensaje** son obligatorios, mientras que el campo de **CC** es opcional. La dirección de correo debe cumplir con un formato válido mediante una expresión regular.
   
2. **Manejo de CC (Con Copia)**:
   - Como parte del reto, se añadió la función de validación del campo CC, que comprueba que, si se ingresa, cumpla con el formato de correo electrónico.
   - Si el correo en CC no es válido, se muestra una alerta y se deshabilita el botón de envío hasta que sea corregido. Sin embargo, si el campo CC está vacío, no se requiere validación, es decir el boton de enviar volveria a estar activo si los otros tres campos obligatorios son rellenados correctamente, todo quedara más claro si lo prueba usted mismo.

3. **Notificación de Envío**:
   - Al enviar el formulario, se despliega una animación de carga para simular el proceso de envío.
   - Al finalizar, se muestra un mensaje indicando que el correo se ha enviado correctamente.

4. **Reinicio del Formulario**:
   - La aplicación incluye la funcionalidad de reiniciar todos los campos y restaurar el estado inicial del formulario. **Sin embargo, es importante mejorar esta funcionalidad para que, al presionar el botón de reinicio, no solo se restablezcan los campos, sino también se eliminen los mensajes de error visibles para proporcionar una experiencia de usuario más clara.**

## Reto del Profesor: Validación de CC

Durante esta práctica, se aceptó y completó el reto de implementar una validación adicional en el campo CC. La validación comprueba:
   - Si el campo CC está vacío o contiene un valor válido.
   - Si contiene un valor no válido, se muestra un mensaje de error y se deshabilita el botón de envío.

### Código Destacado

```javascript
// Validación del campo CC como parte del reto
function comprobarCC(e) {
    if(e.target.id === 'cc' && !validarEmail(e.target.value) && e.target.value !== ''){
        mostrarAlerta('El email no es válido', e.target.parentElement);
        btnSubmit.classList.add('opacity-50');
        btnSubmit.disabled = true;
        eliminarCC(e);
        return;
    }

    if (validarEmail(e.target.value)){
        email[e.target.name] = e.target.value.trim().toLowerCase();
        limpiarAlerta(e.target.parentElement);
        comprobarEmail();
        return;
    }

    eliminarCC(e);
    limpiarAlerta(e.target.parentElement);
    comprobarEmail();
}
```

## Posible Mejora: Integración de Backend

Para mejorar la funcionalidad del proyecto, se sugiere integrar un backend utilizando la API de [Resend](https://resend.com/emails) para el envío de correos electrónicos. Esto permitiría enviar correos electrónicos directamente desde la aplicación, haciendo el proceso más eficiente y profesional.

### Mejora en el Botón de Reinicio

El botón de reinicio puede mejorarse ya que, al presionarlo, actualmente solo reinicia el formulario, pero si el formulario tiene errores, estos permanecen visibles. Se busca que, al presionar el botón de reinicio, se eliminen todos los mensajes de error y se restablezca completamente el estado del formulario. Esto proporcionaría una experiencia de usuario más clara y evitaría confusiones.

## Aprendizajes

A través de esta práctica he aprendido:

- Cómo trabajar con eventos en JavaScript para manipular y validar formularios en tiempo real.
- La importancia de proporcionar mensajes de error claros y visibles para guiar al usuario.
- Validación de correos electrónicos mediante expresiones regulares y cómo manejar propiedades en objetos dinámicamente.
- Implementación de retos para mejorar las funcionalidades del proyecto, como el manejo de una copia con validación en el campo CC.

## Ejecución del Proyecto

Para probar esta aplicación:
1. Clona el repositorio en tu equipo local.
2. Abre el archivo `index.html` en tu navegador.
3. Interactúa con el formulario llenando los campos, y observa las validaciones y notificaciones.

## Herramientas Utilizadas

- HTML y CSS para la estructura y diseño básico de la interfaz.
- JavaScript para la lógica de validación y manejo de eventos.
- Visual Studio Code como editor de código.

## Probar la Aplicación

Para ver y probar la aplicación en línea, visita [PROYECTO-EnviarEmail en GitHub Pages](https://luisd6.github.io/PROYECTO-EnviarEmail/).

