class Map{
    constructor(coord,zoom)
    {
        this.coord=coord;
        this.zoom=zoom;
        this.description = L.map('mapid').setView(this.coord, this.zoom); 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, }).addTo(this.description);
    }
   
    
    /*afficherMap(){
        let map = L.map('mapid').setView(this.coord, this.zoom); 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, }).addTo(map);
        return map;
        
        
    }*/
    
    
}

