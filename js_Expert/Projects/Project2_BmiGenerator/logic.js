const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = Math.floor(
    parseFloat(document.querySelector("#height").value)
  );
  const weight = Math.floor(
    parseFloat(document.querySelector("#weight").value)
  );
  const result = document.querySelector(".result");
  const check = document.querySelector(".check");
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height = ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight = ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(`this is bmi ${bmi}`);
    // showing results
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) check.innerHTML = `<span>under weight</span>`;
    if (bmi >= 18.6 && bmi <= 24.9)
      check.innerHTML = `<span>Normal weight</span>`;
    if (bmi > 24.9) check.innerHTML = `<span>Over weight</span>`;
  }
});
