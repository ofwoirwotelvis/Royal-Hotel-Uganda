const Menu = document.getElementById("navbar-menu");
const ToggleMenu = document.getElementById("navbar-toggle");

Menu.style.left == "-100%";
ToggleMenu.onclick = function() {
    if(Menu.style.left == "-100%") {
        Menu.style.left = "0";
    }else {
        Menu.style.left = "-100%";
    }
}




























