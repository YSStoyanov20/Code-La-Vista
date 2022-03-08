function Extend() {
    var x = document.getElementById("mt");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}