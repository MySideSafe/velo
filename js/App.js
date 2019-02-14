class App {
    constructor(canvas) {
        let coord = [45.75, 4.85];
        let zoom = 14; 
        this.map = new Map(coord, zoom); //chargement de la map
        this.formulaire = new Formulaire(document.getElementById("formReservation"));
        this.initStations(this.map,this.formulaire); //Chargement des stations
        this.initReservation(this.formulaire.formDom);
        this.initCanvas(); //mise en place du canvas
       
    }

    initCanvas() {
        var signature = document.getElementById("signature");
        var canvas =new Canvas(signature, signature.getContext("2d"), 0, 0, 0, false);
        this.canvas = canvas;
        this.canvas.domCanvas.addEventListener("mousedown", function() {
            canvas.sourisBas();
        });
        this.canvas.domCanvas.addEventListener("mouseup", function () {
            canvas.sourisHaut();
        });
        this.canvas.domCanvas.addEventListener("mousemove", function (e) {
            canvas.dessineMouvementSouris(e);
        });
    }
    
    //Affichage de la liste des stations sur la map
    initStations(map,formulaire) {
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=73b8377b68cf91d454d51322942e64a69bf02c27", function (reponse) {
            let stations = JSON.parse(reponse);
            for (let uneStation of stations) {
               const station = new Station(uneStation.number, uneStation.position, uneStation.name, uneStation.address, uneStation.status, uneStation.available_bike_stands, uneStation.available_bikes);
                station.ajouterMarqueur(map);
                station.marqueur.addEventListener("click", function () {
                station.chargerInfosStation(map);
                formulaire.afficherForm(station);
                
            });

            }
        });
    }
    
    initReservation(formulaire){
        formulaire.addEventListener("submit", function (e) {
        e.preventDefault();
        const client = new Client();
        client.recupererClient();
        client.enregistrerClientDansNavigateur();
        var date = new Date();
        const reservation = new Reservation(client,date);
        reservation.enregistrerReservation(client);
        reservation.afficherReservation();
        });
       
    }
}

