// 슬라이드 start
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        avigationText: ["<span>❮</span>", "<span>❯</span>"]
    })
});
// 슬라이드 end 


// 모달 start
$(document).ready(function () {
    $(".img").on("click", function () {
        let mainImgSrc = $(this)
            .children(".main-img")
            .attr("src");
        let mapImgSrc = $(this)
            .children(".map-img")
            .attr("src");
        let contentTitle = $(this)
            .children(".content-title")
            .text();
        let contentText = $(this)
            .children(".content-text")
            .html();

        $(".modal").css({"display": "block"});
        $(".modal .inner").fadeIn();

        $(".modal .inner .modal-img").attr("src", mainImgSrc);
        $(".modal .inner .modal-map").attr("src", mapImgSrc);
        $(".modal .inner .modal-title").text(contentTitle);
        $(".modal .inner .modal-subject").html(contentText);
    });

    $(".close-bg").on("click", function () {
        $(".modal").fadeOut();
        $(".modal .inner").fadeOut();
    });

});
//모달 end


// 탭 메뉴 start
let tabLinks = document.querySelectorAll(".tablinks");
let tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});


function openTabs(el) {
    let btnTarget = el.currentTarget;
    let country = btnTarget.dataset.country;

    tabContent.forEach(function (el) {
    el.classList.remove("active");
    });

    tabLinks.forEach(function (el) {
    el.classList.remove("active");
    });

    document.querySelector("#" + country).classList.add("active");

    btnTarget.classList.add("active");
}
// 탭메뉴 end
