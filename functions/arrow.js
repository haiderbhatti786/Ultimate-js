// // const user = {
//   username: "haider",
//   price: 999,
//   wlcmsg: function () {
//     console.log(`${this.username},welcome to website`);
//     console.log(this);
//   },
// };
// // console.log(user.wlcmsg);
// //
// console.log(this);
// // immedately invoked function expression
// //(for defintion)(for calling)
(function ex(name) {
  console.log(`this is ${name}`);
})("haider");
