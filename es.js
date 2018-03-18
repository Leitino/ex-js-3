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

function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}


//creo oggetto sfruttando la funzione della notazione a costruttore
var aereo1 = new Aereo('A', 27.349, 10.113, 100, 10);
var aereo2 = new Aereo('B', 33.234, 17.998, 200, 11);
var aereo3 = new Aereo('C', 48.221, 31.654, 150, 15);

var aeroporto1 = new Aeroporto('X', 10.000, 5.787);
var aeroporto2 = new Aeroporto('Y', 22.887, 20.111);
var aeroporto3 = new Aeroporto('Z', 66.223, 39.687);

var aerei =[aereo1, aereo2, aereo3]
var aeroporti =[aeroporto1, aeroporto2, aeroporto3];

for (var i = 0; i < aerei.length; i++){
  var km = aerei[i].durata()
  var distanza1 = distance(aerei[i].lat, aerei[i].long, aeroporto1.lat, aeroporto1.long)
  var distanza2 = distance(aerei[i].lat, aerei[i].long, aeroporto2.lat, aeroporto2.long)
  var distanza3 = distance(aerei[i].lat, aerei[i].long, aeroporto3.lat, aeroporto3.long)
  alert('la distanza fra ' + aerei[i].nome + ' e aeroporto1 è ' + distanza1 + ' e ' + aerei[i].nome + ' può percorrere ' + km + ' km')
  if (km < distanza1) {
    alert(aerei[i].nome+' non può raggiungere aeroporto1')
  }
    else {
      alert(aerei[i].nome+' può raggiungere aeroporto1')
    }
  alert('la distanza fra ' + aerei[i].nome + ' e aeroporto2 è ' + distanza2 + ' e ' + aerei[i].nome + ' può percorrere ' + km + ' km')
  if (km < distanza2) {
    alert(aerei[i].nome+' non può raggiungere aeroporto2')
  }
    else {
      alert(aerei[i].nome+' può raggiungere aeroporto2')
    }
    alert('la distanza fra ' + aerei[i].nome + ' e aeroporto3 è ' + distanza3 + ' e ' + aerei[i].nome + ' può percorrere ' + km + ' km')
    if (km < distanza3) {
      alert(aerei[i].nome+' non può raggiungere aeroporto3')
    }
      else {
        alert(aerei[i].nome+' può raggiungere aeroporto3')
    }
}

//funzioni//
