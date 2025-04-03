const body = document.querySelector(".container");
const buttons = document.querySelectorAll(".button");
// console.log(buttons);
buttons.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (e) => {
    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
      console.log(e.target.id);
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      console.log(e.target.id);
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      console.log(e.target.id);
    }
    if (e.target.id === "brown") {
      body.style.backgroundColor = "saddlebrown";
      console.log(e.target.id);
    }
  });
});
