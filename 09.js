function isPar(numero){
    if (numero % 2 == 0){
        console.log("O número que será informado a seguir é par:");
    } else {
        console.log("O número que será informado a seguir é impar:")
    }
    return numero;
}

console.log(isPar(4));
console.log(isPar(7));