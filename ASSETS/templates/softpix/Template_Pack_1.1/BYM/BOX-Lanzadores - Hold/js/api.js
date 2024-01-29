const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const Fecha = document.getElementById("fecha");
const Nombre_Estadio = document.getElementById("nombre_estadio");

const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
const url2 = new URL("https://bss.qualitybeisbol.com/api/diario-estadio-era");



function runTemplateUpdate() {

  if(e('f3').innerText == 'none'){e('logoPatrocinio').style="opacity: 0;"}
else{ e('logoPatrocinio').src = e('f3').innerText}

  function ajustarCadena(cadena) {
    cadena = cadena.replace(/\+/g, ' ');
    cadena = cadena.replace(/\+/g, ' ');
    return cadena;
  }
  
  const expresion = htmlDecode(e('f0').innerText);
  const cadenaAjustada = ajustarCadena(expresion);
  
  const params = {
    id_juego:  `${cadenaAjustada}`,
  };
  
  
  Object.keys(params).forEach(key => {
    url1.searchParams.append(key, params[key]);
    url2.searchParams.append(key, params[key]);
  });
  
  const headers = {
    "Authorization": "Bearer 45eadc85b650776e48bdf666120d0fbc",
    "Content-Type": "application/json",
    "Accept": "application/json",
  };
  

var   id_peloteros;
let parte  ;
  
let bateadores1 = htmlDecode(e('f1').innerText)
let bateadores2 = htmlDecode(e('f2').innerText)

let temporada = htmlDecode(e('f6').innerText)
let periodo = htmlDecode(e('f7').innerText)
let EstaTemporada = document.getElementById("Tenporada")


switch (temporada) {
  case "2023":
    EstaTemporada.innerText = (periodo == "TR") ? "ESTA TEMPORADA" : (periodo == "RR") ? "ROUND ROBIN 2024" : (periodo == "F") ? "FINAL 2024" : "";
    break;
  case "2022":
    EstaTemporada.innerText = (periodo == "TR") ? "TEMPORADA 2022" : (periodo == "RR") ? "ROUND ROBIN 2023" : (periodo == "F") ? "FINAL 2023" : "";
    break;
  case "2021":
    EstaTemporada.innerText = (periodo == "TR") ? "TEMPORADA 2021" : (periodo == "RR") ? "ROUND ROBIN 2022" : (periodo == "F") ? "FINAL 2021" : "";
    break;
  case "2020":
    EstaTemporada.innerText = (periodo == "TR") ? "TEMPORADA 2020" : (periodo == "RR") ? "ROUND ROBIN 2021" : (periodo == "F") ? "FINAL 2021" : "";
    break;
  default:
    EstaTemporada.innerText = "";
    break;
}

let seleciono;

if(bateadores1 != ''){
  seleciono =  bateadores1
}else if(bateadores2 != ''){
  seleciono =  bateadores2
}



gapi.load('client', initClient);
var SPREADSHEET_ID = '1U9M3JB2U2NKqAGEB3jCie4Y50zjzzXpmZ2Q5kExSHLc';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';


function initClient() {
   gapi.client.init({
       apiKey: 'AIzaSyBRYaICc8ckdInbL0JuotA-nXGM-gA-z7I',
       discoveryDocs: DISCOVERY_DOCS,
       scope: SCOPES
   }).then(function () {
       getDataB();
   }, function (error) {
       console.log(error);
   });
}

function getDataB() {
   gapi.client.sheets.spreadsheets.get({
       spreadsheetId: SPREADSHEET_ID
   }).then(function (response) {
       var sheets = response.result.sheets;
       // sheets es un array de objetos que contiene información sobre cada hoja.
       for (var i = 0; i < sheets.length; i++) {
           var sheet = sheets[i];

           var sheetName = sheet.properties.title;
           if (sheetName === 'bx') {
            let datos;
             if(bateadores1 != '') datos = '!K46:L49' , parte = 1
              else if(bateadores2 != '') datos = '!K39:L42' , parte = 0
               gapi.client.sheets.spreadsheets.values.get({
                   spreadsheetId: SPREADSHEET_ID,
                   range: sheetName + datos
               }).then(function (response) {
                   var data = response.result.values;
                   if (data && data.length > 0) {
                       var primeraFila = data[seleciono];

                       id_peloteros = primeraFila[1] 

                       document.getElementById('name').innerHTML = `<p>${primeraFila[0]}</p>`
                      

                            fetch(url1, {
                                method: "GET",
                                headers,
                            })
                                .then(response => response.json())
                                .then(result1 => {
                                    if (result1) {
                                        let {
                
                                            id_lanzador_homeclub,
                                            id_lanzador_visitante,
                                            id_equipo_visitante,
                                            id_equipo_homeclub,
                                            lanzador_homeclub_strikes,
                                            lanzador_homeclub_bolas,
                                            lanzador_homeclub_foul,
                                        } = result1.data.juego
                                          //data / boxscore / visitante /visitante
                                          const totalStrikesBolasFoul =
                                          lanzador_homeclub_bolas +
                                          lanzador_homeclub_foul +
                                          lanzador_homeclub_strikes;


                                          if(parte == 0){
                                            vatiadores = id_peloteros
                                            Id_equipo_visitante.src = logos_equipos[id_equipo_visitante].img_url;
                                          } else {
                                            vatiadores = id_peloteros
                                            Id_equipo_visitante.src = logos_equipos[id_equipo_homeclub].img_url;
                                          }
                
                
                                        const url = new URL(
                                          "https://bss.qualitybeisbol.com/api/acumula-lanzador-era"
                                      );
                                      
                                      const params = {
                                        "periodo": periodo,
                                        "temporada": temporada,
                                      
                                      };
                                      Object.keys(params)
                                          .forEach(key => url.searchParams.append(key, params[key]));
                                      
                                      
                                      fetch(url, {
                                          method: "GET",
                                          headers,
                                      }).then(response => response.json())
                                      .then(datas => {

                
                                        datas.data.forEach((element, index) => {
                
                                            if (element.id_picher == id_peloteros) {

                                              let HOLD =  element.HOLD ? element.HOLD : '0'
                                              let G=  element.G  ? element.G : '0'
                                              let P =  element.P ? element.P : '0'
                                              let ERA =  element.ERA ?element.ERA : '0.0'
                                              let IP =  element.IP ?element.IP : '0'
                                              let SO =  element.SO ? element.SO : '0'

                                      
                                       
                                        document.getElementById('apariciones_right').innerText = HOLD
                                        document.getElementById('GP').innerText = G + '-' + P
                                        document.getElementById('efec_right').innerText = ERA
                                        document.getElementById('ip_right').innerText = IP
                                        document.getElementById('k_right').innerText = SO
                                
                                        
                                          }
                
                                        })
                                     
                                      });
                                    
                                      runAnimationIN();

                                      

                                     
                                    } else {
                                        console.error("Error fetching data:", response.statusText);
                                    }
                                })
                                .catch(error => {
                                    console.error("Error en una de las solicitudes:", error);
                                });
                        

                    

                   } 


               


               }, function (error) {
                   console.log(error);
               });
           }
       }
   }, function (error) {
       console.log(error);
   });


  
}


                    
}








