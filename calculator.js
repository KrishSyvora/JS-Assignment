function Calculator() {
    this.read = function() {
        
      this.value1 = prompt('Enter the first value:');
      
      this.value2 = prompt('Enter the second value:');
    };
  
    this.sum = function() {
      return this.value1 + this.value2;
    };
  
    this.mul = function() {
      return this.value1 * this.value2;
    };
}

const calculator = new Calculator();

calculator.read();

console.log('Sum:', calculator.sum());

console.log('Multiplication:', calculator.mul());