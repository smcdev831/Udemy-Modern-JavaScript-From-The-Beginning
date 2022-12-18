let val;

// Number to string
val = 5;
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4 + 4);
console.log(val);
console.log(typeof val);
console.log(val.length);

// Bool to string
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

// Date to string
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

// Array to string
val = String([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);
console.log(val.length);

// toString()
val = (5).toString();
val = true.toString();

// String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([1, 2, 3]);

val = parseInt("100.30");
val = parseFloat("100.30");

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
