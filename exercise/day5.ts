// NOMOR 1
// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

function arrays(arr: number[]) {
  const lowest = Math.min(...arr);
  const highest = Math.max(...arr);

  // hitung total
  const total = arr.reduce((a, b) => a + b);
  // Hitung rata rata
  const average = total / arr.length;

  // Return the results
  return { lowest, highest, average };
}
const array: number[] = [12, 5, 23, 18, 4, 45, 32];
const results = arrays(array);
console.log(results);

// NOMOR 2
// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function fruits(fruit: string[]) {
  const allButLast = fruit.slice(0, -1).join(", "); // tambah spasi setelah koma
  const lastWord = fruit[fruit.length - 1];

  return `${allButLast}, and ${lastWord}`;
}

const fruitsNames: string[] = ["apple", "banana", "cherry", "date"];
console.log(fruits(fruitsNames));

// NOMOR 3
// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

function secondSmallest(numbers: number[]) {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  return sortedNumbers[1];
}

const numbers: number[] = [5, 3, 1, 7, 2, 6];
console.log(secondSmallest(numbers));

// NOMOR 4
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function sumArrays(array1: number[], array2: number[]) {
  const sum: number[] = [];

  for (let i = 0; i < array1.length; i++) {
    sum[i] = array1[i] + array2[i];
  }
  return sum;
}
const arrayNumber1: number[] = [1, 2, 3];
const arrayNumber2: number[] = [3, 2, 1];

console.log(sumArrays(arrayNumber1, arrayNumber2));

// NOMOR 5
// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

function elementArr(arr: number[], newElement: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === newElement) {
      return arr;
    }
  }

  arr.push(newElement);

  return arr;
}

const arr1: number[] = [1, 2, 3, 4];
console.log(elementArr(arr1, 4));

const arr2: number[] = [1, 2, 3, 4];
console.log(elementArr(arr2, 7));

//=====================================================================================

// NOMOR 1
// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function sumNumb(array: any[]) {
  let sum = 0;

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i]; // menambahkan angka hasil loop
    }
  }

  return sum;
}

const mixedArr: any[] = ["3", 1, "string", null, false, undefined, 2];
console.log(sumNumb(mixedArr));

// NOMOR 2
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]



// NOMOR 3
// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

function combineArr(arr1: number[], arr2: number[]) {
  const combinedArray = [...arr1, ...arr2]; // bisa spread operator atau method concat
  return combinedArray;
}

const arrs1: number[] = [1, 2, 3];
const arrs2: number[] = [4, 5, 6];
console.log(combineArr(arrs1, arrs2));

// NOMOR 4
// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// function getDuplicate(arr: number[]) {
//   const duplicates: number[] = [];

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     if (seen[num]) {
//       let alreadyExists = false;
//       for (let j = 0; j < duplicates.length; j++) {
//         if (duplicates[j] === num) {
//           alreadyExists = true;
//           break;
//         }
//       }
//       if (!alreadyExists) {
//         duplicates.push(num); 
//       }
//     } else {
//       seen[num] = true; 
//     }
//   }

//   return duplicates;
// }

// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// console.log(getDuplicate(arr));

// NOMOR 5
// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

function arrayDifference(arrayNumbDiff1: number[], arrayNumbDiff2:number[]) {
  const diff1 = arrayNumbDiff1.filter(num => !arrayNumbDiff2.includes(num));
  const diff2 = arrayNumbDiff2.filter(num => !arrayNumbDiff1.includes(num));
console.log(diff1);

  return [...diff1, ...diff2];
}

const arrays1 : number [] = [1, 2, 3, 4, 5];
const arrays2 : number []= [3, 4, 5, 6, 7];
console.log(arrayDifference(arr1, arr2)); // Output: [1, 2, 6, 7]

// ============================================================================

// NOMOR 1

function primitiveArr(arr: any[]) {
  const primitives: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // cek apakah element adalah tipe data primitif
    if (typeof element === "number" || typeof element === "string" || typeof element === "undefined" || element === null) {
      primitives.push(element); // tambahkan tipe primitif ke array
    }
  }
  return primitives;
}

let arrPrimitive = [1, [], undefined, {}, "string", {}, []];
console.log(primitiveArr(arrPrimitive));

// NOMOR 2
// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

// function sumDuplicates(arr) {
//   let sumDuplicateNumb = 0;
//   let resultSumDuplicateNumb : number = 0

//   for (let i = 0; i <= arr[i].length; i++) {

//     for(let j = i; i <arr[i].length ; j++) {
  
//     }
//       let resultSumDuplicateNumb = arr[i] + arr[j];



//   return sumDuplicateNumb; 
// }
// }
// let arrDup = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// console.log(sumDuplicates(arrDup)); // Output: 40

// NOMOR 3
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

function rockPaperScissors(
  playerChoice: "rock" | "paper" | "scissors"
): string {

  const choices: ("rock" | "paper" | "scissors")[] = [
    "rock",
    "paper",
    "scissors",
  ];

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`Player choise: ${playerChoice}`);
  console.log(`Computer choise: ${computerChoice}`);


  if (playerChoice === computerChoice) {
    return "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
}
console.log(rockPaperScissors("scissors"));
