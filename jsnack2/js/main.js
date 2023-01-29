// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. 
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Array di numeri 

const numbers = [67, 12, 83, 4, 51, 22, 93, 8];

// Ciclo e condizioni

for (i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
        document.getElementById("even").innerHTML += numbers[i];
    }

    else if (numbers[i] % 2 != 0) {
        console.log(numbers[i]);
        document.getElementById("odd").innerHTML += numbers[i];
    }
}