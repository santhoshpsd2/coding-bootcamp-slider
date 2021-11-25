const cards = document.querySelectorAll('.card');
const nextbutton = document.querySelector('.next');
const prevbutton = document.querySelector('.prev');

let activecard = 0;

function changecard(){
    cards.forEach((element,index) => {
        if(index== activecard){
            element.classList.add('active');
            element.classList.add('right');
        }else{
            element.classList.remove('active');
            element.classList.remove('right');
            element.classList.remove('left');
        }
    });
}

function changecard1(){
    cards.forEach((element,index) => {
        if(index== activecard){
            element.classList.add('active');
            element.classList.add('left');
        }else{
            element.classList.remove('active');
            element.classList.remove('right');
            element.classList.remove('left');
        }
    });
}

nextbutton.addEventListener('click',()=>{
    if(activecard == cards.length-1){
        activecard = 0;
    }else{
        activecard++;
    }
    changecard();
})

prevbutton.addEventListener('click',()=>{
    if(activecard == 0){
        activecard = cards.length -1;
    }else{
        activecard--;
    }
    changecard1();
})