var hamburgerIcon = document.querySelector('.hamburger-icon');

hamburgerIcon.addEventListener("click", function() {
    document.querySelector('.nav-list').classList.add("active");
    document.querySelector('.hamburger-option').classList.add("active");
});

var hamburgerClose = document.querySelector('.hamburger-close_img');

hamburgerClose.addEventListener("click", function() {
    document.querySelector('.nav-list').classList.remove("active");
    document.querySelector('.hamburger-option').classList.remove("active");
});