function deepClone(obj){
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    let clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

const original = {
    name: "Krish",
    age: 21,
    greet: function () {
        console.log("Hello, " + this.name);
    },
    nested: {
        hobby: "Dance",
    },
};

const clone = deepClone(original);
clone.name = "Pushparaj";
clone.nested.hobby = "Sports";

console.log(original.name); //Krish 
console.log(clone.name);    //Pushparaj
console.log(original.nested.hobby); //dance 
console.log(clone.nested.hobby);    //sports