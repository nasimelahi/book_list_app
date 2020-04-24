let current = document.querySelector('#current');
let img = document.querySelectorAll('.imgs img');
let opacity = 0.4;

img.forEach(imgs => addEventListener('click',(e) =>{
    imgs.style.opacity = 1;

    current.src = e.target.src;
    current.classList.add('fade-in');

    e.target.style.opacity = opacity;

    setTimeout(() => current.classList.remove('fade-in'),500);
}))