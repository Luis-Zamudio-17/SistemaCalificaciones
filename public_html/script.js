// PRODUCIDO POR: ZAMUDIO PEREZ LUIS ANGEL
// Arreglo donde se guardarán todos los alumnos registrados
let alumnos = [];

function calcularPromedio() {

    // Obtener los datos del formulario
    let nombre = document.getElementById("nombre").value;
    let edad = parseFloat(document.getElementById("edad").value);
    let calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    let calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    let calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    let calificacion4 = parseFloat(document.getElementById("calificacion4").value);

    // Validar que los datos estén completos
    if (
        nombre === "" ||
        isNaN(edad) ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {
        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";
        return;
    }
    // Validar que las calificaciones estén en el rango 0-10
    else if (
        calificacion1 < 0 || calificacion1 > 10 ||
        calificacion2 < 0 || calificacion2 > 10 ||
        calificacion3 < 0 || calificacion3 > 10 ||
        calificacion4 < 0 || calificacion4 > 10
    ) {
        document.getElementById("resultado").innerHTML =
            "Por favor, ingresa calificaciones validas entre 0 y 10.";
        return;
    }

    // Calcular promedio
    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

    // Rangos de valores para ver que mensaje se mostrara
    let mensaje = "";

    if (promedio <= 5.9) {
        mensaje = "VETE A TURISMO O A LA 11";
    } else if (promedio >= 6 && promedio <= 6.4) {
        mensaje = "DATE DE BAJA";
    } else if (promedio >= 6.5 && promedio <= 6.9) {
        mensaje = "PIENSA EN CONTABILIDAD";
    } else if (promedio >= 7 && promedio <= 7.9) {
        mensaje = "BIEN";
    } else if (promedio >= 8 && promedio <= 8.9) {
        mensaje = "MUY BIEN";
    } else if (promedio >= 9 && promedio <= 10) {
        mensaje = "EXCELENTE";
    }

    // Mostrar resultado en pantalla
    document.getElementById("resultado").innerHTML =
        "<strong>Alumno:</strong> " + nombre +
        "<br><strong>Edad:</strong> " + edad +
        "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
        "<br><br>" + mensaje;

    // Guardar el objeto del alumno en variables temporales para usarlo en agregar alumno
   
    window.ultimoAlumno = {
        nombre: nombre,
        edad: edad,
        promedio: promedio.toFixed(2),
        mensaje: mensaje
    };
}

// Agrega el último alumno calculado al arreglo de alumnos
function agregarAlumno() {

    // Verifica que ya se haya calculado un promedio antes de agregar
    if (!window.ultimoAlumno) {
        document.getElementById("resultado").innerHTML =
            "Primero calcula el promedio de un alumno antes de agregarlo.";
        return;
    }

    // Se agrega el alumno al array usando push()
    alumnos.push(window.ultimoAlumno);

    // Se limpia el alumno temporal para evitar duplicados accidentales
    window.ultimoAlumno = null;

    document.getElementById("resultado").innerHTML =
        "Alumno agregado correctamente. Total de alumnos: " + alumnos.length;
}

// Muestra en pantalla todos los alumnos guardados en el arreglo
function mostrarAlumnos() {

    // Si el arreglo está vacío, se manda una alerta
    if (alumnos.length === 0) {
        document.getElementById("resultado").innerHTML =
            "Aún no hay alumnos registrados.";
        return;
    }

    // Se recorre el arreglo con un for y se va construyendo el HTML a mostrar
    let listaHTML = "<h3>Lista de alumnos</h3>";

    for (let i = 0; i < alumnos.length; i++) {
        listaHTML +=
            "<p><strong>" + (i + 1) + ". " + alumnos[i].nombre + "</strong>" +
            " | Edad: " + alumnos[i].edad +
            " | Promedio: " + alumnos[i].promedio +
            " | " + alumnos[i].mensaje + "</p>";
    }

    document.getElementById("resultado").innerHTML = listaHTML;
}

// Manda al index para hacer una ilusion de que se limpia la pagina
function limpiar() {
    window.location.href = "index.html";
}