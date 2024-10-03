// ========== IF STATEMENT (Boolean : true & false)

const age: number = 17;

if (age >= 17) {
  console.log("You can make ID Card");
}

const age2: number = 10;
if (age2 >= 17) {
  console.log("You can make ID Card");
} else {
  console.log("You can't make ID Card");
}

const input: string = "c";
const grade: string = input.toLowerCase();

if (grade === "a") {
  console.log("nilai bagus");
} else if (grade === "b") {
  console.log("nilai lumayan");
} else if (grade === "c") {
  console.log("nilai buruk");
} else {
  console.log("nilai tidak diketahui");
}

// ========= SWITCH

const day: string = "jumat";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;
  case "selasa":
    console.log("Hari Selasa");
    break;
  case "rabu":
    console.log("Hari rabu");
    break;
  case "kamis":
    console.log("Hari kamis");
    break;
  case "jumat":
    console.log("Hari jumat");
    break;
  case "sabtu":
    console.log("Hari sabtu");
    break;
  case "minggu":
    console.log("Hari minggu");
    break;
}

// ========== LOGICAL OPERATOR

// OPERATOR || (OR)
const car: string ="mercy"
if (car === "bmw" || car === "mercy") {
    console.log("mobil jerman");
} else {
    console.log("mobil jepang");
}

// OPERATOR && (AND)
const umur: number = 20
const punyaSim: boolean = true 

if (umur >= 18 && punyaSim === true) {
    console.log("boleh bawa kendaraan");
} else {
    console.log("belum boleh bawa kendaraan");
}

// OPERATOR ! (NOT)

const isSunny: boolean = true;
const isRainny: boolean = !isSunny;

console.log(isSunny);
console.log(isRainny);


// ========= TERNARY OPERATOR
// shortcut untuk if else condition

const str: string = "typescript"

if(str === "javascript") {
    console.log("javascript");
} else {
 console.log("typescript");
}

console.log(str === "javascript"? "javascript" : "not javascript");

console.log(
    str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

//======== FOR LOOPS

// Rangkaian instruksi yang dillakukan berulang kali hingga kondisinya tidak terpenuhi

// type loops :
// 1. for loop
// 2. while loop
// 3. do while loop

// FOR LOOP mempunyai 3 statement :
// 1. menginisialisasikan variable dari looping itu sendiri
// 2. mendefine dari looping tersebut
// 3. kode yang di eksekusi di akhir setiap iterasi

// Syntax
// for(statement 1 ; statement 2 ; statement 3) {
// code block yang akan di ulang - ulang
// }

for(let i = 0 ; i < 5 ; i++){
  console.log("Hello World");
}

let i: number = 1;
while (i < 10){
  console.log("Hello World");
i++
}

let count: number = 1;
 do {
  console.log("perulangan ke :" + count);
  count++;
 } while (count <= 5)

// ===== BREAK
//menghentikan loop

let sum: number = 0;
while (true) {
  console.log("sum :" + sum);
  if (sum <=5)
  sum++; 
  console.log(sum);
}

// ======= CONTINUE
//melakukan skip pada loop

for(let i = 0 ; i < 5; i++) {
  if (i === 3) continue;

  console.log(i);
  
}