class Station{
    constructor(idStation,positionGps,nomStation,adresseStation,etatStation,nbrPlacesDispo,nbrVelosDispo){
        this.idStation=idStation;
        this.positionGps=positionGps;
        this.nomStation=nomStation;
        this.adresseStation=adresseStation;
        this.etatStation=etatStation;
        this.nbrPlacesDispo=nbrPlacesDispo;
        this.nbrVelosDispo=nbrVelosDispo
    }
    
    ajouterMarqueur(map){
        let marker = L.marker(this.positionGps).addTo(map.description);
        marker.bindPopup(this.idStation+" "+this.nomStation);
        
    }
    
    
}