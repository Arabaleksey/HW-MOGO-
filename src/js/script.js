// import Swiper from 'swiper/swiper-bundle';
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable:true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },

//     slidesPerView:1,
//   });



// DROPDOWN----------------
let drop = document.querySelectorAll('.service__drop');

drop.forEach((elem)=>{
  elem.addEventListener('click',()=>{
      elem.parentNode.querySelector('.service__drop').classList.toggle('active')
  })
})




// SEARCH INPUT-------------
// let search = document.querySelectorAll('.intro__search-box');

// search.forEach((elem)=>{
//   elem.addEventListener('click',()=>{
//       elem.parentNode.querySelector('.intro__search-box').classList.toggle('open')
//     //   clossets
//   })
// })


// let elem = document.querySelector('#child');
// let parent = elem.closest('.www');


let search = document.querySelector(".intro__search-box");

search.addEventListener("click", searchMenu);

function searchMenu() {
    search.classList.toggle("open");
}












let dot = document.querySelectorAll('.intro__dot');

dot.forEach((elem)=>{
  elem.addEventListener('click',()=>{
      elem.parentNode.querySelector('.intro__dot').classList.toggle('slick')
  })
})




// ПЕРВЫЙ СЛАЙДЕР-----------------------------------------
var slideIndexIntro = 1;
showSlidesIntro(slideIndexIntro);

function currentSlideIntro(p) {
    showSlidesIntro(slideIndexIntro = p);
}

function showSlidesIntro(p) {
    var u;
    var slidesIntro = document.getElementsByClassName("intro__wrapper-block");


    if (p > slidesIntro.length){
        slideIndexIntro = 1
    }
    if (p < 1){
        slideIndexIntro=slidesIntro.length
    }
    for (u=0; u <slidesIntro.length; u++){
        slidesIntro[u].style.display= "none";
    }
   

    slidesIntro[slideIndexIntro-1].style.display = "block";
}



// СЛАЙДЕР ВТОРОЙ-----------------------------

let prevBtn = document.querySelector('.review__prevBtn');
let aftBtn = document.querySelector('.review__aftBtn');


prevBtn.addEventListener('click',()=>{
    plusSlides(-1)
  })
  
aftBtn.addEventListener('click',()=>{
    plusSlides(1)
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

    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides.length
    }
    for (i=0; i <slides.length; i++){
        slides[i].style.display= "none";
    }
    

    slides[slideIndex-1].style.display = "block";
}





// СЛАЙДЕР ТРЕТИЙ-----------------------------

let prevBtn2 = document.querySelector('.review__prevBtn2');
let aftBtn2 = document.querySelector('.review__aftBtn2');


prevBtn2.addEventListener('click',()=>{
    plusSlidesSec(-1)
  })
  
aftBtn2.addEventListener('click',()=>{
    plusSlidesSec(1)
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
      var slidesSec = document.getElementsByClassName("review__box_second");
  
      if (x > slidesSec.length){
          slideIndexSec = 1
      }
      if (x < 1){
          slideIndexSec=slidesSec.length
      }
      for (k=0; k <slidesSec.length; k++){
          slidesSec[k].style.display= "none";
      }
  
      slidesSec[slideIndexSec-1].style.display = "block";
}


