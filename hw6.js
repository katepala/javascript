function checkProbabilityTheory(count){
  let countEven = 0;
  let countOdd = 0;
  
  for (let i = 0; i < count; i++) {
  let i= Math.floor(Math.random() * 1000 + 100); // шось тут не те ))

    if (i % 2 === 0) {
      countEven++;
    } 
    else {
      countOdd++;
    }
  }
  let evenPercentage = (countEven / count) * 100;
  let oddPercentage = (countOdd / count) * 100;

  console.log("Кількість згенерованих чисел: " + count);
  console.log("Парних: " + countEven);
  console.log("Непарних: " + countOdd);
  console.log("Відсоток парних: " + evenPercentage + " %");
  console.log("Відсоток непарних: " + oddPercentage + " %");
  
}
checkProbabilityTheory(15);
