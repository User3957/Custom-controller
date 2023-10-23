const custom = document.getElementById("customizer")
const face = document.getElementById("face")

function change(part, color) {
    alert("hi!")
    var partgrab = document.getElementById(part);
    partgrab.style.backgroundImage = color + ".png"
}