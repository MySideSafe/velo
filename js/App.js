class App {

    constructor(coord, zoom) {

        // this.map.afficherMap();
        //REcuperer la liste des station
        //pour chaque station créer un marqueur sur la carte.
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=73b8377b68cf91d454d51322942e64a69bf02c27", function (reponse) {
            let map = new Map(coord, zoom);
            let stations = JSON.parse(reponse);
            for (let uneStation of stations) {
                let station = new Station(uneStation.number, uneStation.position, uneStation.name,uneStation.address, uneStation.status, uneStation.available_bike_stands, uneStation.available_bike);
            
                station.ajouterMarqueur(map);
               
                /*addEventListener("click",function(){
                                                              console.log(station.idStation+" "+station.adresseStation);
                                                              });*/
            }

        });
        


    }

}