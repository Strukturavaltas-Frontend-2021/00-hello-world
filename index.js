//10.11.
const myName = "Morioden";
console.log(`Hello ${myName}!`);
console.log("Hai~ ૮ ˶ᵔ ᵕ ᵔ˶ ა");

//10.12.
const a = 5;    // deklaráció
let b = 12;     // definíció


// console.log(a);
// console.log(b);
//console.log(`A=${a}, B=${b}`);

a = b;

b = b + 5;
b += 5;
console.log(`A=${a}, B=${b}`);

const result = 10 % 3; // = 1 (mert 9 / 3 = 3 marad 1)

// Primitív típusok
const num = 7.2;
const bool = false;
const str = "text";
const n = null;
const undi = undefined;

console.log((1 + 2) * 6 / 3); // precedencia: zárójel, hatványozás, szorázs/osztás, összeadás/kivonás

let firstName = "Médea"; // immutable
const lastName = "Mézmenta";

console.log(firstName + " " + lastName);

let firstName = "Lolina";

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(2));
console.log(firstName.substring(1, 3));
console.log(firstName.trim());


const myString = "my string";
console.log("Here is " + myString) // Here is my string
console.log(`Here is ${myString}`) // Here is my string
console.log("Here is".concat(" ", myString));

console.log(myString.substring(3, 9));  // string
console.log(myString.substring(3));     // string
console.log(":" + myString.charAt(2));  // space

console.log("HERE IS " + myString.toUpperCase()); // HERE IS MY STRING
console.log("here is " + myString.toUpperCase()); // HERE IS MY STRING
console.log(("here is " + myString).toUpperCase()); // HERE IS MY STRING

console.log(1 == "1");  // true
console.log(1 === "1"); // false

console.log(0 == "0"); // A == B
console.log(0 == []); // A == C
console.log("0" == []); // B?= C

console.log(2 == '2');          // true
console.log("" == 0);           // true
console.log(null == undefined); // true
console.log("" == []);          // true
console.log(0 == false);        // true
console.log("0" == false);      // true

console.log(2 === '2');          // false
console.log("" === 0);           // false
console.log(null === undefined); // false
console.log("" === []);          // false

console.log(10 + 6 + "Morioden");                   // 16Morioden

console.log(10 + "6" + "Morioden");                 // 106Morioden
console.log(10 + (6 + "Morioden"));                 // 106Morioden
console.log(10 + Number(6).toString + "Morioden");  // 106Morioden
console.log("" + 10 + 6 + "Morioden");              // 106Morioden

console.log("Morioden" + 10 + 6);                   //Morioden106
console.log("Morioden" + (10 + 6));                 //Morioden16
console.log("Morioden" + 10 - 6);                   //NaN
console.log("Morioden" + (10 - 6));                 //Morioden4


let a = "";
const b = 2;
const c = 7;

console.log(a + b + c); // 27

a = 0;
console.log(a + b + c); // 9

a = true
console.log(a + b + c); // 10

