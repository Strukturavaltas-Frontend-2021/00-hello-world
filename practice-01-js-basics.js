// 1. feladat: Mit ír ki a program a console.log(...) hívásoknál? Lesz-e valahol hiba? Ha igen, hogyan lehetne megjavítani?
let firstNumber;
console.log(firstNumber);               // undefined, mert a változónak nincs értéke, nincs definiálva.

firstNumber = 7;
console.log(firstNumber);                // 7, mert a változó definiálása megtörtént, értéke 7 lett. 

const secondNumber = firstNumber + 2;
console.log(secondNumber);               // 9, mert két szám összeadása történt meg (7+2).

firstNumber = 9;
console.log(secondNumber);               //9, mert a secondNumber változó const-tal lett létrehozva, aminek az értéke akkor sem változik, ha a firstNumber módosul.

secondNumber += 7;
console.log(secondNumber);               //hiba. A const változót nem lehet újradefiniálni. Ha let-tel hoztuk volna létre, akkor 16 lenne.

const thirdNumber = 7 + 9 / 8**4;
console.log(thirdNumber);                // 7.002197265625, műveleti sorrend miatt. Először hatványozás, majd az osztás, végül az összeadás.


// 2. feladat: Módosítsd a kódot, hogy a kommentben található szöveg kerüljön kiírásra!
const firstString = "my very nice string";

console.log(firstString);                  /* "my very nice string" */

console.log("Here is " + firstString);     /* "Here is my very nice string" */

console.log(`Here is ${firstString}`);     /* "Here is my very nice string" - template stringgel! */

console.log(firstString.charAt(4));        /* A firstString 4. karaktere: 'v' */

console.log(firstString.substring(3, 7));  /* A firstString-ből a "very" szó */

console.log(firstString.toUpperCase());    /* "MY VERY NICE STRING" */


// 3. feladat: True vagy false a kifejezés értéke?
console.log(2 == 2);                //true

console.log(0 == "");               //true

console.log(null === undefined);    //false

console.log(0 == false);            //true

console.log(2 == '2');              //true

console.log(2 == 22);               //false

console.log(null == undefined);     //true

console.log(0 === "");              //false

console.log(0 === false);           //false

console.log(2 === '2');             //false


// 4. feladat: Mit ír ki a program a console.log(...) hívásoknál?
console.log("This is not a joke " + "" + ", unfortunately.");
// This is not a joke , unfortunately.

console.log("This is not a joke " + 2 ** 3 + ", unfortunately.");
// This is not a joke 8, unfortunately.

console.log("This is not a joke " + "2 ** 3" + ", unfortunately.");
//This is not a joke 2 ** 3, unfortunately.

console.log(7 * 2 + 4 + " " + "This is not a joke, unfortunately.");
// 18 This is not a joke, unfortunately.

console.log("" + 18 + 9 ** 2);
//1881

console.log("" + 18 - 9 ** 2);
//-63

console.log(18 - 9 ** 2 + "");
//-63

console.log("Result: " + 18 + 9 ** 2);
//Result: 1881

console.log("Result: " + 18 - 9 ** 2);
//NaN