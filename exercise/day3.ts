// ============== NUMBER 1 =============
// Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ ...
// ■ 9 x 10

const input: number = 9;
const limit: number = 10;

for (let i = 1; i <= limit; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}

// ============== NUMBER 2 ==========
// Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome

const word: string = "madam";
let wordSplitReverse = word.split("").reverse().join("");

console.log(word);
console.log(wordSplitReverse);

if (word === wordSplitReverse && wordSplitReverse === word) {
  console.log(`${word} is palindrome`);
} else {
  console.log(`${word} is not palindrome`);
}

let word1 = "madam";
let reverse = "";

for (let i = word1.length - 1; i >= 0; i--) {
  reverse += word1[i];
  console.log(reverse);

  if (word1[i] === reverse) {
    console.log(`${word1} is palindrome`);
  } else {
    console.log(`${word1} is not palindrone`);
  }
}

// ============= NUMBER 3 =============
//  Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”

const cm: number = 100000;
let result: number = cm / 100000;
console.log(`${result} Km`);

// ============= NUMBER 4 ==============
// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

// CARA 1
let num: number = 1000;
let toRupiah: string = num.toLocaleString("id");
let rp: string = "Rp";

console.log(`${rp} ${toRupiah}`);

// CARA 2
const rupiah = new Intl.NumberFormat("id", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
}).format(num);

console.log(rupiah);

// ============ NUMBER 5 ===============

// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

const string: string = "Hello world";
console.log(string.replace("ell", ""));

// =========== NUMBER 6 ===============

// Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”

const inputString: string = "hello world";
const words: string[] = inputString.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

console.log(words.join(" "));

// ========= NUMBER 7 ================

// Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

const inputStrings: string = "The QuiCk BrOwN Fox";
let swappedString: string = "";

for (let i = 0; i < inputStrings.length; i++) {
  const char: string = inputStrings[i];

  if (char === inputStrings[i].toUpperCase()) {
    swappedString += char.toLowerCase();
  } else {
    swappedString += char.toUpperCase();
  }
}
console.log(swappedString);

// console.log(swappedString);
// ======== NUMBER 8 =================
// Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42

const numbers1: number = 42;
const numbers2: number = 27;

const largestNumber = Math.max(numbers1, numbers2);
console.log(`The largest number is ${largestNumber}`);

// ======== NUMBER 9 =================

// Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

const num1: number = 42;
const num2: number = 27;
const num3: number = 18;

const smallest: number = Math.min(num1, num2, num3);
const largest: number = Math.max(num1, num2, num3);
const middle: number = num1 + num2 + num3 - smallest - largest;

// ======== NUMBER 10 =================
// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1

const input1: any = "";

if (typeof input1 === "string") {
  console.log(1);
} else if (typeof input1 === "string") {
  console.log(2);
} else {
  console.log(3);
}

// ======== NUMBER 11 =================
// Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

let str: string = "An apple a day keeps the doctor away";
console.log(str.toLowerCase().replaceAll("a", "*"));
