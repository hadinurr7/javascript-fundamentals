// FUNCTION =================================
// ada 2 cara untuk menuliskan fungsi

// 1. function declaration
function square(number: number) {
  return number * number;
}

const result = square(4);
const result2 = square(10);

console.log(result);
console.log(result2);

// 2. function expression
const square1 = function (number: number) {
  return number * number;
};

const result3 = square1(4);
const result4 = square1(10);

console.log(result3);
console.log(result4);

// FUNCTION SCOPE ==============================
// variable yang di define di dalam function hanya bisa diakses
// di dalam function tsb

function greet() {
  const hello = "Hello";
  console.log(hello); // ini bisa
  return hello;
}
greet(); // ini bisa di eksekusi tanpa menggunakan return
console.log(greet()); // ini hanya bisa di eksekusi jika ada return

//console.log(hello); // ini gak bakalan bisa


// PARAMETER & ARGUMENT =========================
// parameter -> variable yang mewakili value dari
// argument yg dimasukkan

// argument -> value yang dimasukkan saat pemanggilan function

//       parameter 👇
function greeting(name: string) {
  const hello = "Hello";
  return hello + " " + name;
}

//            argument 👇
console.log(greeting("Budi"));// parameter name
console.log(greeting("Siti"));// parameter name
console.log(greeting("Joko"));

// DEFAULT PARAMETER ===========================

function multiply(a: number, b: number = 1) {
  console.log(a);
  console.log(b);
  return a * b;
}

console.log(multiply(5, 70)); // parameter a dan b 
console.log(multiply(5));

// REST PARAMETER ==============================
// mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// NESTED FUNCTION ==============================
// fungsi yang berada di dalam fungsi
// inner function bisa akses parameter dari outer function
// outer function tidak bisa akses parameter dari inner function

// outer function
function getMessage(firstName: string) {
  // inner function 1
  function sayHello() {
    return "Hello " + firstName + ",";
  }

  // inner function 2
  function welcomeMessage() {
    return "Welcome to Purwadhika!";
  }

  return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("Budi"));

// CLOSURE ==========================================
// inner function selalu mempunyai akses ke variable dan parameter dari outer function
// bahkan setalah function tsb di return

function greeting1(name: string) {
  const defaultMessage: string = "hello";

  return function () {
    return defaultMessage + " " + name;
  };
}

const result5 = greeting1("Budi");

console.log(result5());

// RECURSIVE ==========================================
// fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

// ARROW FUNCTION ====================================
// shortcut untuk menuliskan function expression

// contoh function expression
const square2 = function (number: number) {
  return number * number;
};

// contoh jika diubah ke arrow function
const square3 = (number: number) => {
  return number * number;
};

// kalo misalnya cuman 1 line bisa di bikkin kaya gini 👇
const square4 = (number: number) => number * number;
