const body = document.body;
const root = document.querySelector(":root");

let is_dark = true;
function set_color() {
    if (is_dark) { // TO LIGHT THEME
        root.style.setProperty("--background-color", "#dededd");
        document.getElementById("header-theme").src = "assets/icon_light.png";
        document.getElementById("header-icon").src = "assets/seabow_light.png";
    } else { // TO DARK THEME
        root.style.setProperty("--background-color", "#474545");
        document.getElementById("header-theme").src = "assets/icon_dark.png";
        document.getElementById("header-icon").src = "assets/seabow_dark.png";
    }
}

function change_color_theme() {
    is_dark = !is_dark;
    set_color();
    localStorage.setItem("seabow-is_dark", JSON.stringify(is_dark));
}

function seabow_onload() {
    const item = localStorage.getItem("seabow-is_dark");
    if (item != null) is_dark = JSON.parse(item);
    set_color();
}
seabow_onload();