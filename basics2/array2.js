const marvel = ["Thor", "Hulk", "Dr.Strange"];
const dc = ["superman", "Flash", "cyborg"];
// marvel.push(dc); // array me array ko dale ga marvel ke last index per " not recommended"
// console.log(marvel[3][1]); // falash output ae ga
// const newHero = marvel.concat(dc); // ye push ka masla hal kr de ga aur sirf elements ko merge kre ga ye new arrat deata hai
// console.log(newHero);
// -->  aik  aur tarika bhai hai
// spread operater  ==>  " ... "
// const newHeros = [...marvel, ...dc]; // ye bhi tarika hai
// console.log(newHeros);
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const result = anotherArray.flat(Infinity); // sab elements ko aik array "ise depth dene hoti hai"
console.log(Array.isArray(result)); // questiong
console.log(Array.from("Haider")); // jo value melie gi us ko array bana de ga
console.log(Array.from({ name: "haider" })); // ye value ko convert nahi kr pai ga
// agr multiple values hoo

let value1 = 100;
let value2 = 200;
let value3 = 300;
console.log(Array.of(value1, value2, value3));
