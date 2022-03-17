function changeBg() {
    var background = document.getElementById('color');
    var scrollValue = window.scrollY;

    if (scrollValue < 1200) {
        background.classList.remove('colorChange')
    } else {
        background.classList.add('colorChange');
    }
}

window.addEventListener('scroll', changeBg);