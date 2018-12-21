//Ciblage du DOM
const email= document.getElementById('email');
const btnValid= document.getElementById('btn');
const success= document.getElementById('thumb');
const failure= document.getElementById('loose');




//fonctions
function addEvents(){
email.addEventListener('keyup',e=>{
  let cond1= email.value.length > 6;
  let cond2= email.value.indexOf('@') != -1;
  let cond3=
   (email.value.substr(-3) == '.fr')||
   (email.value.substr(-3) =='.it')||
   (email.value.substr(-4) == '.com');



  if(cond1 && cond2 && cond3){

    btnValid.disabled=false;//condition remplies
    success.style.display ='inline';
    failure.style.display ='none';

  }else {

    btnValid.disabled=true;
    failure.style.display ='inline';
    success.style.display ='none';
  }

})
}
function init(){
addEvents();

}
init();


//
