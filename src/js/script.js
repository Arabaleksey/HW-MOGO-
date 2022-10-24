
import { Carousel } from 'bootstrap'

let intro__hamb = document.querySelector(".intro__hamb")
let navMenu = document.querySelector(".intro__bar-menu")
let slideBox = document.querySelector(".carousel-inner")
let bottom = document.querySelector(".carousel")
let slidee = document.querySelector(".intro__slide")

intro__hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    intro__hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    slideBox.classList.toggle("active");
    bottom.classList.toggle("active");
    slidee.classList.toggle("active")
}

// DROPDOWN----------------
let drop = document.querySelectorAll('.service__drop');

drop.forEach((elem)=>{
  elem.addEventListener('click',()=>{
      elem.parentNode.querySelector('.service__drop').classList.toggle('active')
  })
})


let dot = document.querySelectorAll('.intro__dot');

dot.forEach((elem)=>{
  elem.addEventListener('click',()=>{
      elem.parentNode.querySelector('.intro__dot').classList.toggle('slick')
  })
})



// СЛАЙДЕР ПЕРВЫЙ-----------------------------

let prevBtn = document.querySelector('.review__prevBtn');
let aftBtn = document.querySelector('.review__aftBtn');
let dotOne = document.querySelector('.review__dot-one');
let dotTwo = document.querySelector('.review__dot-two');
let dotThree = document.querySelector('.review__dot-three');
let dotFour = document.querySelector('.review__dot-four');
let dotFive = document.querySelector('.review__dot-five');


prevBtn.addEventListener('click',()=>{
    plusSlides(-1)
  })
  
aftBtn.addEventListener('click',()=>{
    plusSlides(1)
  })
dotOne.addEventListener('click',()=>{
    currentSlide(1)
})
dotTwo.addEventListener('click',()=>{
    currentSlide(2)
})
dotThree.addEventListener('click',()=>{
    currentSlide(3)
})
dotFour.addEventListener('click',()=>{
    currentSlide(4)
})
dotFive.addEventListener('click',()=>{
    currentSlide(5)
})

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("review__box");
    var dots = document.getElementsByClassName("review__dot")

    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides.length
    }
    for (i=0; i <slides.length; i++){
        slides[i].style.display= "none";
    }
    for (i=0; i < dots.length; i++){
        dots[i].className= dots[i].className.replace('active',"");

    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
}





// СЛАЙДЕР ВТОРОЙ-----------------------------

let prevBtn2 = document.querySelector('.review__prevBtn2');
let aftBtn2 = document.querySelector('.review__aftBtn2');
let dotOne2 = document.querySelector('.review__dot-one2');
let dotTwo2 = document.querySelector('.review__dot-two2');
let dotThree2 = document.querySelector('.review__dot-three2');
let dotFour2 = document.querySelector('.review__dot-four2');
let dotFive2 = document.querySelector('.review__dot-five2');


prevBtn2.addEventListener('click',()=>{
    plusSlidesSec(-1)
  })
  
aftBtn2.addEventListener('click',()=>{
    plusSlidesSec(1)
  })
dotOne2.addEventListener('click',()=>{
    currentSlideSec(1)
})
dotTwo2.addEventListener('click',()=>{
    currentSlideSec(2)
})
dotThree2.addEventListener('click',()=>{
    currentSlideSec(3)
})
dotFour2.addEventListener('click',()=>{
    currentSlideSec(4)
})
dotFive2.addEventListener('click',()=>{
    currentSlideSec(5)
})

  var slideIndexSec = 1;
  showSlidesSec(slideIndexSec);

  function plusSlidesSec(x){
      showSlidesSec(slideIndexSec += x);
  }
  
  function currentSlideSec(x) {
      showSlidesSec(slideIndexSec = x);
  }
  
  function showSlidesSec(x) {
      var k;
      var slidesSec = document.getElementsByClassName("review__box-second");
      var dots2 = document.getElementsByClassName("review__dot2")
  
      if (x > slidesSec.length){
          slideIndexSec = 1
      }
      if (x < 1){
          slideIndexSec=slidesSec.length
      }
      for (k=0; k <slidesSec.length; k++){
          slidesSec[k].style.display= "none";
      }
      for (i=0; i < dots2.length; i++){
        dots2[i].className= dots2[i].className.replace('active',"");

    }
  
      slidesSec[slideIndexSec-1].style.display = "block";
      dots2[slideIndexSec-1].className+= " active";
}


