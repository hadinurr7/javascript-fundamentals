// EXERCISE

/* 
Write a code to find area of rectangle.
 ○ Example : length = 5, width = 3
 ○ Output : 15

Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16

Write a code to find diameter, circumference and area of a circle.
○ Example : radius = 5
○ Output : diameter = 10, circumference = 31.4159, area = 78.539


Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
○ Example : 400 days → 1 year, 1 month, 5 days
○ Example: 366 days → 1 year, 0 month, 1 day
 */

//======= ANSWER

//NUMBER 1
const rectangleLenght: number = 5;
const rectangleWidth: number = 3;
const area: number = rectangleLenght * rectangleWidth;

console.log(area);

//NUMBER 2
const rectangleLenght2: number = 5;
const rectangleWidth2: number = 3;
const perimeter: number = 2 * (rectangleLenght2 + rectangleWidth2);

console.log(perimeter);

//NUMBER 3
const circleRadius: number = 5;
const pi: number = Math.PI; // Pi 3.14
const circleDiameter: number = circleRadius * 2;
const circleCircumference: number = pi * (circleRadius * 2);
const circleArea: number = pi * 5 ** 2;

console.log(circleDiameter);
console.log(circleCircumference);
console.log(circleArea);

console.log(
  `diameter ${circleDiameter}, circumference ${circleCircumference}, area${circleArea}`
);

//NUMBER 4
const angleA: number = 80;
const angleB: number = 65;
const totalAngle: number = 180;
const angleC: number = totalAngle - (angleA + angleB);
// result
console.log(angleC);

// NUMBER 5
const hari: number = 400;
// mencari ada berapa tahun dalam 400 hari
const tahun: number = Math.floor(hari / 365);
// mencari berapa bulan dari sisa hari (400 % 365)
const bulan: number = Math.floor((hari % 365) / 30);
// mencari berapa sisa hari dari (400 % 365) % 30)
const tanggal: number = Math.floor((hari % 365) % 30);

// Check
console.log(tahun);
console.log(bulan);
console.log(tanggal);

// result
console.log(`${tahun} years ${bulan} months ${tanggal} days`);

// NUMBER 6
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");

// mengubah hari dalam bentuk millisecconds
const convertTimeDifference: number = date1.getTime() - date2.getTime();
// mengubah - menjadi +
const timeDifference: number = Math.abs(convertTimeDifference);
// mengubah perbedaan waktu dalam bentuk milliseconds
const dayDifference: number = timeDifference / (1000 * 3600 * 24);

// check
console.log(date1.getTime());
console.log(date2.getTime());
console.log(timeDifference);
console.log(dayDifference);
// result
console.log(`Perbedaan hari antara date 1 & date 2 adalah ${dayDifference}`);
