const myName = "Lilla";
console.log(`Hello ${myName}!`);

// Változó, memóriában foglalunk neki helyet, hogy később el tudjuk érni
// Változó definiálása

let dayOfWeek; // deklaráció, memóriában tárolódik
let dayOfMonth = 12; // definíció, itt értéket is kap a változó

// Konzolon történő kiiratás:
// node fajlnev.js

console.log(dayOfWeek);  // undefined
// változót értékadás nélkül meghívni rossz ötlet, ne tegyük

console.log(dayOfMonth); // 12

// Változó
// nem kezdődhet vesszővel, 
// nem lehet benne szóköz, 
// érthető legyen,
// camelCase
// nem lehet speciális kulcsszó (pl. undefined, consol, null)

////////////////////////////////////////////////

let alma;
console.log('alma: ', alma);

let korte = 12;
alma = korte;
console.log('alma: ', alma);

korte = korte + 5;
console.log('korte: ', korte);

//////////////////////////////////////////////////


let a;              // deklaráció
let b = 12;         // definíció

console.log(`A=${a}, B=${b}`);

a = b;
console.log(`A=${a}, B=${b}`);

b = b + 5; // VAGY b += 5;
console.log(`A=${a}, B=${b}`);

// Primitív típusok:
// number
// string
// boolean
// undefined
// null
// symbol

// Ezen kívül van az object és a tömb.

// FONTOS:
// A primitívek érték szerint tárolódnak (vagy másolódnak).
// A változót az értékéhez párosítjuk hozzá.
// Ha az egyik érték változik, attól a másik érték nem fog módosulni,
// mert külön helyen vannak a memóriában.

// Lesz referencia típus is
// Itt más a helyzet, ha módosítjuk az egyiken keresztül,
// akkor az a másikon keresztül is látszani fog.

// Változó létrehozása const-al
// CSAK egyszer adhatunk neki értéket!
// const a = 5;     // deklaráció

const dio = 5;
let mogyoro = 10;

// dio = mogyoro;
// console.log('dio: ', dio);

// Consolon hibát kapunk:
// Uncaught TypeError: invalid assignment to const 'dio'
// dio = mogyoro; --> lehal tőle a kód

// CONST vagy LET használatának szabálya:
// ahol tudunk ott CONST-ot használjunk, ahol nem tudunk, ott LET-et használjunk
// VAR régi kódban fordulhat elő, át kell írni, ma már nem használjuk

////////////////////////////////////////////////////////

// Primitív típus: number, lehet egész, vagy törtszám
const num1 = 7.2; // floatnak is hívják
const num2 = 7e5; // 7*10az5.-en

// Primitív típus: boolean
// const bool = true; vagy const bool= false;
// true = 1, false = 0;

// Primitív típus: string
const str2 = "Text";
// ez a memóriában úgy van tárolva, hogy minden egyes karakternek van egy számkódja
// és ezek le vannak írva egymás mellé, számként vannak tárolva
// de mindig szövegként fogunk velük dolgozni

// Primitív típus: undefined;
let malna; // undefined;
let ribizli = undefined;

// Primitív típus: null;
const n = null;

// Számok:
console.log(7 / 0);       // Infinity-t ad vissza
console.log(7 / "Adam");  //NaN
console.log(3 ** 3);      // 3*3*3, 27 hatványozás
console.log(3 > 4);          // false
console.log(3 == 4);         // false
console.log(1 + 5 * 4);      // 21
console.log(18 / 3 ** 2);    // 2
console.log(2 * 6 / 3);      // 12/3, azaz 4 balról jobbra haladunk a műveletnél

// Precedencia sorrend:
// ha van (), akkor az mindennél erősebb
// hatványozás
// szorzás, osztás
// összeadás, kivonás

console.log(2 * 6 / 3);           // 4
console.log((1 + 2) * 6 / 3);     // 6

// Stringek
const str3 = "vaj"; // lehet "" vagy '' idézőjel
// Template stringek
const str4 = ` ${str3} `;

let firstName2 = "Adam";      // immutable
let lastName2 = "Fülöp";
console.log(firstName2 + " " + lastName2);
// összefűzés + jellel történik, de kivonás jelet stringeknél nem használhatunk!
console.log(firstName2 - lastName2);    // NaN

// immutable, azaz nem módosítható

