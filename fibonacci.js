function obtenerNumero() {
    let numero = parseFloat(document.getElementById('numeroInput').value);
    if (isNaN(numero)) {
        alert("Error: Debes ingresar un número válido.");
        return null;
    }
    return numero;
}

function fibonacci(n) {
    let serie = [0, 1];
    for (let i = 2; i < n; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
    }
    return serie;
}

function imprimirSerieFibonacci() {
    let numero = obtenerNumero();

    if (numero !== null) {
        let serieFibonacci = fibonacci(numero);
        let resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = "<p>Serie de Fibonacci de " + numero + " números:</p>";
        resultadoDiv.innerHTML += "<p>" + serieFibonacci.join(", ") + "</p>";
    }
}

