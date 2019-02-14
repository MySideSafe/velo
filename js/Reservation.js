class Reservation {
    constructor(client, dateD) {
        this.client = client;
        this.date = dateD;
    }
    
    setClient(client) {
        this.client = client
    }
    
    setDateD(dateD) {
        this.date = dateD;
    }
    
    //méthode qui préremplit le formulaire si il existe des localStorage
    preremplirForm(){
        if(localStorage.nomDeFamille!=""&&localStorage.prenom!="")
            {
                document.getElementById("nomFamille").value=localStorage.nomDeFamille;
                document.getElementById("prenom").value=localStorage.prenom
            }
    }
    afficherForm(station) {
        //Si on peut effectuer une réservation on affiche le formulaire
        if (station.stationAccessible()) {
     document.getElementById("formReservation").classList.replace("d-none", "d-block");
            this.preremplirForm();
        } else if (document.getElementById("formReservation").classList.contains("d-block")) {
            document.getElementById("formReservation").classList.replace("d-block", "d-none");
        }


    }
    enregistrerReservation(client) {
        sessionStorage.nomDeFamille = client.nom;
        sessionStorage.prenom = client.prenom;
        sessionStorage.signature = client.signature;
    }

    afficherReservation() {
        //station.enleverUnVelo();
        //station.chargerInfosStation();
        // todo retirer un vélo dans l'affichage de infos station
        //Todo afficher timer de 20 min
        document.getElementById("recapReservation").classList.replace("d-none", "d-block");
    }

    annulerReservation() {

    }
}