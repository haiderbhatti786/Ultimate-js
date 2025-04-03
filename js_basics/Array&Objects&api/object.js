// singleton
// singleton sirf tab banta hai jab costurtor se banai
// object literals
const sym = Symbol("key1");
let user = {
  [sym]: "key1",
  uname: "haider",
  age: "18",
}; // method 1
// Object.create; // method 2 // constructoer method
// console.log(user.name);
// console.log(typeof user[sym]);   //✅
// Object.freeze(user);
// user.uname = "haidrbhatti";
// // console.log(user);
//
// functions
user.greeting = function () {
  console.log("hello world");
};
user.greeting2 = function () {
  console.log(`hello world,${this.uname}`); // hello world ke sath user ka name ae ga
};
console.log(user.greeting()); //  hello world
console.log(user.greeting2()); // hello world haider
