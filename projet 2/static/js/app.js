//Ciblage du DOM
const imagesSmall = document.getElementById('imagesSmall').children;
const imagesBig = document.getElementById('imagesBig').children;
const imagesSmall2 = document.getElementById('imagesSmall2').children;
const imageBig = document.getElementById('imageBig');

//console.log(section);
//console.log(imagesSmall.length);

function addEventsV1(){
  for(let i =0; i < imagesSmall.length; i ++){

    imagesSmall[i].addEventListener('mouseover', e=> {
      // e.target.src contient l'url de l'image suvolés (mouseover)
      //console.log(imagesSmall[i]);

      //approche 1: valable si les images sont dans un oredre différents
      displayImageBig(e.target.src);

      //approche 2: valable si les images sont dans le même ordre
      imagesBig[i].style.display="inline";


    })

    imagesSmall[i].addEventListener('mouseout', e=> {
      reset();
    })
  }
}

function addEventV2(){
  // ajoute un écouteur d'évenements à chaque miniatures
    for(let i = 0; i< imagesSmall2.length ; i++){
      imagesSmall2[i].addEventListener('mouseover', e=>{
        //voir si sa fonctionne avec un console.log
         displayImageBigV2(e.target.src);

         //imagesSmall2[i].style.display='inline';
      })

    }
}

function displayImageBig(imageSrc){
  //parcourt l'ensemble des images grand format

  for (let i=0; i<imagesBig.length; i++){
    //si les propriétés src des deuc images correspondent
    if (imageSrc == imagesBig[i].src){
      //on affiche l'image grand format en modifiant sa nature
      //style.display
      imagesBig[i].style.display= 'inline';

    }else {
      //sinon on masque l'image grand format qui était
      //éventuellement restée visible
      imagesBig[i].style.display= 'none';
    }
  }

}

function displayImageBigV2(imageSrc){

  let indiceSmall= imageSrc.indexOf('small/');
  let baseUrl= imageSrc.substr(0,indiceSmall);
  let fileName = imageSrc.substr(indiceSmall + 6);
  let finalUrl= baseUrl + fileName;
  console.log(finalUrl);


  imageBig.innerHTML = '<img id="big" src="'+finalUrl+'" alt="" />';
  // APRES injection de l'image de le document// ajout d'un écouteur d'évenement click
  //permettant de supprimer l'image lorsque l'on clique dessus

  document.getElementById('big').addEventListener('click',e =>
    imageBig.innerHTML = '')

}


function reset(){

  for(let i= 0; i<imagesBig.length; i++){
    imagesBig[i].style.display= 'none';
  }

}

function init(){
  addEventsV1();
  addEventV2();
}
init();
