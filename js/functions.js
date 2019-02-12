function chargerInfosStation(station) {
    
    document.getElementById("mapid").classList.replace('col-md-12', 'col-md-8');
    document.getElementById("infoStation").classList.replace('d-none', 'col-md-4');
    document.getElementById("nomStation").textContent = station.nomStation;
    document.getElementById("adresseStation").textContent = station.adresseStation;
    document.getElementById("nbrVelosDispo").textContent = station.nbrVelosDispo;
    document.getElementById("nbrPlacesDispo").textContent = station.nbrPlacesDispo;
    if(station.etatStation!="CLOSED" && station.nbrVelosDispo!=0)
        {
          document.getElementById("formReservation").classList.replace("d-none","d-block"); 
        }
    else{
        if(document.getElementById("formReservation").className==="d-block"){
        document.getElementById("formReservation").classList.replace("d-block","d-none"); 
            }
    }
}

//onchange="sessionStorage.tata=this.value"
/*function ecouteClient(){
    
    document.getElementById("nomFamille").addEventListener("click",function(){
    console.log("aa");
    sessionStorage.nomDeFamille=document.getElementById("nomFamille").value;  
});
}*/



function recupererInfosReservation(){
    sessionStorage.nomDeFamille = document.getElementById("nomFamille").value;
        sessionStorage.prenom = document.getElementById("prenom").value;
}