$(document).ready(function(){
    $(".next").click(function () {
        const now_img = $(".show");
        const next_img = now_img.next();

        if (next_img.length) {
            now_img.fadeOut(200).removeClass("show");
            next_img.fadeIn(200).addClass("show");
        }
    });
    $(".prev").click(function () {
        const now_img = $(".show");
        const prev_img = now_img.prev();

        if (prev_img.length) {
            now_img.fadeOut(200).removeClass("show");
            prev_img.fadeIn(200).addClass("show");
        }
    });
})
// $(".")