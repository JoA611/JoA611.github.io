document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour >= 6 && hour < 12) {
    greeting = "GOOD MORNING";
  } else if (hour >= 13 && hour <= 18) {
    greeting = "GOOD AFTERNOON";
  } else {
    greeting = "GOOD EVENING";
  }

  h1.innerHTML = greeting;
});
