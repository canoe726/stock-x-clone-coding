window.onscroll = function() {
    changeHeader();
    scrollUpFunc();
};

var header = document.querySelector("header");

function changeHeader() {
    if(window.pageYOffset > 100) {
        header.classList.add('sticky');
    }
    else {
        header.classList.remove('sticky');
    }
}

function changeHomeContent(btn) {
    var content = ["Authentic Sneakers","Authentic Streetwear","Authentic Collectibles","Authentic Handbags","Authentic Watches"];
    var color = ["darkolivegreen","royalblue","lightblue","lightgray","rosybrown"];

    var active_btn = document.querySelector('.btn-group .active');
    if(active_btn !== null) {
        active_btn.classList.remove('active');
    }
    btn.classList.add('active');
    
    var idx = -1;
    var btn_value = btn.firstChild.nodeValue;
    var bottom = document.querySelector(".bottom");
    if(btn_value == "Sneaker") { idx = 0; }
    if(btn_value == "Streetwear") { idx = 1; }
    if(btn_value == "Collectibles") { idx = 2; }
    if(btn_value == "Handbags") { idx = 3; }
    if(btn_value == "Watches") { idx = 4; }

    bottom.firstChild.nodeValue = content[idx];

    document.querySelector("header").style.backgroundColor = color[idx];
    document.querySelector(".home-panel").style.backgroundColor = color[idx];
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length) { slideIndex = 1; }
    if(n < 1) { slideIndex = slides.length; }
    for(i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].style.justifyContent = "center";
    dots[slideIndex - 1].className += " active";
}

var btnTop = document.getElementById("scroll-top");

function scrollUpFunc() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

function scrollTopFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



