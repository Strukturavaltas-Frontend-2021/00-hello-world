// 2. feladat: Módosítsd a kódot, hogy a kommentben található szöveg kerüljön kiírásra!
const firstString = "my very nice string";

//console.log(/* "my very nice string" */);
console.log(firstString);

//console.log(/* "Here is my very nice string" */);
console.log("Here is " + firstString);

// console.log(/* "Here is my very nice string" - template stringgel! */);
console.log(`Here is ${firstString}`);

//console.log(/* A firstString 4. karaktere: 'v' */);
console.log(firstString.charAt(3));

//console.log(/* A firstString-ből a "very" szó */);
console.log(firstString.substring(3,7));

//console.log(/* "MY VERY NICE STRING" */);
console.log(firstString.toUpperCase());