// Write a function that receives 2 parameters target: number and araays: []number
// Example:

// Arrays: [4,8,2,5,9,3,1]
// Target: 13

// Output : [1,3]
// Misal target 13. Cari angka di arrays yg kalo d jumlah jadi 13. Di sini ada angka 8 dan 5 = 13
// Return index angka 8 dan 5 yaitu 1 dan 3 jadi outputnya [1,3]


function getNumbers(target: number, arrays: number[]) {

  for (let i = 0; i < arrays.length; i++) {

    console.log(arrays.length);
    

    for (let j = i ; j < arrays.length; j++) {

      if (arrays[i] + arrays[j] === target) {

//console.log(i);
//console.log(j);

        console.log(i , j);

      }
    }
  }
}

const targetNumber: number = 13;
const arrNumber: number[] = [4, 8, 2, 5, 9, 3, 1];

getNumbers(targetNumber, arrNumber);
