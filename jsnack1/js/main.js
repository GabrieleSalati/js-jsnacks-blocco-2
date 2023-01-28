// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// Inserire numero

const insertNumber = prompt("Scegli un numero");

console.log(insertNumber);

// Array di numeri 

const numbers = [2, 33, 42, 87, 94, 14, 65, 5];

console.log(numbers);

// Ciclo e condizioni

for (let i = 0; i < numbers.length; i++) {

    // Prendo un elemento dell'Array

    let currentNumber = numbers[i];

    // Se pari stampa il numero

    if ((insertNumber == currentNumber) && (currentNumber % 2 == 0)) {

        document.getElementById("print").innerHTML = insertNumber;
    }

    // Se dispari stampa il successivo

    else if ((insertNumber == currentNumber) && (currentNumber % 2 != 0)) {

        document.getElementById("print").innerHTML = i + 1;
    }

}

