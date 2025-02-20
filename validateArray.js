function validateString(input, callback) {  
  setTimeout(function () {  
    if (typeof input === "string" && input === input.toLowerCase()) {  
      return callback(null, true);  
    }  
    return callback(new Error('Invalid string'), null);  
  }, 500);  
}  

function validateArray(arr, callback) {
  const result = {};  
  
  arr.map((item, index) => {
    validateString(item, (err, isValid) => {
      result[item] = isValid || false;
      
      if (Object.keys(result).length === arr.length) {
        callback(result);  
      }
    });
  });
}

const inputArray = ["first", "Second", "thiRd", 4, false, "true"];

validateArray(inputArray, (finalResult) => {
  console.log(finalResult);
});
