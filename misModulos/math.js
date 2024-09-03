function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

export function dividir(a, b){      // Exportación Nombrada
    return a / b;
}

export default {                    // Exportación por Defecto
    sumar,
    restar
}