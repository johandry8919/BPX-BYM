const logos_equipos = document.getElementById("logos_equipos");
const fondo_equipos = document.getElementById("fondo_equipos");
const priner_turno = document.getElementById("priner_turno");
const Nombre = document.getElementById('name')

const authToken = "45eadc85b650776e48bdf666120d0fbc"; // Reemplaza con tu token de autorización

const headers = {
  "Authorization": `Bearer ${authToken}`,
  "Content-Type": "application/json",
  "Accept": "application/json",
};

const fetchApiData = (url, params) => {
  const apiUrl = new URL(url);
  Object.keys(params).forEach(key => {
    apiUrl.searchParams.append(key, params[key]);
  });
  return fetch(apiUrl, {
    method: "GET",
    headers,
  })
  .then(response => response.json());
};



function runTemplateUpdate() {
var   id_peloteros;
var id_equipo_jugado ; 
var  parte ; 
var AVE = '';
var CA = '' ;
var HIT = '';
var HR = '';
var CI = '';
var OPS = '';
  
let bateadores1 = htmlDecode(e('f1').innerText)
let bateadores2 = htmlDecode(e('f2').innerText)
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
  const url = new URL(
    "https://bss.qualitybeisbol.com/api/lineup"
);


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
            if(bateadores2 != '') datos = '!K17:S25' , parte = 0
              else if(bateadores1 != '') datos = '!K28:S36' , parte = 1
               gapi.client.sheets.spreadsheets.values.get({
                   spreadsheetId: SPREADSHEET_ID,
                   range: sheetName + datos
               }).then(function (response) {
                   var data = response.result.values;
                   if (data && data.length > 0) {
                       var primeraFila = data[seleciono];
                       id_peloteros = primeraFila[1] 
                       id_equipo_jugado = primeraFila[2] 
                         Nombre.innerText = primeraFila[0]
        
                
                    Object.keys(params)
                        .forEach(key => url.searchParams.append(key, params[key]));
                    fetch(url, {
                        method: "GET",
                        headers,
                    }).then(response => response.json())
                    .then(data => {
                      let result ;
                    parte == 0 ?  result = data.data.visitante.peloteros :  result =  data.data.homeclub.peloteros
                     posicion_poscampo =['BD' ,'BD' , ' C' , '1B', '2B' , '3B' ,' SS' , 'LF' ,'CF' , 'RF']

                     result.forEach(element => {

                      

                      if(element.id_jugador == id_peloteros ){

                   
                      
                        Nombre.innerText = primeraFila[0] + ' ' + posicion_poscampo[element.posicion_campo];
                      }
                        
                      });
                    });
               
                   } 


             

                   if(e('f3')){
                    if(e('f3').innerText == 'none'){
                        e('logoPatrocinio').style="opacity: 0;"
                        e('cont-3').style.display = 'none'
                        document.querySelector('.contcenter').style.left = '20%'
                
                    }else if (e('f3').innerText){
                        e('logoPatrocinio').src = e('f3').innerText

                    } 
            
                 }
                 
                 if(e('primer_turno')){
                  e('primer_turno').innerHTML = htmlDecode(e('f4').innerText)
                }


            
              
              
              const url1 = "https://bss.qualitybeisbol.com/api/boxscore";
            
              Promise.all([fetchApiData(url1, params)])
                .then(([result1]) => {
            
                   let { 
                    id_bateador_homeclub,
                    id_bateador_visitante,
                    id_equipo_homeclub,
                    id_equipo_visitante,
            
                    } = result1.data.juego;

                    let iquipo_juega;
                    parte == 0 ? iquipo_juega = id_bateador_visitante : iquipo_juega = id_bateador_homeclub
                    const url = new URL(
                      "https://bss.qualitybeisbol.com/api/anual-pelotero-ave"
                  );
                  
                  const params = {
                      "id_bateador": id_peloteros,
                      "periodo": "TR",
                  };
                  Object.keys(params)
                      .forEach(key => url.searchParams.append(key, params[key]));
                  
                  
                  fetch(url, {
                      method: "GET",
                      headers,
                  }).then(response => response.json())
                  .then(datas => {
                    datas.data.forEach((element, index) => {
                      if(index == 0){


                     

                        function convertirNumero(numero) {
                          if (numero === null || typeof numero === "undefined") {
                            numero =.000;
                          }
                          return numero.toString().substring(1);
                        }

                   

                       let AVE = convertirNumero(element.AVE)
                       let HR = convertirNumero(element.HR)
                       let CI = convertirNumero(element.CI)
                       let OPS = convertirNumero(element.OPS)

                        if(document.getElementById('fxg')){
                          document.getElementById('fxg').innerHTML = ` 
                     <div>
                       ${AVE} <span> AVE </span> / </div>
                      <div> ${element.HR== null?'0' :element.HR} <span > HR </span>  / </div>
                        <div>${element.CI== null?'0':element.CI} <span>CI </span>  / </div> 
                         <div> ${OPS} <span> OPS</span> </div>`;
                
                       }
                      }
                    })
            
                  });

                    let id_jugador;
                    if(parte == 1){
                      logos_equipos.src = Logos_equipos[id_equipo_jugado].img_url;
                      let data_pelotero = result1.data.boxscore.homeclub.peloteros
                      data_pelotero.forEach(element => {
                        if(element.id_pelotero == id_peloteros){
                          let resultado = parseInt(element.HIT) 
            
                           if(document.getElementById('fxt')){
                            document.getElementById('fxt').innerText = `HOY: ${element.VB} - ${resultado}  / ${element.HR} HR / ${element.HIT} H / ${element.SO} K / ${element.CI} CI`;
                           
                          }
          
                        }
                    });
            
                    }else{
                      id_jugador = result1.data.juego.id_bateador_visitante
                      logos_equipos.src = Logos_equipos[id_equipo_jugado].img_url;
                      let data_pelotero = result1.data.boxscore.visitante.peloteros
            
                      data_pelotero.forEach(element => {   
                        if(element.id_pelotero == id_peloteros){
                          let resultado = parseInt(element.HIT);
            
                           if(document.getElementById('fxt')){
                            document.getElementById('fxt').innerText = `HOY: ${element.VB} - ${resultado}  / ${element.HR} HR / ${element.HIT} H / ${element.SO} K / ${element.CI} CI`;
                           
                          }
          
                        }
                      });     
                    }
                     runAnimationIN();
            
                })
                .catch(error => {
                  console.error("Error en una de las solicitudes:", error);
                });


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




