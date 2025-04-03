const clock = document.querySelector(".clock"); // clock div ko uthae ga
console.log(time);
setInterval(() => {
  const time = new Date().toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);
