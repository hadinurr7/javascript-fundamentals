// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// ● Parameters : height → triangle height
// ● Example input: 5

function generareTriangle(height: number) {
  let result = " ";

  for (let i = 1; i <= height; i++) {
    let temp = " ";

    for (let j = 1; j <= i; j++) {
      temp += j + " ";
    }

    result += temp + "\n";
  }
  return result;
}
const triangle = generareTriangle(5);
console.log(triangle);

// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

function createTriangle(height: number) {
  let num = 1;
  let triangle = "";

  for (let i = 1; i <= height; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
      let doubleDigits = "";

      if (num < 10) {
        doubleDigits = "0" + num;
        //console.log(doubleDigits); // cek hasil seharusnya 01 dst
      } else {
        doubleDigits = String(num);
      }

      row += doubleDigits;

      if (j < i - 1) {
        row += " ";
      }
      num++;
    }

    triangle += row;
    if (i < height) {
      triangle += "\n";
    }
  }

  return triangle;
}

console.log(createTriangle(4));

// ● Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fizzBuzz(n: number) {
  for (let i = 1; i <= n; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    //console.log(i); // cek hasil i
    //console.log(output); // hasil output

    console.log(output === "" ? i : output);
  }
}
fizzBuzz(15);

// ● Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

function removeOddNumbers(arr: number[]) {
  return arr.filter((num) => num % 2 === 0);
}

const originalArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray: number[] = removeOddNumbers(originalArray);
console.log(evenNumbersArray);

// ● Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

function messageSplit(message: string) {
  return message.split(" ");
}

const messageString: string = "Hello World";
const messageToArr: string[] = messageString.split(" ");

console.log(messageToArr);

// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z

function calculateBMI(weight: number, height: number) {
  const bmi = weight / (height * height);

  console.log(bmi); //cek perhitungan  bmi

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    // bmi lebih besar atau =  18.5 dan lebih kecil atau = 24.9
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    // bmi lebih besar atau =  25.0 dan lebih kecil atau = 29.9
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    // bmi lebih besar atau =  30.0 dan lebih kecil atau = 39.9
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(calculateBMI(70, 1.75)); // satuan kg dan meter
