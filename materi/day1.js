console.log ("Hello World");

// ini adalah coment 1
// ini adalah coment 2

/* 
ini coment
ini coment
*/

var person1 = "Hadi";
let person2 = "Nur";
const person3 = "Rochman";
let person4 = "suhadi Nur Rochman";

var person = "Hadi Nur Rochman"; // bisa dengan data yang sama karena var adalah global variable

person2 = "Hadi2"; // mengubah nilai variable person2 yang sudah terisi sebelumnya

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);


// ======================== VARIABLE ========================
// 1. var : sudah tidak digunakan karena var adalah global variable dan 1 variable dapat menampung banyak data dan tidak akan terjadi error yang artinya tingkat ketelitian sangat rendah bahkan tidak ada
// 2. let : fleksible atau dapat diubah 
// 3. const : variable tidak dapat diubah atau ditumpuk


// Rules in naming variable
// 1. hanya bisa dinamakan menggunakakn : huruf, angka atau simbol (“S”) dan “_”
// 2. karakter awal tidak boleh angka
// 3. case sensitif

// Data Types
// 1. Primitive data types : string, number, boolean, null & undefined
// 2. Non primitive data types : object dan array

// string 		: data huruf diawali dan diakhiri dengan tanda “, ex : “Hello World”
// number 		: berisi data angka, ex : 1, 2, 3 
// boolean 		: berisi 2 value yaitu : true & false
// null 		: menandakan bahwa value masih kosong dan belum di isi
// undefined 	: tidak terdifinisi atau javascrip tidak tau apa isi dari value

// difference between null and undefined : 
// const null : value belum terisi;
// const undefined : value sudah terisi tetapi tidak terdifinisikan
