// header 와 nav를 받아 nav 호버시 headaer의 높이를 바꿈
let header = document.querySelector("header"),
  nav = document.querySelector("nav");

nav.addEventListener("mouseover", () => {
  header.style.height = "14.5833vw";
});

nav.addEventListener("mouseout", () => {
  header.style.height = "5.2083vw";
});
