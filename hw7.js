const dog = {
    legs: 4,
    name: "Ponchik",
    color: "white",
    age: 5, 
}
dog.getInfo = function() {
     for (let key in dog){
    if(typeof dog[key] !== 'function')
      console.log(`${key}: ${dog[key]}`);
  }
}

dog.getInfo();
dog.eyes = 'green';
dog.getInfo();
