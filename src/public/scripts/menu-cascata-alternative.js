var button = document.getElementById("collapse");

console.log(animation);
console.log(collapse);

button.addEventListener("click", function () {
  var animationOne = document.getElementById("animation");

  if (animationOne.style.display === "none") {
    animationOne.style.display = "block";
  } else {
    animationOne.style.display = "none";
  }
});

button.addEventListener("click", function () {
  var animationTwo = document.getElementById("productsContainer");

  if (animationTwo.style.height === "27vh") {
    animationTwo.style.height = "110vh";
  } else {
    animationTwo.style.height = "27vh";
  }
});
