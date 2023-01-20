const ratingEle = document.querySelectorAll(".rating");
let btnEl = document.getElementById("btn");
let containerEle = document.getElementById("container");

let selectRating = "";
ratingEle.forEach((ratingE) => {
  ratingE.addEventListener("click", (event) => {
    removeActive();
    selectRating = event.target.innerText || event.target.parentNode.innerText;
    console.log(selectRating); // Bad ,Poor,Medium, Good, Excellent
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

function removeActive() {
  ratingEle.forEach((ratingE) => {
    ratingE.classList.remove("active");
  });
}

btnEl.addEventListener("click", () => {
  if (selectRating !== "") {
    containerEle.innerHTML = `<strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback:${selectRating}.</strong>
    <p>We will use your feedback to improve our customer support.</p>`;
  }
});
