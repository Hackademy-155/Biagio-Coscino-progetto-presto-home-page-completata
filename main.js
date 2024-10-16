let navbar = document.querySelector('nav');

document.addEventListener('scroll', ()=>{
  
    if(window.scrollY > 895){
        navbar.classList.add('navbarScroll');
    }else{
        navbar.classList.remove('navbarScroll');
    }
})
let check = true;

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

function createInterval(n, element, time){
    let counter = 0;
    let intervallo = setInterval(()=>{
        if(counter < n){
            counter++;
            element.innerHTML = counter;
        }else{
            clearInterval(intervallo);
        }
    }, time); setTimeout(()=>{
        check = true;
    }, 50000);
}

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && check){
createInterval(100, firstNumber, 100);
createInterval(100,secondNumber, 50)
createInterval(150, thirdNumber, 20)
check = false;
        }
    })
})

observer.observe(firstNumber);