// // 1. feladat: Mit ír ki a program a console.log(...) hívásoknál? Lesz-e valahol hiba? Ha igen, hogyan lehetne megjavítani?
let firstNumber;
console.log(firstNumber);

// // undefined, mert nincsen érték megadva

firstNumber = 7;
console.log(firstNumber);

// // 7, mert definiálva van

let secondNumber = firstNumber + 2;
console.log(secondNumber);

// // 9, mert firstNumber = 7 + 2 = 9

firstNumber = 9;
console.log(secondNumber);

// // 9, mert a secondNumber nem változott

secondNumber += 7;
console.log(secondNumber);

// hiba, mert konstans változót akar módosítani
// 12. sorban javítani const helyett let

const thirdNumber = 7 + 9 / 8**4;
console.log(thirdNumber);

// 7.002197265625, ez jön ki a műveletek elvégzése után

