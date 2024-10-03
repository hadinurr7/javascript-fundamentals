//=========== TYPESCRIPT ============\\


//const message = "Hello World"


const message :string =  "Hello World"
const person_Name :string = "Siti Khadijah"
const person_Name2 :string = "Nur"



// ======== STRING BUILD IN METHOD ========= \\

console.log(person_Name.toLowerCase()); // mengubah semua huruf yang ada di nilai variable menjadi huruf kecil
console.log(person_Name.toUpperCase()); // mengubah semua huruf yang ada di nilai variable menjadi huruf besar
console.log(person_Name.replace("S","N")); // mengganti karakter huruf / karakter "S" yang berada di awal dari nilai variable
console.log(person_Name.replaceAll("i","o")); // mengganti semua karakter "i" menjadi"o"
console.log(person_Name.split("")); // mengubah nilai value menjadi array per huruf/karakter berdasarkan isi split
console.log(person_Name.split(" ")); // mengubah nilai value menjadi array berdasarkan isi split (spasi)
console.log(person_Name.split("i")); // mengubah nilai value menjadi array berdasarkan isi split (i)
console.log(person_Name.concat(person_Name).concat(person_Name2)); // untuk menggabungkan nilau value 1 dengan value 2
console.log(person_Name.slice(1,4)); // slice menampilkan nilai value berdasarkan indeks 


const nama1 :string = person_Name.toLowerCase();
console.log(person_Name.slice(1,4)); // slice menampilkan nilai value berdasarkan indeks 


// ========= TEMPLATE LITERALS ============= \\
const name3 :string = "Hadi Nur Rochman";
const message1 :string = "Welcome";
const message2 : string = `Welcome ${name3}`;

console.log (message2);
console.log( `${message1} ${name3}`);


// ======== NUMBER BUILD IN METHOD ========= \\

const angka :string = "2000"
console.log(typeof angka); // typeof untuk menampilkan tipe data dari sebuah value
console.log(typeof parseInt (angka)); //parseInt konversi tipe data string menjadi number (integer)

Number(angka)
console.log(Number(angka)); //Number untuk konversi tipe data string menjadi number
console.log(typeof Number(angka)); //menampilkan tipe data setelah dikonversi ke number

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//======= TYPE CONVERSION =====

// String conversion
const angka1 :number = 20;
console.log(String(123)) ;
console.log(angka1.toString()); // mengubah tipe data dari variable angka1 menjadi string

const angka2 :number = 100;
console.log(angka2.toString());


// =========Boolean conversion 

// BOolean harus meempunyai value selain dari 0 & " " (string kosong)
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("0"));


// ============== Date Data Types ======= \\

// Get method
const now: Date = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());  
console.log(now.getHours());
console.log(now.getMinutes());

console.log(now.getTime())

now.setDate(10)
now.setMonth(1)
now.setFullYear(1998)

console.log(now)

// Basic operator
// +
// -
// *
// /
// %
//**

console.log(1 + 2 ); // tambah
console.log(6 - 3); // kurang
console.log(6 / 6); // bagu
console.log(1 * 2); // kali
console.log(2 ** 2 ); // pangkat
console.log(10 % 2); // sisa bagi

// const a = 10;
// const b = 8;
// const c = 12;

// console.log(a - b);
// console.log(b * a);

// ======= MODIFY IN PLACE ==========

let n: number = 4;
 n+=2; // n = n+2
console.log(n);

n++ // n = n+1
console.log(n);


// INCREMENT & DECREMENT
let counter: number = 2;
counter++; // increment = counter + 1
counter--; // decrement = counter +-1

console.log(counter);

// POSTFIX & PREFIX
let counter2: number = 2;
//  console.log(++counter2); // prefix
 console.log(counter2++); // postfix
 
 // COMPARISON OPERATOSS (OPERATOR PERBANDINGAN)
// console.log(5 == "5"); // hanya cek value
// console.log(5 === "5"); // cek value dan tipe data

console.log(5 < 8);
console.log(5 > 6);
console.log(5 <= 5);
console.log(5 < 5);


// ===== MATH =======

// Math.ceil : pembulatan angka ke atas
console.log(Math.ceil(4.7));

// Math.floor : pembulatan ke bawah
console.log(Math.floor(4.7));

// Math round : pembulatan ke angka terdekat
console.log(Math.round(5.4));
console.log(Math.round(5.5));

// Math.max : mengembalikan angka terbesar dari kumpulan angka
console.log(Math.max(1, 2, 3, 4, 5));

// Math.max : mengembalikan angka terkecil dari kumpulan angka
console.log(Math.min(1, 2, 3, 4, 5));

// Math.Abs : menghilangkan angka negatif
console.log(Math.abs(-11));
console.log(Math.abs(-20));

// Math.random : menghasilkan angka acak antara 0-1
console.log(Math.random());



