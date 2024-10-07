// // return value
// function square(lenght: number, width: number) {
//   return lenght * width;
// }
// let area = square(4, 5);
// console.log(area);

// // return value
// function sayHello (name : string) {
//     const say = "hello " + name
//     return say
// }
// const result : string = sayHello("Hadi")
// console.log(result);

function fullName (firstName : string , middleName : string , lastName :  string) {
    console.log(`${firstName} ${middleName} ${lastName}`);
}
fullName("Hadi","Nur","Rochman")

function getHello(word: string) {
  console.log("Hello " + word);
  return word;
}
getHello("Hadi");

// Hello Suhadi Nur Rochman

function sayHello(firstName: string, middleName: string, lastName: string) {
  console.log(`Hello ${firstName} ${middleName} ${lastName}`);
}
sayHello("Suhadi", "Nur", " Rochman");

function wordHello(word: string, nama: string) {
  return word + " " + nama;
}
console.log(wordHello("Hello", "Hadi"));

