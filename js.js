let main_div = document.querySelectorAll('.slide');
let prev_b = document.querySelector('#prev');
let next_b = document.querySelector('#next');
let auto = true;
let sliderauto;

nextslide = (e) => {
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
       current.nextElementSibling.classList.add('current'); 
    }else{
        main_div[0].classList.add('current');
    }
}

prevslide = (e) => {
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
       current.previousElementSibling.classList.add('current'); 
    }else{
        main_div[main_div.length-1].classList.add('current');
    }
}

next_b.addEventListener('click',(e) => {
   nextslide();
})

prev_b.addEventListener('click',(e) => {
    prevslide();
})

if(auto){
    sliderauto = setInterval(nextslide,3000);
}