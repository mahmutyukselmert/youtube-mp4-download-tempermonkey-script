// ==UserScript==
// @name         Download Youtube MP4 Video
// @namespace    https://sorcial.com/mahmutyukselmert
// @version      1.0
// @description  Youtube mp4 download plugin for free.
// @author       Mahmut Yüksel Mert
// @include      http*://*.youtube.com/*
// @include      http*://youtube.com/*
// @include      http*://*.youtu.be/*
// @include      http*://youtu.be/*
// @run-at       document-end
// ==/UserScript==

function polymerInject2(){

    /* Create button */
    var buttonDiv2 = document.createElement("div");
    buttonDiv2.style.width = "100%";
    buttonDiv2.id = "parentButton2";
    buttonDiv2.style.marginTop = "5px";

    var addButton2 = document.createElement("button");
    addButton2.appendChild(document.createTextNode("MP4 Download"));

    addButton2.style.width = "100%";
    addButton2.style.backgroundColor = "#181717";
    addButton2.style.color = "white";
    addButton2.style.textAlign = "center";
    addButton2.style.padding = "10px 0";
    addButton2.style.marginTop = "5px";
    addButton2.style.fontSize = "14px";
    addButton2.style.border = "0";
    addButton2.style.cursor = "pointer";
    addButton2.style.borderRadius = "2px";
    addButton2.style.fontFamily = "Roboto, Arial, sans-serif";

    addButton2.onclick = function () {

        //this.remove();
        /* URL Pars Video URL */
        var url_string = window.location.href;
        var url = new URL(url_string);
        var params_url = url.searchParams.get('v');
        /* // URL PARS ~~ */
        var new_page_src = 'http://www.convertinmp4.com/redirect.php?video='+params_url+'&v=kOVAdeGVqSeTNpneidUdeoJbGkrKWvWV&hd=1';
        window.open(new_page_src, "_blank");
        /* Add large button on click */

    };
    buttonDiv2.appendChild(addButton2);

    var targetElement = document.querySelectorAll("[id='subscribe-button']");

    for(var i = 0; i < targetElement.length; i++){

        if(targetElement[i].className.indexOf("ytd-video-secondary-info-renderer") > -1){

            targetElement[i].appendChild(buttonDiv2);

        }

    }

    var descriptionBox = document.querySelectorAll("ytd-video-secondary-info-renderer");
    if(descriptionBox[0].className.indexOf("loading") > -1){

        descriptionBox[0].classList.remove("loading");

    }

}
if(document.getElementById("polymer-app") || document.getElementById("masthead") || window.Polymer){
    setInterval(function(){
        if(window.location.href.indexOf("watch?v=") < 0){
            return false;
        }
        if(document.getElementById("count") && document.getElementById("parentButton2") === null){
            polymerInject2();
        }
    }, 100);
}
