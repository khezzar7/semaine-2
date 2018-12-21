//Déclaration du DOM

const flagEn= document.getElementById('flagEn');
const flagIt= document.getElementById('flagIt');
const spanEn= document.getElementsByClassName('en');
const spanIt= document.getElementsByClassName('it');



// console.log(flagEn);
// console.log(spanIt);
// variable permettant de relier des flags et des spans
//variable utiliser par la fonction addEventsV2
let languages=[
  {flag: flagEn, spans: spanEn, active:false},
  {flag: flagIt, spans: spanIt, active: false}
];



//Fonctions
//Version 1: on duplique les instructions pour chaque langues.
//Donc une approche redondante
function addEvents(){
  flagEn.addEventListener('click', e=>{
    for(let i=0; i<spanEn.length; i++){
      spanEn[i].style.display='inline';
    }

  })

}
//Version 2: Optimisation: on passe par un tableau mettant en relation sous forme
//d'objets, des drapeaux(img)
//et les spans.Pas de redondance, il suffit de mofifier
//la variable languages pour ajouter une langue,
// addEventsV2 n'a pas à être modifier
//donc continuera de fonctionnée sans besoin
// de modification
function addEventsV2(){
  languages.forEach(language=>{
    //tester avec un console.log
    //console.log(language);
    language.flag.addEventListener('click',e=>{

      // let display= '';
      // if (language.active){
      //   display= 'none';
      // }else {
      //   display='inline';
      // }

      //Expression TERNAIRE: (expr.bool) "?" instruction a éxecu si vrai ":" instr si faux
      //Si language.active vaut true, display est initialisée
      // avec la valeur 'none', sinon display reçoit 'inline'
      let display = (language.active)? 'none': 'inline';
      for (let i = 0; i < language.spans.length; i++) {
        language.spans[i].style.display= display;

      }

      //changer l'apparence du drapeau
      // if (language.active) {
      //   language.flag.style.opacity= 0.3
      //
      // }else {
      //   language.flag.style.opacity =1
      // }
      language.flag.style.opacity =(language.active) ? 0.3 : 1;

      // bascule (toggle), on renverse la valeur de language.active
      //grâce à l'opérateur de négation (inverse) "!"
      language.active = !language.active;
    })

    })
  }



function init(){
addEventsV2();
}
init();
