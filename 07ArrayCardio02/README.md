# NOTES FOR ARRAY CARDIO 2

### 1. some() : Array.prototype.some()
The some() method of Array instances tests whether `at least one element in the array passes the test` implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```js 
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
//Expected output = true
console.log(array.some(even)); 
```

### 2. every() : Array.prototype.every()
The every() method of Array instances tests whether `all elements in the array pass the test` implemented by the provided function. It returns a Boolean value.

```js
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// Expected output: true
```

### 3. find()
The find() method of Array instances returns `the first element in the provided array that satisfies the provided testing function`. If no values satisfy the testing function, undefined is returned.

```js
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);
// Expected output: 12
```

### 4. findIndex() 
The findIndex() method of Array instances returns the `index of the first element in an array that satisfies the provided testing function`. If no elements satisfy the testing function, -1 is returned.

```js
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```

### 5. splice()
The splice() method of Array instances changes the contents of an array by `removing or replacing existing elements and/or adding new elements in place.`

`In Place`: In Place algo modifies the input in place, without creating a separate copy of the data structure.

```js
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```
`SYNTAX:`
```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
```

### 6. slice()
The slice() method of Array instances `returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)` where start and end represent the index of items in that array. The original array will not be modified.

A `shallow copy` means that you're copying only the top-level elements. If the array contains primitive values (like `numbers or strings`), the `values themselves are copied`. If it contains objects or arrays, only their `references are copied`—not the actual nested content.

```js
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

`Syntax`
```js
slice()
slice(start)
slice(start, end) //end not included
```

### 7. Spread Syntax (...)
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
```
