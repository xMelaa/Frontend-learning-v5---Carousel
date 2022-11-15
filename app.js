let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');
let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');
let activeSlideNumber = 1;

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide' + slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if(activeSlideNumber===3)
        activeSlideNumber=1;
    else
        activeSlideNumber++;
    showSlide(activeSlideNumber);
};

let showPreviousSlide = () => {
    if(activeSlideNumber===1)
        activeSlideNumber=3;
    else
        activeSlideNumber--;
    showSlide(activeSlideNumber);
};

for (let i=1; i<=3; i++){
    let showSlideI = () => {
        activeSlideNumber = i;
        showSlide(i);
    };
    document.querySelector('#dot'+i).addEventListener('click', showSlideI);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);