// 슬라이드 start
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 4,
        loop: true,
        navText: ["<span>◀︎</span>", "<span>▶︎</span>"]
    })
});
// 슬라이드 end


//모달 start
$(document).ready(function () {
    $(".item").on("click", function () {
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