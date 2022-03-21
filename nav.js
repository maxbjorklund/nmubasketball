//console.log("nav");
const nav_links = document.querySelector(".nav-links");
const menu_open = document.querySelector("#open");
const menu_close = document.querySelector("#close");
const click_right = document.querySelector(".fa-arrow-right");
const click_left = document.querySelector(".fa-arrow-left");
const container_image = document.querySelector("#image");

//console.log(click_right);
//console.log(nav_links, menu_open, menu_close);
menu_open.onclick=()=>{
    nav_links.classList.toggle("active");
    menu_open.classList.toggle("close");
    menu_close.classList.toggle("open");
};
menu_close.onclick=()=>{
    nav_links.classList.toggle("active");
    menu_open.classList.toggle("close");
    menu_close.classList.toggle("open");
};
var dunk = "nmudunk.jpg";
var potw = "potw1.jpg";
var thousand = "1000.jpg";
var div = document.getElementById("image");
var index = 0;
    click_right.onclick=()=>{
        index++;
            if(index == 1){
            div.style.backgroundImage = `url(${dunk})`;
            div.style.backgroundSize = "100%";
            div.style.backgroundRepeat= "no-repeat"
        }else if(index == 2){
            div.style.backgroundImage = `url(${potw})`;
            div.style.backgroundSize = "100%";
        }else if(index == 3){
            div.style.backgroundImage = `url(${thousand})`;
            div.style.backgroundSize = "100%";
        }
    };

    click_left.onclick=()=>{
        index--;
        if(index == -1){
            div.style.backgroundImage = `url(${thousand})`;
            div.style.backgroundSize = "100%";
            div.style.backgroundRepeat= "no-repeat";
        }else if(index == -2){
            div.style.backgroundImage = `url(${potw})`;
            div.style.backgroundSize = "100%";
        }else if(index == -3){
            div.style.backgroundImage = `url(${dunk})`;
            div.style.backgroundSize = "100%";
        }
};