// A JS menedzser nyelv, a memóriát felügyeli 
// JS-ben végigmegy a Garbage Collector és amire nem mutat semmilyen referencia,
// amit a kódból úgysem tudnánk már elérni, azokat kisöpri a memóriából
// Ezt a JS automatikusan elvégzi a háttérben.

firstName2 = "Dávid";
console.log(firstName2);    // Dávid

// változónév után pontot teszünk és lila színnel előjönnek a fv-ek, pl. toUpperCase()
// változónév után pontot teszünk és láthatóak a property-k is, pl. length

console.log(firstName2.length);

console.log(firstName2.toUpperCase());
// Mi történik a memóriában?
// a string az immutable
// létrejön egy új DÁVID a memóriában, a firstName most már erre mutat
// és a korábbi Dávid-ra mutatás megszűnik, a Garbage Collector ki fogja pucolni

const firstNameUppercase = firstName2.toUpperCase();
// csinál egy másolatot a memóriában és az eredetit változatlanul hagyja
console.log(firstName2);    // Dávid , eredeti változóra fog hivatkozni

console.log(firstName2.charAt(2));          // v
console.log(firstName2.substring(1, 3));    // áv

let student = "  Hans  "
console.log(student.trim());
let student2 = "  Hans   Lidi    "
console.log(student2.trim());

// Javascript okosságok: MDN

const myString = "my string";
console.log("Here is " + myString);            // Here is my string 
console.log(`Here is ${myString}`);            // Here is my string
console.log("Here is".concat(" ", myString));  // Here is my string

console.log(myString.substring(3, 9));      // string
console.log(myString.substring(3));         // string
console.log(myString.charAt(2));            // szóközt jelenítjük meg 

console.log("HERE IS " + myString.toUpperCase());  // HERE IS MY STRING
console.log("here is ".toUpperCase() + myString.toUpperCase());  // HERE IS MY STRING
console.log(("here is " + myString).toUpperCase());  // HERE IS MY STRING 

// Rövidítés
b = b + 5;
b += 5;
b *= 5;
b %= 5;


// Modulo
const result = 10 % 3;  // = 1 (9 / 3 = 3 marad 1) 
// n-1-ig mehet, többi eset gyanus
console.log(result);
console.log(28 % 4);

// típusok
const num = 7;
const bool = false;
const bool2 = !false;    // negálás, true
const str = 'Text';
const nullacska = null;

// Operátorok
// == értékben egyező
// === értékben és típusban egyező
// negálás !
// értékben nem egyenlő !=  ha a 2 oldal nem= akkor true
// értékben és típusban nem egyező !== 
// azt jelenti, hogy ha bármelyikben nem egyezik, akkor is false
// vagy ||
// és &&


console.log(1 == "1");      // true 
// értékben hasonlít össze, balról elindul és halad jobbra,
// és a sztringet számmá alakítja és elvégzi az összehasonlítást

console.log(1 === "1");     // false
// === esetén letiltottuk a típus átalakítást


console.log(0 == "0");  // true   A == B
console.log(0 == []);   // true   A == C
console.log("0" == []); // false  B ?= C
// A = B és B = C =/=> A == C :(
// Az egyenlőség nem tranzitív.


console.log(0 === "0");  // false
console.log(0 === []);   // false
console.log("0" === []); // false


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


console.log(10 + "Adam");                           // 10Adam
console.log(10 + 6 + "Adam");                       // 16Adam
//balról jobbra haladunk

console.log(10 + "6" + "Adam");                     // 106Adam
console.log(10 + (6 + "Adam"));                     // 106Adam
console.log(10 + Number(6).toString() + "Adam");    // 106Adam
console.log("" + 10 + 6 + "Adam");                  // 106Adam
// üres stringet rakunk az elejére --> innentől kezdve mindent stringként kezel
// stringről már nem tér vissza number-re

console.log("Adam" + 10 + 6);                       // Adam106    
console.log("Adam" + (10 + 6));                     // Adam16
console.log("Adam" + 10 - 6);                       // NaN
console.log("Adam" + (10 - 6));                     // Adam4

let a1 = "";
const b1 = 2;
const c = 7;

console.log(a1 + b1 + c); // 27 ez itt string

a1 = 0;
console.log(a1 + b1 + c); // 9 

a1 = true;
console.log(a1 + b1 + c); // 10 mivel a true az 1





