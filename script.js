const submitFunction = event => {
    if(!formValidation()) {
        event.preventDefault(); // No se actualice la pagina
    } else {
        event.preventDefault();
        alert(
            "Los datos enviados fueron: \n" +
            "Nombre: " + document.getElementById("name").value + "\n" +
            "Apellido: " + document.getElementById("lastname").value + "\n" +
            "CI: " + document.getElementById("id").value + "\n" +
            "Email: " + document.getElementById("email").value + "\n" +
            "Edad: " + document.getElementById("age").value + "\n" +
            "Actividad: " + document.getElementById("activity").value + "\n" +
            "Nivel de Estudio: " + document.getElementById("studyLevel").value + "\n"
        );
    }
}

document.getElementById("form").addEventListener("submit", submitFunction); // Escucha el envio del form

function formValidation() {
    // Esto valida los campos de texto
    const textAreas = document.querySelectorAll('input[type = "text"]');
    let correctValidation = true;

    textAreas.forEach(area => {
        let areaError = document.getElementById("error" + area.id.charAt(0).toUpperCase() + area.id.slice(1)) // error + el id con la primera letra en Mayuscula
        if(area.value.length == "") {
            showError(areaError, "Este campo es requerido");
            correctValidation = false;
        } else if (area.value.length > 0 && area.value.length < 3) {
            showError(areaError, "Este campo debe tener al menos 3 caracteres");
            correctValidation = false;
        } else {
            hideError(areaError);
        }
    })

    // Esto valida el campo de email
    const email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {  // Este regex valida que el formato sea valido
        hideError(errorEmail);
    } else {
        showError(errorEmail, "Ingrese un email valido");
    }

    // Esto valida el campo de edad
    const age = document.getElementById("age");
    let errorAge = document.getElementById("errorAge");

    if(age.value < 18) {
        showError(errorAge, "Necesitas tener un minimo de 18 años");
        correctValidation = false;
    } else {
        hideError(errorAge);
    }

    // Esto valida el sector de actividad
    const activity = document.getElementById("activity");
    const errorActivity = document.getElementById("errorActivity");

    if (activity.value == "") {
        showError(errorActivity, "Por favor selecciona una actividad");
        correctValidation = false;
    } else {
        hideError(errorActivity);
    }

    // Esto valida el nivel de estudio
    const studyLevel = document.getElementById("studyLevel");
    const errorStudyLevel = document.getElementById("errorStudyLevel");

    if (studyLevel.value == "") {
        showError(errorStudyLevel, "Por favor seleccione un nivel de estudio");
        correctValidation = false;
    } else {
        hideError(errorStudyLevel);
    }

    // Esto valida los terminos y condiciones
    const conditions = document.getElementById("conditions");
    const errorConditions = document.getElementById("errorConditions");

    if (conditions.checked) {
        hideError(errorConditions);
    } else {
        showError(errorConditions, "Los terminos y condiciones no han sido aceptados");
        correctValidation = false;
    }

    return correctValidation; // Esto dira si el formulario completo es valido o no

}

const showError = (element, message) => {  // Mostrar error
    element.textContent = message;
    element.style.display = "block";
}

const hideError = (element) => {
    element.textContent = "";
    element.style.display = "none";
}