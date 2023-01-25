let rate = document.querySelector("div");
let show = document.querySelector(".section1");
let hide = document.querySelector(".section2");
let info = document.querySelector(".info");
let btn = document.querySelector(".btn");
console.log(info);
console.log(rate);
console.log(rate.children[0]);

rate.children[0].onclick = function () {
  rate.children[0].style.cssText =
    "background-color: var(--Orange); color: var(--White);";
  rating(rate.children[0]);
};
rate.children[1].onclick = function () {
  rate.children[1].style.cssText =
    "background-color: var(--Orange); color: var(--White);";
  rating(rate.children[1]);
};
rate.children[2].onclick = function () {
  rate.children[2].style.cssText =
    "background-color: var(--Orange); color: var(--White);";
  rating(rate.children[2]);
};
rate.children[3].onclick = function () {
  rate.children[3].style.cssText =
    "background-color: var(--Orange); color: var(--White);";
  rating(rate.children[3]);
};
rate.children[4].onclick = function () {
  rate.children[4].style.cssText =
    "background-color: var(--Orange); color: var(--White);";
  rating(rate.children[4]);
};
function rating(rate) {
  let myRate = document.createElement("span");
  let myText = document.createTextNode(rate.textContent);
  myRate.style.cssText = "position: absolute; left: 111px;";
  myRate.appendChild(myText);
  info.appendChild(myRate);
  console.log(rate.textContent);
}
btn.onclick = function () {
  hide.style.cssText = "display: block;";
  show.style.cssText = "visibility: hidden;";
};
