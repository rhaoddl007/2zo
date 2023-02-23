let limits = 15.0;

$(".card").mousemove(function (e) {
  let rect = e.target.getBoundingClientRect(); //요소의 위치값
  let x = e.clientX - rect.left; //x  사용자에게 웹페이지를 보여지는 영역 - 위치값
  let y = e.clientY - rect.top; //y 사용자에게 웹페이지를 보여지는 영역 - 위치값
  let offsetX = x / rect.width;
  let offsetY = y / rect.height;

  let rotateY = (offsetX) * (limits * 2) - limits;
  let rotateX = (offsetY) * (limits * 2) - limits;

  let shadowOffsetX = (offsetX) * 32 - 16;
  let shadowOffsetY = (offsetY) * 32 - 16;

  $(this).css({
    "box-shadow": (1 / 6) * -shadowOffsetX + "0.0000vw " + (1 / 6) * -shadowOffsetY + "0.0000vw 0.1563vw rgba(0, 0, 0, 0.051), " +
      (2 / 6) * -shadowOffsetX + "0.0000vw " + (2 / 6) * -shadowOffsetY + "0.0000vw 0.3750vw rgba(0, 0, 0, 0.073), " +
      (3 / 6) * -shadowOffsetX + "0.0000vw " + (3 / 6) * -shadowOffsetY + "0.0000vw 0.7083vw rgba(0, 0, 0, 0.09), " +
      (4 / 6) * -shadowOffsetX + "0.0000vw " + (4 / 6) * -shadowOffsetY + "0.0000vw 1.2656vw rgba(0, 0, 0, 0.107), " +
      (5 / 6) * -shadowOffsetX + "0.0000vw " + (5 / 6) * -shadowOffsetY + "0.0000vw 2.3698vw rgba(0, 0, 0, 0.129), " +
      -shadowOffsetX + "0.0000vw " + -shadowOffsetY + "0.0000vw 5.6771vw rgba(0, 0, 0, 0.18)",
    transform: "perspective(52.0833vw) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)"
  });

  let glarePos = rotateX + rotateY + 90;
  $(this)
    .children()
    .children()
    .css("left", glarePos + "%");
});

$(".card").mouseleave(function (e) {
  $(".card").css({ "box-shadow": "0.0000vw 0.0000vw 0.1563vw rgba(0, 0, 0, 0.051), 0.0000vw 0.0000vw 0.3750vw rgba(0, 0, 0, 0.073), 0.0000vw 0.0000vw 0.7083vw rgba(0, 0, 0, 0.09), 0.0000vw 0.0000vw 1.2656vw rgba(0, 0, 0, 0.107), 0.0000vw 0.0000vw 2.3698vw rgba(0, 0, 0, 0.129), 0.0000vw 0.0000vw 5.6771vw rgba(0, 0, 0, 0.18)", "transform": "scale(1.0)" });
});