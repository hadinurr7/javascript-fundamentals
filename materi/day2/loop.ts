//======== FOR LOOPS

// Rangkaian instruksi yang dillakukan berulang kali hingga kondisinya tidak terpenuhi

// type loops :
// 1. for loop
// 2. while loop
// 3. do while loop

// FOR LOOP mempunyai 3 statement :
// 1. menginisialisasi variable dari looping itu sendiri
// 2. mendefine dari looping tersebut
// 3. kode yang di eksekusi di akhir setiap iterasi

// Syntax
// for(statement 1 ; statement 2 ; statement 3) {
// code block yang akan di ulang - ulang
// }

// =========================== LOOP STATEMENT (perulangan)
// rangkaian instruksi yang dilakukan berulangkali hingga kondisinya
// tidak terpenuhi

// type loop : for loop, while loop, dan do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di eksekusi diakhir setiap iterasi

// syntax : for(statement1;statement2;statement3){
// code block yang akan diulang-ulang
//}

for (let i = 0; i < 6; i++) {
  console.log("hello world");
}

// WHILE LOOP

let i: number = 11;

while (i < 10) {
  console.log("hello world");
  i++;
}

// DO WHILE LOOP

let count: number = 1;

do {
  console.log("ini iterasi ke: " + count);
  count++;
} while (count <= 5);

// ====================== BREAK
// untuk menghentikan loop

let sum: number = 0;
while (true) {
  console.log("sum : " + sum);

  if (sum >= 5) break;

  sum++;
}

// ===================== CONTINUE
// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;

  console.log(i);
}