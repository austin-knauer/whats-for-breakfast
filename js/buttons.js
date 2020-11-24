$(document).ready(() => {
    $(".exit").click((e) => {
        $(".side").addClass("hidden");
        $(".tidbit").addClass("hidden");
        $(".exit").addClass("hidden");
    });
    $(".nav-button").click((e) => {
        $(".side").addClass("hidden");
        $(".exit").removeClass("hidden");
        const elem = e.target.id;
        if (elem === "help-nav") {
            $("#help").toggleClass("hidden");
        } else if (elem === "product-nav") {
            $("#products").toggleClass("hidden");
        }
    });
    $(".product-button").click((e) => {
        $("#product-info").removeClass("hidden");
        $(".tidbit").addClass("hidden");
        const elem = e.target.id;
        console.log(elem);
        if (elem === "p1") {
            $("#p1-info").removeClass("hidden");
        } else if (elem === "p2") {
            $("#p2-info").removeClass("hidden");
        } else if (elem === "p3") {
            $("#p3-info").removeClass("hidden");
        } else if (elem === "p4") {
            $("#p4-info").removeClass("hidden");
        }
    });
    $(".about-b").click((e) => {
        $(".bg").off("mousedown").off("mouseup").off("mouseover").css("transition", "all 1s");
        $(window).off("resize");
        const position = $(".bg").css("background-position");
        const currentBG = $(".bg").css("background-image");
        const bgChange = (str, num, x, y) => {
            if (str === "null") {
                return;
            } else {
                $(".bg").css("background-image", str);
                const top = $(window).height() * .25;
                const left = $(window).width() * .375;
                $(".about-b").addClass("hidden");
                $(`#card-${num}`).removeClass("hidden").css({"display": "flex", "top": top, "left": left});
            }
        }
        switch(e.target.id) {
            case "about-1":
                bgChange("url(../pics/door.jpg)", 1, 24.9180327, 27.6639344);
                break;
            case "about-2":
                bgChange("url(../pics/trophy.jpg)", 2, 79.6721311, 20.2868852);
                break;
            case "about-3":
                bgChange("url(../pics/sleep.png)", 3, 100, 100);
                break;
            case "about-4":
                bgChange("url(../pics/clothes.png)", 4, 49.0163934, 77.0491803);
                break;
            case "about-5":
                bgChange("url(../pics/baseball.png)", 5, 21.1475409, 61.2704918);
                break;
            case "about-6":
                bgChange("url(../../pics/tasty.png)", 6, 40, 61.0655737);
                break;
            case "about-7":
                bgChange("url(../../pics/sugar.png)", 7, 50.1639344, 66.3934426);
                break;
            case "about-8":
                bgChange("url(../../pics/nuts.png)", 8, 54.4262295, 65.1639344);
                break;
            default:
                bgChange("null");
        }
        $(".exit-info").click(() => {
            $(".about-c").addClass("hidden");
            $(".bg").css({"background-image": currentBG, "background-position": position, "transition": "none"});

        });
    });

    $("#nuts").click(() => {
        $("#nut-text").text("Blegh no way I'd rather skip breakfast.");
        $("#nuts").addClass("hidden");
    });
    
});