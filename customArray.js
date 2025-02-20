class CustomArray {
    constructor() {
        this.data = {}; // Object to store array elements
        this.count = 0; // Keep track of array length
    }

    // Push: Adds an element at the end
    push(value) {
        this.data[this.count] = value;
        this.count++;
        return this.count;
    }

    // Pop: Removes and returns the last element
    pop() {
        if (this.count === 0) return undefined;
        this.count--;
        const value = this.data[this.count];
        delete this.data[this.count];
        return value;
    }

    // Shift: Removes and returns the first element
    shift() {
        if (this.count === 0) return undefined;
        const firstElement = this.data[0];

        // Shift all elements left
        for (let i = 0; i < this.count - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.count - 1];
        this.count--;
        return firstElement;
    }

    // Unshift: Adds an element at the beginning
    unshift(value) {
        for (let i = this.count; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = value;
        this.count++;
        return this.count;
    }

    // Length: Returns the length of the array
    length() {
        return this.count;
    }

    // // Splice: Removes/Adds elements at a specific index
    // splice(index, deleteCount, ...items) {
    //     const removedItems = [];

    //     // Remove elements
    //     for (let i = 0; i < deleteCount; i++) {
    //         if (this.data[index + i] !== undefined) {
    //             removedItems.push(this.data[index + i]);
    //             delete this.data[index + i];
    //         }
    //     }

    //     // Shift elements to accommodate new items
    //     if (items.length > 0) {
    //         for (let i = this.count - 1; i >= index; i--) {
    //             this.data[i + items.length] = this.data[i];
    //         }
    //         items.forEach((item, i) => {
    //             this.data[index + i] = item;
    //         });
    //         this.count += items.length - deleteCount;
    //     } else {
    //         this.count -= deleteCount;
    //     }

    //     return removedItems;
    // }

    // IndexOf: Finds the index of an element
    indexOf(value) {
        for (let i = 0; i < this.count; i++) {
            if (this.data[i] === value) return i;
        }
        return -1;
    }

    // ForEach: Iterates over each element
    forEach(callback) {
        for (let i = 0; i < this.count; i++) {
            callback(this.data[i], i, this);
        }
    }
}

// Example usage:
const arr = new CustomArray();
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr.length()); // Output: 3
console.log(arr.pop()); // Output: 30
console.log(arr.shift()); // Output: 10
arr.unshift(5);
console.log(arr.data); // Output: { '0': 5, '1': 20 }
console.log(arr.indexOf(20)); // Output: 1
arr.forEach((val) => console.log(val)); // Output: 5, 20
arr.splice(1, 1, 40, 50);
console.log(arr.data); // Output: { '0': 5, '1': 40, '2': 50 }
