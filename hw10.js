const random = "Happiness, Time, Task, Apple, Wonderful, Joyful";
const pattern = /\b[^Aa, ]{6,}/g;
const matches = random.match(pattern);
console.log(matches);



