//github.com/cdufour/poec-symfony_automne-2018.js

//Ciblage d'élémets du DOM
const sectionPlayers = document.getElementById('players');
const selectTeam= document.getElementById('selectTeam');
const resultNumber= document.getElementById('resultNumber');
const cbActive= document.getElementById('cbActive');

//Sources de données globales (accessible a toutes les fonction(s))

let players = [
  {active:true , picture:'https://medias.lequipe.fr/img-photo-jpg/09-12-17-torino-allianz-stadium-serie-a-16a-giornata-juventus-inter-nella-foto-blaise-matuidi/1500000000891906/121:245,2417:1775-624-416-75/67f39.jpg', firstname: 'Blaise', lastname: 'Matuidi', numéro: 16, team: 'Juventus',firstname:'Blaise',lastname:'Matuidi',numéro:16,team:'FC Juventus'},

  {active:false, picture:'static/img/dybala.jpg',firstname:'Paolo',lastname:'Dybala',numéro:10,team:'FC Juventus'},

  {active:false, picture:'static/img/bonucci.jpg',firstname:'Leo',lastname:'Bonucci',numéro:19,team:'FC Juventus'},

  {active:true ,picture:'',firstname:'Kylian',lastname:'Mbappé',numéro:7,team:'PSG'},

];


//Déclaration d'événements
selectTeam.addEventListener('change', e=>{

buildTable(e.target.value, false);

})
cbActive.addEventListener('click',e=>{
  buildTable(null, e.target.checked);
})

//fonctions

function buildTable(selectedTeam, activePlayers){
  // console.log(selectedTeam)
  let nbVisiblePlayers= players.length;
  let list = '<table class="table table-bordered table-striped">';
  list += '<thead><tr><th>Photo</th><th>Nom</th><th>Prénom</th><th>Equipe</th><th>Numéro</th></tr></thead>'
  //ES6 (arrow function)
  players.forEach(player => {

    if (selectedTeam!= null && selectedTeam != '0')
    {
      if (player.team != selectedTeam){
        list += '<tr style= "display:none">';
        nbVisiblePlayers--;//décrémentation
      }else{
        list += '<tr>';
      }

    }else{
      if(player.active  != activePlayers && activePlayers){
        list += '<tr style= "display:none">';
        nbVisiblePlayers --;//décrémentation
      }else{
        list += '<tr>';
      }
    }


    // if (player.lastname.indexOf('ci') !=-1){
    //   list+='<td style = "color: red">' + player.lastname +'</td>';
    // }else{
    //   list += '<td>' + player.lastname+ '</td>';
    // }
    if (player.picture == ''){
       list += '<td><img class="image" alt="" src="static/img/inconnu.jpg"/></td>';
    }else{
      list += '<td><img class="image" title="'+ player.lastname +'" src="'+ player.picture +'"/></td>';
    }
    list+= '<td>' + player.lastname + '</td>';

    list+= '<td>' + player.firstname + '</td>';

    list+= '<td>' + player.team + '</td>';

    list += '<td><div class="playerNumber">' + player.numéro + '</td>';


    list += '</tr>';
  })
  list += '</table>';
  sectionPlayers.innerHTML= list;
  resultNumber.innerText= nbVisiblePlayers + ' joueur(s) trouvé(s)';
}


function init(){
  buildTable(null,false);
}
//Démarrage de l'application(initialisation)
init();
