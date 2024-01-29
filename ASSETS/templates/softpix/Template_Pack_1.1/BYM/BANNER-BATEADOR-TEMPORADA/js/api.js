


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

var  parte;
  
let bateadores1 = htmlDecode(e('f1').innerText)
let bateadores2 = htmlDecode(e('f2').innerText)
let Temporada = htmlDecode(e('f6').innerText)
let periodo = htmlDecode(e('f7').innerText)
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
            if(bateadores2 != '') datos = '!K17:M25' ,parte  = 0
              else if(bateadores1 != '') datos = '!K28:M36' , parte = 1
               gapi.client.sheets.spreadsheets.values.get({
                   spreadsheetId: SPREADSHEET_ID,
                   range: sheetName + datos
               }).then(function (response) {
                   var data = response.result.values;
                   if (data && data.length > 0) {
                       var primeraFila = data[seleciono];
                       id_peloteros = primeraFila[1] 
                       id_equipo_jugado = primeraFila[2] 
                       Nombre.innerText =  primeraFila[0]

                   } 

                   if(e('f3')){
                    if(e('f3').innerText == 'none'){
                        e('logoPatrocinio').style="opacity: 0;"
                        e('cont-3').style.display = 'none'
                        document.querySelector('.contcenter').style.left = '20%'
                
                    }else if (e('f3').innerText){
                        e('logoPatrocinio').src = e('f3').innerText
                       
                
                    } 
                    if(e('primer_turno')){
                      e('primer_turno').innerHTML = htmlDecode(e('f4').innerText)
                    }
            
                 }
            
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
              
            
            
              const url1 = "https://bss.qualitybeisbol.com/api/boxscore";
            
            
            
              Promise.all([fetchApiData(url1, params)])
                .then(([result1]) => {
            
                   let { 
                    id_bateador_homeclub,
                    id_bateador_visitante,
                    id_equipo_homeclub,
                    id_equipo_visitante,

                    } = result1.data.juego;
            
        
                    const url = new URL(
                      "https://bss.qualitybeisbol.com/api/acumula-pelotero-ave"
                  );
                  
                  const params = {
                      "id_bateador": id_peloteros,
                      "periodo": periodo,
                      "temporada":Temporada,
                      
                      
                  };
                  Object.keys(params)
                      .forEach(key => url.searchParams.append(key, params[key]));
                  
                  
                  fetch(url, {
                      method: "GET",
                      headers,
                  }).then(response => response.json())
                  .then(datas => {

                  
                    logos_equipos.src = Logos_equipos[id_equipo_jugado].img_url;

                    if(periodo == "RR" &&  Temporada == "2023" ) Temporada = "2024"
                    else if (periodo == "F" &&  Temporada == "2023") Temporada = "2024"
                  if(periodo == "RR" &&  Temporada == "2018" ) Temporada = "2019"
                    else if (periodo == "F" &&  Temporada == "2018") Temporada = "2019"
                   
                    document.getElementById('fxt').innerText = `${periodo} ${Temporada}   AVG  ${0} /  CA ${0} /  H ${0} / HR ${0}  / CI ${0} `;
                    datas.data.forEach((element, index) => {

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

                       let id_jugador;


                       //AVE (NUMERO) / CA (NUMERO) / H (NUMERO) / HR (NUMERO) / CI (NUMERO)

                    if(parte == 1){
                      if(document.getElementById('fxt')){ 
                        document.getElementById('fxt').innerText = `${periodo} ${Temporada}    AVG  ${AVE} /  CA ${element.CA} /  H ${element.HIT} / HR ${element.HR}  / CI ${element.CI} `;
                       
                      }
            
            
                    }else{
                     
                     
                     
            
                      if(document.getElementById('fxt')){
                        document.getElementById('fxt').innerText = `${periodo} ${Temporada}    AVG  ${AVE} /  CA ${element.CA} /  H ${element.HIT} / HR ${element.HR}  / CI ${element.CI} `;
                       
                      }
                      
                    }

                    })

                      
                    runAnimationIN();
                  });
            
                    
                  
            
                  
            
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


