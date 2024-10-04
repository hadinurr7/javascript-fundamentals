/*
Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number

● Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number

● Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6

● Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

● Write a code to print the first N fibonacci numbers
○ Example: 15 → 610 
*/



// ======== NUMBER 1 =============
//psudocode Nomor 1
// 1. membuat variable bernama number bernilai 25
// 2. cek apakah 25 bilangan genap atau ganjil
// 3. apakah number % 2 === 0
// 4. jika true console.log, jika false console.log

const number1: number = 25;

if (number1 % 2 === 0) {
  console.log(`${number1} is even number`);
} else {
  console.log(`${number1} is odd number`);
}



// ========== NUMBER 2 ============
// psudocode Nomor 2 
// 1. cek apakah angka 7 adalah bilangan primer atau bukan
// 2. bilangan primer adalah bilangan yang hanya dapat di bagi dengan 2 bilangan yaitu 1 dan angka itu sendiri
// 3. membuat variable dengan tipe data number dengan nilai 7
// 4. membuat variable divider sebagai jumlah angka modulo
// 5. loop untuk mencari berapa jumlah angka modulo 
// 6. i = 1 lalu apakah i lebih kecil sama dengan number2 (7)
// 7. jika true 
// 8. lalu apabila number2 % i === 0 maka divider + 1
// 9. buat if statement apakah 7 adalah bilangan prima atau bukan

//  CARA A
const number2: number = 7;
let divider = 0;
 
for (let i = 1; i <= number2; i++) {
  if (number2 % i === 0) {
    divider++;
  }
}

if (divider === 2) {
  console.log(`${number2} is prime number`);
} else {
  console.log(`${number2} is not prime number`);
}
// ==========================================
// CARA B
const numberCek: number = 6;
let isPrime: boolean = true;

for (let i = 1; i <= numberCek; i++) {
  if (i !== 1 && i !== numberCek && numberCek % i === 0) {
    console.log(i);
    isPrime = false;
  }
}
if (isPrime) {
  console.log(`${numberCek} is prime number`);
} else {
  console.log(`${numberCek} is not Prime number`);
}

// CARA C

// const num: number = 6;
// let isPrime: boolean = true;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % 2 === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }




// ========= NUMBER 3: ==========
// Psudocode nomor 3
// mencari total dari 1 ke N
// 1. membuat variable bernilai 3
// 2. membuat variable bernilai 0 sebagai total nilai dari 1-N
// 3. loop 

const number4: number = 5;
let sum: number = 0;
let messagePlus: string = "";

for (let i = 1; i <= number4; i++) {
  sum += i;

  if (i === number4) {
    messagePlus += i + " ";
  } else {
    messagePlus += i + " + ";
  }
}

console.log(sum);
console.log(`${messagePlus} = ${sum}`);





//======= NUMBER 4 ==============

// A
const number6: number = 4;
let factNumb: number = 1;
let messagePlus2: string = ""

for (let i = number6 ; i >= 1; i--) {
  factNumb *= i; 

  if (i === 1) {
    messagePlus2 += i + " ";
  } else {
    messagePlus2 += i + " x ";
  }
}
console.log(factNumb);
console.log( `${messagePlus2} = ${factNumb}`);





// ========= NUMBER 5 ==========

const fn = 15;
let n1 = 0;
let n2 = 1;

for (let i = 0; i < fn; i++) {
  let nextFib: number = n1+n2
  n1 = n2;
  n2 = nextFib;
}
console.log(n1);
