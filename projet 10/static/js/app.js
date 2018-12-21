//Cibllage du DOM
const btnTest = document.querySelector('#btnTest');
const image = document.getElementById('animals');
const time = document.querySelector('.timer');

let interv= null;
let config= {
  speed: 100,
  step: .1,
  stop: 40,
  delay: 4000,
}


//fonctions
function addEvents(){
btnTest.addEventListener('click', displayHide)

}
function displayHide(){
  interv = setInterval(()=>{
    let currentOpa= image.style.opacity;
    image.style.opacity= currentOpa - config.step;
    if(currentOpa <= 0)clearInterval(interv)  })

}
function timer(){
  interv=clearInterval()
}

function init(){
addEvents();
setInterval(displayHide,200);


}
init();


//
