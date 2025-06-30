# JavaScript Array Methods Demo

This project demonstrates the usage of several key JavaScript array methods using a dataset of inventors and people. These methods include `filter`, `map`, `sort`, `reduce`, `forEach`, and other supporting techniques like `localeCompare` and spread syntax (`...`).

---

## 📌 1. `filter()`
### ➤ Purpose:
Returns a new array with elements that pass the test implemented by the provided function.

### ✅ Example:
```js
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```

---

## 📌 2. `map()`
### ➤ Purpose:
Creates a new array populated with the results of calling a function on every element.

### ✅ Example:
```js
const names = ['Alice', 'Bob'];
const upper = names.map(name => name.toUpperCase());
console.log(upper); // ['ALICE', 'BOB']
```

---

## 📌 3. `sort()`
### ➤ Purpose:
Sorts the elements of an array **in place** using a compare function.

### ✅ Example:
```js
const nums = [10, 5, 8];
nums.sort((a, b) => a - b);
console.log(nums); // [5, 8, 10]
```

---

## 📌 4. `reduce()`
### ➤ Purpose:
Applies a function against an accumulator to reduce the array to a single value.

### ✅ Example:
```js
const nums = [1, 2, 3];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6
```

---

## 📌 5. `forEach()`
### ➤ Purpose:
Executes a function for each array element. It doesn’t return anything.

### ✅ Example:
```js
const fruits = ['apple', 'banana'];
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
```

---

## 📌 6. `localeCompare()`
### ➤ Purpose:
Compares two strings based on the current locale.

### ✅ Example:
```js
const arr = ['z', 'ä', 'a'];
arr.sort((a, b) => a.localeCompare(b));
console.log(arr); // ['a', 'ä', 'z'] (in some locales)
```

---

## 📌 7. Spread Syntax `[...iterable]`
### ➤ Purpose:
Expands iterable elements into individual elements (useful for copying or converting).

### ✅ Example:
```js
const nodeList = document.querySelectorAll('div');
const nodeArray = [...nodeList]; // Convert NodeList to Array
```

---

## ✅ Use Case Summary from Code
- **filter**: Inventors born in the 1500s.
- **map**: Full names of inventors.
- **sort**: Inventors by birth year, and by years lived.
- **reduce**: Total years all inventors lived.
- **forEach**: Calculating each inventor's age.
- **localeCompare**: Sorting people alphabetically by last name.
- **spread syntax**: Converting NodeList to array for further operations.
