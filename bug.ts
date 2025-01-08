function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result:number = add(5,3);
console.log(result); //output:8
result = subtract(10,5);
console.log(result); //output:5
result = multiply(5,3);
console.log(result); //output:15
result = divide(10,0);
console.log(result); //this will throw an error because of the if condition