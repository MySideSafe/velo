class Reservation{
    constructor(client,dateD){
        this.client=client;
        this.date=dateD;
        
        
    }
    
    enregistrerReservation(client){
        sessionStorage.nomDeFamille = client.nom;
        sessionStorage.prenom =client.prenom;
        sessionStorage.signature =client.signature;
    }
    
    afficherReservation()
    {
        document.getElementById("recapReservation").classList.replace("d-none","d-block");
    }
}



