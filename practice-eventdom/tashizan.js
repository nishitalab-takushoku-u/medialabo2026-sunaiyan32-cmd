let calcButton = document.querySelector("button#calc");
calcButton.addEventListener("click", tashizan);

function tashizan() {
  let left = Number(document.querySelector("input#left").value);
  let right = Number(document.querySelector("input#right").value);
  let answer = document.querySelector("span#answer");

  answer.textContent = left + right;
}
