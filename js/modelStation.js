let listeStations;
function recupererListeStation(){
    ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=73b8377b68cf91d454d51322942e64a69bf02c27",function(reponse){
        let stations =JSON.parse(reponse);
        for (uneStation of stations){
            station  = new Station(uneStation.number,uneStation.position,uneStation.name,uneStation.address,uneStation.status,uneStation.available_bike_stands,uneStation.available_bikes);
            listeStations.push(station);
        }
    });
};



