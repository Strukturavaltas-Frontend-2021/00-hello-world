// 4. feladat: Mit ír ki a program a console.log(...) hívásoknál?

// console.log("This is not a joke " + "" + ", unfortunately.");
// This is not a joke , unfortunately.

// console.log("This is not a joke " + 2 ** 3 + ", unfortunately.");
// This is not a joke 8, unfortunately.

// console.log("This is not a joke " + "2 ** 3" + ", unfortunately.");
// This is not a joke 2 ** 3, unfortunately.

// console.log(7 * 2 + 4 + " " + "This is not a joke, unfortunately.");
// 18 This is not a joke, unfortunately.

// console.log("" + 18 + 9 ** 2);
// 1881 (string)

console.log("" + 18 - 9 ** 2);
// eredmény: -63 (szám) - Miért nem stringként kezeli, ha az elején van az idézőjel?

console.log(18 - 9 ** 2 + "");
// eredmény: -63 (string) - Miért nem számként kezeli, ha a végén van az idézőjel?

// console.log("Result: " + 18 + 9 ** 2);
// Result: 1881 (string)

// console.log("Result: " + 18 - 9 ** 2);
// NaN

// Just a little addition.