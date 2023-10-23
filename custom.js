const custom = document.getElementById("customizer")
const face = document.getElementById("face")

function change(part, color) {
    var colorgrab = document.getElementById(part);
    colorgrab.style.backgroundImage = color + ".png"
}