// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// ARRAY

const numbers = [4, 67, 78, 43, 5, 98, 7];

console.log(numbers);

// CALC FORMULA

let sum = 0;

for (let i = 0; i < numbers.length; i++) {

    if (i % 2 != 0) {
        console.log(numbers[i]);
        sum = sum + numbers[i];
    }

}

console.log(sum);