
//анимации при скроле
let windowHeight = window.innerHeight;
let animBlocks = document.querySelectorAll('.animate');
let windowScroll = window.scrollY + windowHeight;

function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

window.onscroll = ()=>{
    animBlocks.forEach(el=>{
        windowScroll = window.scrollY + windowHeight;
        let topoffset = getPosition(el);
        if(topoffset < windowScroll) {
            el.classList.add('active');
        }
    })
}

animBlocks.forEach(el=>{
    windowScroll = window.scrollY + windowHeight;
    let topoffset = getPosition(el);
    if(topoffset < windowScroll) {
        el.classList.add('active');
    }
})

//переключение табов в портфолио 

let portfolioTabBtns = document.querySelectorAll('.portfolio__list__item');

portfolioTabBtns.forEach(el=>{
    el.onclick = ()=>{
        portfolioTabBtns.forEach(el =>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    }
})

//активация радио 

let q1label = document.querySelectorAll('.radiobtn');
q1label.forEach(el=>{
    el.onclick = ()=>{
        q1label.forEach(el=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    }
})

//активация чекбоксов 

let checkboxbtn = document.querySelectorAll('.checkbtn');
checkboxbtn.forEach(el=>{
    el.onclick = ()=>{
        el.classList.toggle('active')
    }
})

//переключение квиза

let nextBtns = document.querySelectorAll('.nextQuestion');
let activeQuizBlockIndex = 0;
let quizChangeBlocks = document.querySelectorAll('.quiz__change');
let beguStrock = document.querySelector('.muwe-stick-block');
let beguStrockTransform = 80;
let numOfQuest = document.querySelector('.stepHere');

nextBtns.forEach(button=>{
    button.onclick = ()=>{
        if(activeQuizBlockIndex < quizChangeBlocks.length -1) {
            activeQuizBlockIndex ++;
            quizChangeBlocks.forEach(el=>{
                el.classList.remove('active')
            })
            quizChangeBlocks[activeQuizBlockIndex].classList.add('active');
            beguStrockTransform = beguStrockTransform - 20;
            // beguStrock.style.transform = 'translateX(- '+ beguStrockTransform +'%)';
            beguStrock.style.transform = 'translateX(-'+ beguStrockTransform+'%)';
            numOfQuest.innerHTML = activeQuizBlockIndex + 1;
        }
    }
})


//перенос значений из одного инпута в другой

let textIn = document.querySelectorAll('.textIn');


textIn.forEach(el=>{
    let id = el.getAttribute('data-for')
    let block = document.querySelector(id)
    el.addEventListener('keyup', function(){
        block.value = el.value
    })
})