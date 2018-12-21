//Ciblage du DOM
const tabLinks= document.getElementsByClassName('tabLink');
const sections= document.getElementsByTagName('section');

let activeTabIndex =0;//indice de la section/lien active

//toujours faire un console.log pour voir si tout fonctionne


// Déclaration de fonction
function addEvents(){
  //On attribut a chaque liens un écouteurs d'évenements
  for(let i=0; i<tabLinks.length;i++){
    tabLinks[i].addEventListener('click', e=>{

      //reset();Approche "brutale", on boucle sur l'ensemble des sections
      //et des liens pour nettoyer

      //Nettoyage
      //On cible précisémment les élements
      //devant être nettoyé grâce a l'indice mémorisé lors du précedent clique
      sections[activeTabIndex].style.display='none';
      tabLinks[activeTabIndex].classList.remove('active');

      // On affiche la section correspondant au lien cliqué
      sections[i].style.display='block';

      //ajout de la class active sur l'element cliqué
       tabLinks[i].classList.add('active');
       //Memorisation/ Mise a jour de l'index de la section active
       activeTabIndex=i;
    })

  }
}

function init(){
  //on affiche la premiere section par défaut
  sections[activeTabIndex].style.display='block';
  //on rend actif le premier lien
  tabLinks[activeTabIndex].classList.add('active');
  addEvents();
}
function reset(){
  //masque toutes les sections
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display='none';
  }
  //retire la class active sur tous les liens
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove('active');
  }
}
init();
