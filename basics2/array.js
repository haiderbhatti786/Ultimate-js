// //
// // Shallow copy
// //=>a shallow copy of an object is a copy  whose propertiees share the same refernce
// // deepcopy
// // -> properties dont share the same refernce
// ///////////////////////   Array   ///////////////
// ///////////////////////   methods ///////////////
const arr = [
  "hello",
  "world",
  "this",
  "is",
  "basic",
  "array",
  "manipulation",
  "and",
  "testing",
  "ok",
];
// const arr2 = new Array(1, 2, 3, 4);
// // arr.push("Danish bhatti"); // push array ke end per naya element insert krta hai
// // arr.pop(); // last value ko remove kr de ga
// // arr.unshift("Haider"); // ye array ke start per element add krta hai   | magr ye acha nahi hai is pc per load perta hai
// // arr.shift(); // start se aik element remove krta hai
// console.log(arr.includes("world")); // true ae ga
// console.log(arr.indexOf("world")); //   1  ae ga
// console.log(arr.join()); //  type string ho jae ga
// //  join hamari array ko string me convert krta hai

// slice aur splice

//1-> slice
console.log(arr.slice(2, 8)); // hello world ke bad sre ke sare ai ge  | ye original se cher char nahi krta hai
console.log(arr.splice(0, 2)); // hello world ke bad sre ke sare ai ge | ye original se kat leta hai
console.log(arr); // splice ne hello aur world kat diye
