const tabList = document.querySelectorAll(".tab_menu .class--ticket__sub .li");
for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("is_on");
    }
    this.parentNode.classList.add("is_on");
  });
}

const tabbList = document.querySelectorAll(".button1");
for (let i = 0; i < tabbList.length; i++) {
  tabbList[i].querySelector(".btn1").addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < tabbList.length; j++) {
      tabbList[j].classList.remove("is_on1");
    }
    this.parentNode.classList.add("is_on1");
  });
}