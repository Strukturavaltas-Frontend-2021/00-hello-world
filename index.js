// 1. feladat: Mit ír ki a program a console.log(...) hívásoknál? Lesz-e valahol hiba? Ha igen, hogyan lehetne megjavítani?
let firstNumber;
console.log(firstNumber); // undefined

firstNumber = 7;
console.log(firstNumber); // 7

const secondNumber = firstNumber + 2;
console.log(secondNumber); // 9

firstNumber = 9;
console.log(secondNumber); // 9

secondNumber += 7;
console.log(secondNumber); // 16

const thirdNumber = 7 + 9 / 8 ** 4;
console.log(thirdNumber); // 7,002197266


// 2. feladat: Módosítsd a kódot, hogy a kommentben található szöveg kerüljön kiírásra!
const firstString = "my very nice string";

console.log(firstString);

console.log("Here is " + firstString);

console.log(`Here is ${firstString}`);

console.log(firstString.charAt(3));

console.log(firstString.substring(3, 7));

console.log(firstString.toUpperCase());


// 3. feladat: True vagy false a kifejezés értéke?
console.log(2 == 2);

console.log(0 == "");

console.log(null === undefined);

console.log(0 == false);

console.log(2 == '2');

console.log(2 == 22);

console.log(null == undefined);

console.log(0 === "");

console.log(0 === false);

console.log(2 === '2');