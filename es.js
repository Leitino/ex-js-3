/*lista di oggetti aerei in volo;
ogni oggetto contiene:
latitudine,longitudine,kg_carburante,quanti km*kg.
Inoltre c'è una lista di areoporti con longitudine e altitudine,
quali aerei riescono a raggiungere tuttti gli areoporti?*/

//creazione di più oggetti notazione a costruttore//
function Aereo(nome, lat, long, kg_carburante, km_kg){
  this.nome=nome;
  this.lat=lat;
  this.long=long;
  this.kg_carburante=kg_carburante;
  this.km_kg=km_kg;
  this.durata = function(){
    return this.kg_carburante * this.km_kg;
  }
  distanza=this.durata()
}



function Aeroporto(nome, lat, long){
  this.nome=nome;
  this.lat=lat;
  this.long=long;
}


//creo oggetto sfruttando la funzione della notazione a costruttore
var aereo1 = new Aereo('a', 27.349, 10.113, 100, 10);
var aereo2 = new Aereo('b', 33.234, 17.998, 200, 11);
var aereo3 = new Aereo('c', 48.221, 31.654, 150, 15);

var aeroporto1 = new Aeroporto('x', 10.000, 5.787);
var aeroporto2 = new Aeroporto('y', 22.887, 20.111);
var aeroporto3 = new Aeroporto('z', 66.223, 39.687);

var aerei =[aereo1, aereo2, aereo3];
var aeroporti =[aeroporto1, aeroporto2, aeroporto3];

for (var i = 0; i < aerei.length; i++){
  var km = aerei[i].durata()
  console.log(aerei[i].nome + ' può percorrere ' + km + ' km')
}





//funzioni//

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
