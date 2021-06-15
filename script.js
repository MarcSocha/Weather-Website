'use strict'

function openMenu(){
    // open side bar
    var menu = document.getElementsByClassName("side-menu")[0];
    menu.style.width = "250px";

    // add side menu content
    var menuElements = menu.getElementsByTagName("ul");
    for(var i = 0; i < menuElements.length; ++i){
        menuElements[i].style.color = "white";
    }

    // remove open menu button
    // add close menu button
    document.getElementsByClassName("open-btn")[0].style.visibility = "hidden";
    document.getElementsByClassName("close-btn")[0].style.visibility = "visible";

}


function closeMenu(){
    // close side bar
    var menu = document.getElementsByClassName("side-menu")[0];
    menu.style.width = "0px";

    // remove side menu content
    var menuElements = menu.getElementsByTagName("ul");
    for(var i = 0; i < menuElements.length; ++i){
        menuElements[i].style.color = "transparent";
    }

    // add open menu button
    // remove close menu button
    document.getElementsByClassName("open-btn")[0].style.visibility = "visible";
    document.getElementsByClassName("close-btn")[0].style.visibility = "hidden";
}
