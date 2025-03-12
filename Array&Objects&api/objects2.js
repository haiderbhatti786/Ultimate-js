// const tinderUser = new Object();
// tinderUser.id = "1";
// tinderUser.fname = "haider";
// tinderUser.lname = "siddique";
// tinderUser.email = "haider@gmail.com";
// tinderUser.password = "124";
// // // console.log(tinderUser);
// // const regularUser = {
// //   email: "someone@gmail.com",
// //   full_name: {
// //     user_fulName: {
// //       fname: "Nabeel",
// //       lname: "Munir",
// //     },
// //   },
// // };
// // console.log(
// //   `User name is ${regularUser.full_name.user_fulName.fname}${regularUser.full_name.user_fulName.fname}with this gmail ${regularUser.email}`
// // );
// // ///
// // // optional chaining
// // console.log(`hello ${regularUser.full_name?.user_fulName.fname}`); // this is optional changing
// const obj1 = {
//   1: "a",
//   2: "b",
// };
// const obj2 = {
//   3: "a",
//   4: "b",
// };
// // const obj3 = { obj1, obj2 }; galat   // ❌
// // const obj3 = Object.assign(obj1, obj2); // ✅
// // const obj4 = Object.assign({}, obj1, obj2); // ✅    good practise {}-> ye target hai aur baqi sare srcs hai

// const obj3 = { ...obj1, ...obj2 }; // spread operator
// // console.log(obj3);
// // console.log(obj4);
// const user = [
//   {
//     id: "1",
//     name: "Haider",
//   },
//   {
//     id: "2",
//     name: "Nabeel",
//   },
//   {
//     id: "3",
//     name: "ajmal",
//   },
// ];

// // console.log(user[1].name); // method 1
// // console.log(tinderUser);
// // console.log(Object.keys(tinderUser));   // ye objects ki keys uthahe ga
// // console.log(Object.values(tinderUser));// sirf keys ki values uthae ga
// // console.log(Object.entries(tinderUser)); // sirf enties de ga yani key aur values ki values uthae ga
// console.log(tinderUser.hasOwnProperty("password")); // ye true ya false deta hai
//++++++++++++++++objects3+++++++++///
const games = {
  name: "Ark Evolved",
  genre: "jurrasic era",
  type: "3d open world",
};
const { name, genre, type } = games;
console.log(name);
