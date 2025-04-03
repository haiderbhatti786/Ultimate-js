const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((num) => num + 10); // foreach se better hai
// chaining ka method
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num <= 80);
console.log(newNums);
