//Ciblage du DOM
const email= document.getElementById('email');
const password= document.getElementById('password');
const btnValid= document.getElementById('btn');
const message = document.getElementById('message');

//Paramètre
const config= {
  password: {
    minlength:6
},
};
const errorList=[
  {id: 1,message:'Format de l\'email est incorrect'},
  {id: 2,message:'le password doit comporter au moins'+' '+ config.password.minlength +' caractères'},
  {id: 3,message:'le password doit contenir au moins deux chiffres!'},


]

let errors=[]//tableau des erreurs de validations rencontrées


//fonctions
function addEvents(){

  btnValid.addEventListener('click',e=>{
    let index=null;
    //email
    index = search(1);// recherche de la valeur 1

    if (email.value.indexOf('@')== -1){//situation d'erreur
    // si index de valeur 1 non trouvé dans le tableau errors alors
    // on l'ajoute grace à push
      if (index == -1) errors.push(1);
      }
      else {//pas d'erreur
      // si la valeur existe dans le tableau, on la retire
      // gràce à splice
      if(index != -1) errors.splice(index,1);
      }

function countNumericValues(str) {
  // renvoie le nombre de valeurs numérique
  // rencontées dans une chaine
  let nbNumericValues=0;
  //on parcours la totalité de chaine de fournie en entrée
  for (let i = 0; i < str.length; i++) {
    //si le caractère est compris entre à et 9
    if (str[i] >=0 && str[i]<= 9) {
      nbNumericValues++;

    }
  }
  return nbNumericValues;
}
    //password longueur minimale
    index= search(2);//comme pour la valeur 1

    if (password.value.length<config.password.minlength){
      if (index == -1)errors.push(2)
    }else {
      if(index != -1)errors.splice(index,1);
    }

    //password au moins deux chiffres
    index= search(3);
    if(countNumericValues(password.value) < 2){//erreur
        if (index == -1)errors.push(3)
    }else {// pas erreur
        if(index != -1)errors.splice(index,1);
    }
    displayErrors();
  })

}


function search(id){
  let index= -1;
for (let i = 0; i < errors.length; i++) {
  if (id == errors[i]){
    index = i;// on renvoi l'indice  (position dans le tableau)
    // de l'élément trouvé. -1 si l'élément n'a pas été trouvé
    break;//sortie de boucle (élement recherché trouvé)
  }
}
  return index;
}

function displayErrors(){

  let html='';
  errors.forEach(error => {
    html+= '<li>'+getErrorMessage(error)+'</li>'
  })
  message.innerHTML= html;
}

function getErrorMessage(id){
  //renvoie le message associée à l'identification d'erreurs//passée en entrée
  let message= null;

  for( let i=0; i<errorList.length;i++){
    if (id == errorList[i].id){
    message= errorList[i].message;
    break;
  }
}
return message;
}
function init(){
addEvents();

}
init();


//
