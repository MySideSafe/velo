class App {
    constructor(coord, zoom, canvas) {
        this.map = new Map(coord, zoom);
        this.initStations(this.map);
        this.initCanvas();
        var form = document.getElementById("formReservation");
        this.initReservation(form);
        
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

    initStations(map) {
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=73b8377b68cf91d454d51322942e64a69bf02c27", function (reponse) {
            let stations = JSON.parse(reponse);
            for (let uneStation of stations) {
                let station = new Station(uneStation.number, uneStation.position, uneStation.name, uneStation.address, uneStation.status, uneStation.available_bike_stands, uneStation.available_bikes);
                station.ajouterMarqueur(map);

                station.marqueur.addEventListener("click", function () {
                    station.chargerInfosStation(map);
            });

            }
        });
    }
    
    initReservation(form){
        form.addEventListener("submit", function (e) {
        e.preventDefault();
        var client = new Client();
        client.enregistrerClientDansNavigateur();
        var date = new Date();
        var res= new Reservation(client,date);
        res.enregistrerReservation(client);
        res.afficherReservation();
        });
       
    }
}

