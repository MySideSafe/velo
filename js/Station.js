class Station{
    constructor(idStation,positionGps,nomStation,adresseStation,etatStation,nbrPlacesDispo,nbrVelosDispo,marqueur){
        this.idStation=idStation;
        this.positionGps=positionGps;
        this.nomStation=nomStation;
        this.adresseStation=adresseStation;
        this.etatStation=etatStation;
        this.nbrPlacesDispo=nbrPlacesDispo;
        this.nbrVelosDispo=nbrVelosDispo
        this.marqueur="";
    }
    
   ajouterMarqueur(map){
        this.marqueur = L.marker(this.positionGps).addTo(map.description);
    }
    
    
    chargerInfosStation(map) {
    
    document.getElementById("mapid").classList.replace('col-md-12', 'col-md-8');
    document.getElementById("infoStation").classList.replace('d-none', 'col-md-4'); 
    map.setNouvellePosition(this.positionGps);
    document.getElementById("nomStation").textContent = this.nomStation;
    document.getElementById("adresseStation").textContent = this.adresseStation;
    document.getElementById("nbrVelosDispo").textContent = this.nbrVelosDispo;
    document.getElementById("nbrPlacesDispo").textContent = this.nbrPlacesDispo;
    if(this.etatStation!="CLOSED" && this.nbrVelosDispo!=0)
        {
          document.getElementById("formReservation").classList.replace("d-none","d-block"); 
        }
    else{
        if(document.getElementById("formReservation").className==="d-block"){
        document.getElementById("formReservation").classList.replace("d-block","d-none"); 
            }
    }
}
    
    
    
}