function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNavNav() {
    document.getElementById("Mnavnav").style.width = "500px";
}

function closeNavNav() {
    document.getElementById("Mnavnav").style.width = "0";
}

function openNavNav2() {
    document.getElementById("Mnavnav2").style.width = "500px";
}

function closeNavNav2() {
    document.getElementById("Mnavnav2").style.width = "0";
}

function openNavNav3() {
    document.getElementById("Mnavnav3").style.width = "500px";
}

function closeNavNav3() {
    document.getElementById("Mnavnav3").style.width = "0";
}

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}