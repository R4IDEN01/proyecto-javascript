// Función para obtener los datos ingresados por el usuario
function obtenerDatos() {
    let monto = parseFloat(document.getElementById("monto").value);
    let tiempo = parseInt(document.getElementById("tiempo").value);
    let interes = parseFloat(document.getElementById("interes").value);
    
    // Validar que los campos no estén vacíos o tengan valores negativos
    if (isNaN(monto) || isNaN(tiempo) || isNaN(interes) || monto <= 0 || tiempo <= 0 || interes <= 0) {
        alert("Porfa, ingresa valores válidos.");
        return null; // Si hay un error, devolvemos null
    }
    
    return { monto, tiempo, interes };
}

// Función para calcular el monto final con la fórmula de interés compuesto
function calcularInversion(monto, tiempo, interes) {
    let montoFinal = monto * Math.pow((1 + (interes / 100)), tiempo);
    return montoFinal;
}

// Función para mostrar el resultado en la consola y en un alert
function mostrarResultado(montoFinal) {
    alert("El monto final de tu inversión sería: " + montoFinal.toFixed(2) + " pesos.");
    console.log("Monto Final: " + montoFinal.toFixed(2));
}

// Función principal que maneja el flujo del simulador
function iniciarSimulador() {
    let datos = obtenerDatos();
    
    if (datos) {
        let { monto, tiempo, interes } = datos;
        let montoFinal = calcularInversion(monto, tiempo, interes);
        mostrarResultado(montoFinal);
    }
}
