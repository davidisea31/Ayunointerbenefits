// Un código que muestra una calculadora de tiempo de ayuno, usando las variables tiempo x calorías quemadas

// Una función que calcula las calorías quemadas por hora según el peso del usuario
function caloriasPorHora(peso) {
    const factor = 0.69; // el factor que determina las calorías quemadas por kilogramo por hora
    const calorias = peso * factor; // las calorías quemadas por hora según el peso
    return calorias;
    }
    
    // Una función que calcula el tiempo de ayuno necesario para quemar una cantidad de calorías
    function tiempoDeAyunar(calorias, peso) {
    const caloriasHora = caloriasPorHora(peso); // las calorías quemadas por hora según el peso
    const tiempo = calorias / caloriasHora; // el tiempo de ayuno necesario en horas
    return tiempo;
    }
    
    // Una función que formatea el tiempo de ayuno en horas y minutos
    function formatearTiempo(tiempo) {
    let horas = Math.floor(tiempo); // las horas enteras
    let minutos = Math.round((tiempo - horas) * 60); // los minutos redondeados
    // Añadir un cero delante de los números menores que 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    // Devolver el tiempo formateado en hh:mm
    return `${horas}:${minutos}`;
    }
    
    // Una función que muestra la calculadora de tiempo de ayuno en la parte superior de la pantalla
    function mostrarCalculadora() {
    // Una variable que guarda el elemento HTML donde se muestra la calculadora
    const calculadora = document.getElementById("calculadora");
    // Crear los elementos HTML para la calculadora
    const titulo = document.createElement("h3"); // el título de la calculadora
    titulo.innerHTML = "Calculadora de tiempo de ayuno";
    const formulario = document.createElement("form"); // el formulario para introducir los datos
    const etiquetaPeso = document.createElement("label"); // la etiqueta para el peso
    etiquetaPeso.innerHTML = "Introduce tu peso en kilogramos:";
    const inputPeso = document.createElement("input"); // el campo para el peso
    inputPeso.type = "number";
    inputPeso.id = "peso";
    inputPeso.min = "1";
    inputPeso.max = "200";
    inputPeso.required = true;
    const etiquetaCalorias = document.createElement("label"); // la etiqueta para las calorías
    etiquetaCalorias.innerHTML = "Introduce las calorías que quieres quemar:";
    const inputCalorias = document.createElement("input"); // el campo para las calorías
    inputCalorias.type = "number";
    inputCalorias.id = "calorias";
    inputCalorias.min = "1";
    inputCalorias.max = "10000";
    inputCalorias.required = true;
    const botonCalcular = document.createElement("button"); // el botón para calcular el tiempo de ayuno
    botonCalcular.type = "submit";
    botonCalcular.innerHTML = "Calcular";
    const resultado = document.createElement("p"); // el párrafo donde se muestra el resultado
    resultado.id = "resultado";
    
    // Añadir los elementos HTML al formulario y al elemento principal
    formulario.append(etiquetaPeso, inputPeso, etiquetaCalorias, inputCalorias, botonCalcular);
    calculadora.append(titulo, formulario, resultado);
    
    // Añadir un evento al formulario para calcular y mostrar el tiempo de ayuno al enviar los datos
    formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // evitar que se recargue la página al enviar el formulario
    const peso = inputPeso.value; // obtener el valor del peso introducido
    const calorias = inputCalorias.value; // obtener el valor de las calorías introducidas
    const tiempo = tiempoDeAyunar(calorias, peso); // calcular el tiempo de ayuno necesario
    const tiempoFormateado = formatearTiempo(tiempo); // formatear el tiempo de ayuno en horas y minutos
    resultado.innerHTML = `Para quemar ${calorias} calorías, necesitas ayunar durante ${tiempoFormateado}.`; // mostrar el resultado en el párrafo
    });
    }
    
    // Llamar a la función mostrarCalculadora al cargar la página
    window.onload = mostrarCalculadora;
    