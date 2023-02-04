var wraper = document.querySelectorAll(".wraper");

var btn = document.querySelector(".btn");

var currentimg = 2;

btn.addEventListener("click", function () {
  // console.log('funcionou');
  for (var i = currentimg; i < currentimg + 2; i++) {
    if (wraper[i]) {
      wraper[i].style.display = "block";
    }
  }

  currentimg += 2;

  if (currentimg >= wraper.length) {
    event.target.style.display = "none";
  }
});
