const dog = {
    legs: 4,
    name: "Ponchik",
    color: "white",
    age: 5, 
}

dog.getInfo = function() {
  return this; 
 }; 
console.log(dog.getInfo());
dog.eyes = 'green';
console.log(dog.getInfo());
 