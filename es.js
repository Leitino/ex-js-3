/*lista di oggetti aerei in volo;
ogni oggetto contiene:
latitudine,longitudine,kg_carburante,quanti km*kg.
Inoltre c'è una lista di areoporti con longitudine e altitudine,
quali aerei riescono a raggiungere tuttti gli areoporti?*/

function Aereo(latitudine, longitudine, kg_carburante, km_kg){//notazione a costruttore
  this.latitudine=latitudine;
  this.longitudine=longitudine;
  this.kg_carburante=kg_carburante;
  this.km_kg=km_kg;
  this.distanza = function(){
    return this.kg_carburante * this.km_kg;
  }
}

//creo oggetto sfruttando la funzione della notazione a costruttore
var aereo1 = new Aereo('27.349', '10.113', '100', '10');
var aereo2 = new Aereo('33.234', '17.998', '200', '11');
var aereo3 = new Aereo('48.221', '31.654', '150', '15');

function Aeroporto(latitudine, longitudine){
  this.latitudine=latitudine;
  this.longitudine=longitudine;
}

var aeroporto1 = new Aeroporto('10.000', '5.787');
var aeroporto2 = new Areoporto('22.887', '20.111');
var aeroporto3 = new Areoporto('66.223', '39.687');



















function DistanceInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return console.log(d);

}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
