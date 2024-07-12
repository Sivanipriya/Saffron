document.addEventListener('DOMContentLoaded',() =>{
let f1btn=document.querySelector('.f1');
let f2btn=document.querySelector('.f2');
let im=document.querySelector('.main');

f1btn.addEventListener('click',function(){
    im.src='images/Saffron-website-banner.jpg';
    f1btn.querySelector('.fill').classList.add('filling');
    f2btn.querySelector('.fill').classList.remove('filling');
});

f2btn.addEventListener('click',function(){
    im.src='images/slider.jpg';
    f2btn.querySelector('.fill').classList.add('filling');
    f1btn.querySelector('.fill').classList.remove('filling');
});


let d1=document.querySelector('.dot1');
let d2=document.querySelector('.dot2');


d2.addEventListener('click',()=>{
        d1.classList.add('opaci');
        d2.classList.remove('opaci');
});

d1.addEventListener('click',()=>{
      d2.classList.add('opaci');
      d1.classList.remove('opaci');
});
let slides = document.querySelectorAll('.set-out'); 
let dts = document.querySelectorAll('.do');
let currentIndex = 0; 

function moveSlide(index) {
   
        currentIndex = index;


    let translateAmount = -currentIndex * slides[0].clientWidth;

    slides.forEach((slide) => {
        slide.style.transform = `translateX(${translateAmount}px)`;
    });
  
}

dts.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        moveSlide(index);
    });
});


moveSlide(currentIndex);

const scrollHeader =() =>{
    const a =document.querySelector('.logo img');
    const nav =document.querySelector('nav');
    const logo =document.querySelector('.logo img');
    const fr =document.querySelector('.fran');
     if(window.innerWidth> 800){
        if(this.scrollY >=60){
             nav.classList.add('scroll-header');
             nav.classList.add('shadow');
            fr.classList.add('color');
            a.src='images/saffron-red.png';
        }
        else{
             nav.classList.remove('scroll-header');
            fr.classList.remove('color');
            nav.classList.remove('shadow');
            a.src='images/saffron-white.png';
            }   
        this.scrollY>=20 ? logo.src=images/saffron-ReadableByteStreamController.png
                    : logo.src=images/saffron-white.png;
        }
    }
    scrollHeader();
window.addEventListener('scroll',scrollHeader)

function resi()
{
    const a =document.querySelector('.logo img');
    if(window.innerWidth<= 800)
        a.src='images/saffron-red.png';
    else
        a.src='images/saffron-white.png';
}

resi();

window.addEventListener('resize',resi());


 let test=document.querySelector('.test');
 let dot1=document.querySelector('.d1');
 let dot2=document.querySelector('.d2');
 let dot3=document.querySelector('.d3');



dot1.addEventListener('click',()=>{
  
        dot2.classList.add('opaci');
        dot3.classList.add('opaci');
        dot1.classList.remove('opaci');
        check(0);
    
});

dot2.addEventListener('click',()=>{
   
        dot1.classList.add('opaci');
        dot3.classList.add('opaci');
        dot2.classList.remove('opaci');
        check(1);
    
});

 dot3.addEventListener('click',()=>{
   
         dot2.classList.add('opaci');
         dot3.classList.add('opaci');
         dot3.classList.remove('opaci');
         check(2);
    
 });

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".ind");

    let w = slides[0].clientWidth;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${(slideIndex - 1) * w}px)`;
    }
}

let dots = document.querySelectorAll('.dt');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
});

});
