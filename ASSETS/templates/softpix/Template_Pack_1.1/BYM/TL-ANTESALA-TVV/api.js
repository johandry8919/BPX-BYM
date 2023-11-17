const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const Fecha = document.getElementById("fecha");
const Nombre_Estadio = document.getElementById("nombre_estadio");
const apiUrl = "https://bss.qualitybeisbol.com/api/boxscore";
const authToken = "Bearer 45eadc85b650776e48bdf666120d0fbc";

function runTemplateUpdate() {
function ajustarCadena(cadena) {
  cadena = cadena.replace(/\+/g, ' ');
  cadena = cadena.replace(/\+/g, ' ');
  return cadena;
}

const expresion = htmlDecode(e('f0').innerText);
const cadenaAjustada = ajustarCadena(expresion);





  
    
  e('record_visitante').innerHTML = e('f1').innerText
  e('record_homeclub').innerHTML =  e('f2').innerText





      Id_equipo_visitante.src = logoLeft[e('f5').innerText].img_url;
      Id_equipo_homeclub.src = logoRight[e('f6').innerText].img_url;
  
   


      Fecha.innerText = e('f3').innerText;
      Nombre_Estadio.innerHTML = e('f4').innerText;
  
      runAnimationIN();
  }