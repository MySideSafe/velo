class Formulaire{
    constructor(formDom){
        this.formDom=formDom;
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
}