"use strict";
const btnAdvice = document.querySelector(".btn--advice");
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice");

const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const {
    slip: { id, advice },
  } = await res.json();
  adviceId.innerText = `#${id}`;
  adviceText.innerText = `“${advice}”`;
}

getAdvice();

btnAdvice.addEventListener("click", getAdvice);

// const request = new XMLHttpRequest();
// request.open("GET", "https://api.adviceslip.com/advice");
// request.send();
// request.onload = () => {
//   //   console.log(request);
//   const data = JSON.parse(request.response);
//   const {
//     slip: { id, advice },
//   } = data;
//   console.log(id, advice);
//   updateAdvice(id, advice);
//   // quote.textContent = `“${advice}”`;
//   adviceId.textContent = `#${id}`;
//   quote.textContent = `“${advice}”`;
// };

// function updateAdvice(id, advice) {
//   btnDice.addEventListener("click", () => {
//     setTimeout(function () {
//       window.location.reload();
//     });
//   });
// }
