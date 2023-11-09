"use strict";
var toggled = false;

$("#toggle").click(function () {

    $("h1").toggleClass("color-white");
    $("body").toggleClass("bck-color-black");

    if (!toggled) {

        //$("circle").css("margin-left", "100px");
        document.querySelector("#circle").innerText = "Dark Mode";
        toggled = true;

    } else {

        //$("circle").css("margin-left", "1px");
        document.querySelector("#circle").innerText = "Light Mode";
        toggled = false;

    }

});
