// ARRAY

const results = ["w", "w", "l", "x", "x", "w", "l", "x"];

// CALC FORMULA

let wins = 0;

let lost = 0;

let draw = 0;

for (let i = 0; i < results.length; i++) {

    const score = results[i];

    if (results == "w") {
        wins += wins + results[i];
        console.log(wins);
    }

    else if (i = l) {
        lost = lost + results[i];
    }

    else {
        draw = draw + results[i];
    }
}
