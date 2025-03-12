// // // let mydate = new Date();
// // // // console.log(mydate.toString()); //  ye date ko string me convert kre ga
// // // // console.log(mydate.toDateString()); //  ye date ko string me convert kre ga
// // // console.log(mydate.toJSON()); //  ye date ko string me convert kre ga
// // // console.log(mydate.toLocaleString()); //  ye date ko string me convert kre ga
// // // console.log(mydate.toLocaleTimeString()); //  ye date ko string me convert kre ga
// // // console.log(mydate.toString()); //  ye date ko string me convert kre ga
// // // console.log(mydate.toString()); //  ye date ko string me convert kre ga
// // const specDates = new Date(2006, 4, 23, 12, 1); // jab comma ke form me seperate ho to month 0 se start
// const specDates2 = new Date("01-23-2006"); // jab dashes se seperate ho to month 1 se start ho ha
// // console.log(specDates2.getTime()); ///
// console.log(Math.floor(Date.now() / 1000)); ///        agr ap seconds me time lena chahtae hai
// // time \Stamp[]
// const tmstmp1 = Date.now();
// // console.log(tmstmp1);
// more methods//
// const newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()); // 0 sse start ho ga march 2 index per hai
// console.log(newDate2.getDay()); // monday se start ho ga saturday ke liye 6 ae ga
// ////
const newDate2 = new Date().toLocaleString("default", {
  weekday: "long",
});
console.log(newDate2);
// fully customized hai ye t
