const parent = document.querySelector(".parent");
// // parent.style.color = "green";
// // console.log(parent);
// console.log(parent.children);
// arent
// <div class=​"parent">​…​</div>​
// parent.children[1]
// <div class=​"day">​Tuesday​</div>​
// parent.children[1].innerHTML
// 'Tuesday'
// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }
// console.log(parent.firstElementChild);         // pehla child element de ga
// child to parent
const day = document.querySelector(".day");
console.log(day);
console.log(day.parentElement); // parent per jump kre ga
console.log(day.nextElementSibling); // apne se next element per jump kr ga jo same parent me ai ga
console.log("Nodes =>", parent.childNodes);
