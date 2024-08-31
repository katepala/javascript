function pow(x, y) {
    if (y === 0) return 1;
    if (x === 0) return 0;
    if (x === 1) return 1;
  
    let result = 1;
    while (y !== 0) {
      result = result * x;
      y = y - 1;
    }
  
    return result;
}

const x = 2;
const y = 3;

console.log (pow(x, y));