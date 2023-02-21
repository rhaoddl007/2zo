//Scroll Magic-----------------------이미지 양옆에서 나오기
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    //.setClassToggle(토글할요소, 넣었다뺄 Class이름)
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// 모달창 계산기

// 미키마우스 계산
let k=0;
function minus1() {
  if(k>0){
  k--;
  document.getElementById("number1").innerHTML=k;
  let price= k*4500;
  let result= price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  document.getElementById("total1").innerHTML=`¥ ${result}`;}
}

function plus1() {
    k++;
    document.getElementById("number1").innerHTML=k;
    let price= k*4500;
  let result= price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  document.getElementById("total1").innerHTML=`¥ ${result}`;
  }

// 미니마우스 계산
  let l=0;
function minus2() {
  if(l>0){
    l--;
    document.getElementById("number2").innerHTML=l;
    let price= l*4500;
    let result= price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById("total2").innerHTML=`¥ ${result}`;}
}

function plus2() {
  l++;
  document.getElementById("number2").innerHTML=l;
  let price= l*4500;
let result= price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
document.getElementById("total2").innerHTML=`¥ ${result}`;
  }

  // 도널드덕 계산
  let m=0;
function minus3() {
  if(m>0){
    m--;
    document.getElementById("number3").innerHTML=m;
    let price= m*2800;
    let result= price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById("total3").innerHTML=`¥ ${result}`;}
}

function plus3() {
  m++;
  document.getElementById("number3").innerHTML=m;
  let price= m*2800;
let result= price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
document.getElementById("total3").innerHTML=`¥ ${result}`;
  }

  // 머리띠 계산
  let n=0;
function minus4() {
  if(n>0){
    n--;
    document.getElementById("number4").innerHTML=n;
    let price= n*1500;
    let result= price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById("total4").innerHTML=`¥ ${result}`;}
}

function plus4() {
  n++;
  document.getElementById("number4").innerHTML=n;
  let price= n*1500;
let result= price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
document.getElementById("total4").innerHTML=`¥ ${result}`;
  }
