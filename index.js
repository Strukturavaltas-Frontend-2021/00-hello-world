const a = 5;          // deklaráció
let b = 12;         // definíció

console.log(`A=${a}, B=${b}`);

a = b;
console.log(`A=${a}, B=${b}`);

b = b + 5; // VAGY b += 5;
console.log(`A=${a}, B=${b}`);

const result = 10 % 3;  // = 1 (9 / 3 = 3 marad 1)
// console.log(result);
// console.log(28 % 4);

// típusok
const num = 7;
const bool = false;
const str = 'Text';
const n = null;

console.log((1 + 2) * 6 / 3); // precedencia: zárójel, hatványozás, szorzás/osztás, összeadás/kivonás

let firstName = "Ádám";   // immutable
const lastName = "Fülöp";

console.log(firstName + " " + lastName);
console.log(firstName - lastName);  // HIBA

firstName = "Dávid";
const firstNameUppercase = firstName.toUpperCase();

console.log(firstName);
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(2));
console.log(firstName.substring(1, 3));
console.log(firstName.trim());


const myString = "my string";
console.log("Here is " + myString);  // Here is my string 
console.log(`Here is ${myString}`);  // Here is my string
console.log("Here is".concat(" ", myString));

console.log(myString.substring(3, 9));      // string
console.log(myString.substring(3));         // string
console.log(myString.charAt(2));            //  

console.log("HERE IS " + myString.toUpperCase());  // HERE IS MY STRING
console.log("here is ".toUpperCase() + myString.toUpperCase());  // HERE IS MY STRING
console.log(("here is " + myString).toUpperCase());  // Here is my string 

console.log(1 == "1");      // true
console.log(1 === "1");     // false

console.log(0 == "0");  // A == B
console.log(0 == []);   // A == C
console.log("0" == []); // B ?= C
// A = B és B = C =/=> A == C :(

console.log(2 == '2');          // TRUE
console.log("" == 0);           // TRUE
console.log(null == undefined)  // TRUE
console.log("" == []);          // TRUE
console.log(0 == false);        // TRUE
console.log("0" == false);      // TRUE

console.log(2 === '2');          // FALSE
console.log("" === 0);           // FALSE
console.log(null === undefined)  // FALSE
console.log("" === []);          // FALSE
console.log(0 === false);        // FALSE
console.log("0" === false);      // FALSE

console.log(10 + 6 + "Adam");                       // 16Adam

console.log(10 + "6" + "Adam");                     // 106Adam
console.log(10 + (6 + "Adam"));                     // 106Adam
console.log(10 + Number(6).toString() + "Adam");    // 106Adam
console.log("" + 10 + 6 + "Adam");                  // 106Adam

console.log("Adam" + 10 + 6);                       // Adam106    
console.log("Adam" + (10 + 6));                     // Adam106
console.log("Adam" + 10 - 6);                       // NaN
console.log("Adam" + (10 - 6));                     // Adam4

let a = "";
const b = 2;
const c = 7;

console.log(a + b + c); // 27

a = 0;
console.log(a + b + c); // 9 

a = true;
console.log(a + b + c); // 10