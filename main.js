'use strict';

const images =[
    'img/image01.jpg',
    'img/image02.jpg',
    'img/image03.jpg',
    'img/image04.jpg',
    'img/image05.jpg',
    'img/image06.jpg',
    'img/image07.jpg',
    'img/image09.png',
];

let currentIndex = 0;

const mainImage = document.getElementById('main');
mainImage.src = images[currentIndex];

images.forEach((image, index) =>{
    const img = document.createElement('img');
    img.src = image;
    const li = document.createElement('li');
    if(index === currentIndex){
        li.classList.add('current');
    }
    li.addEventListener('click',() =>{
        mainImage.src = image;
        const thumbnails = document.querySelectorAll('.thumbnails > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
    });
    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
})
    const next = document.getElementById('next');
    next.addEventListener('click', ()=>{
        let target = currentIndex + 1;
        if (target === images.length){
            target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    const prev = document.getElementById('prev');
    prev.addEventListener('click', ()=>{
        let target = currentIndex - 1;
        if (target < 0){
            target = images.length -1;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    let timeOutId;

function playSlideshow (){
    timeOutId = setTimeout(()=>{
     next.click();
     playSlideshow();   
    },3000);
}
playSlideshow();


let isPlaying = true;

    const play = document.getElementById('play');
    play.addEventListener('click', ()=>{
        if ( isPlaying === true){
        clearTimeout(timeOutId);
        play.textContent = 'Play';
        }else{
        playSlideshow();
        play.textContent = 'Stop';
        }
        isPlaying = !isPlaying;
        play.classList.toggle('checked');
    });
