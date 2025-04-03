// // const arr = [1, 2, 3, 4, 5];
// // for (const element in arr) {        //  element is ka index hai || arr me  array hai
// //   console.log(arr[element]);       // aik aik kr ke tamama array de ga
// // }
// // const cobj = {
// //   name: "ajmal",
// //   age: "12",
// //   studyin: "USA",
// // };
// // for (const key in cobj) {
// //   const elm = cobj[key];
// //   console.log(elm);
// // }
// // maps

// const map = new Map();
// map.set("Country", "PAK");
// map.set("Country2", "IN");
// map.set("Country3", "USA");
// // console.log(map);
// for (const [key, value] of map) {
//   //   console.log(element[1]);
//   console.log(key); //    @@@  keys de ga
//   console.log(value); ///  @@@  keys ki values de ga
// }
const object = {
  Game1: "NFS",
  Game2: "Ark Evolved",
};
for (const [keys, Games] of object) {
  console.log(`${keys}==> ${Games}`);
}
// for of me sedhe values aur key miljati hai
