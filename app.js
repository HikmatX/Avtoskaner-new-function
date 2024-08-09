function toggleMenu() {
    var x = document.getElementById("nav-links");
    if (x.classList.contains("show")) {
        x.classList.remove("show");
    } else {
        x.classList.add("show");
    }
}
