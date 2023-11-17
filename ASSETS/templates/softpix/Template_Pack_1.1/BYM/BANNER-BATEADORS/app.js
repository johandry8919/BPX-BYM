var   id_peloteros;
var id_equipo_jugado ; 
  
let bateadores1 = htmlDecode(e('f1').innerText)
let bateadores2 = htmlDecode(e('f2').innerText)
let seleciono;

if(bateadores1 != ''){
  seleciono =  bateadores1
}else if(bateadores2 != ''){
  seleciono =  bateadores2
}



gapi.load('client', initClient);
var SPREADSHEET_ID = '1kSVuoVD2Y7YON3ATTWGHzGCAA-Wz7sGmRFj0jxLizRY';
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
            if(bateadores2 != '') datos = '!K17:M27'
              else if(bateadores1 != '') datos = '!O17:Q27'
               gapi.client.sheets.spreadsheets.values.get({
                   spreadsheetId: SPREADSHEET_ID,
                   range: sheetName + datos
               }).then(function (response) {
                   var data = response.result.values;
                   if (data && data.length > 0) {
                       var primeraFila = data[seleciono];
                       id_peloteros = primeraFila[1] 
                       id_equipo_jugado = primeraFila[2] 

                       posicion_poscampo =['BD' ,'BD' , ' C' , '1B', '2B' , '3B' ,' SS' , 'LF' ,'CF' , 'RF']

                       function processNextPlayer() {
                        if (currentIndex < jugadores.length) {
                            const element = id_peloteros;
                            const url = new URL("https://bss.qualitybeisbol.com/api/anual-pelotero-ave");
                
                            const params = {
                                id_bateador: element.id_jugador,
                                periodo: "TR",
                                temporada: "2023",
                            };
                
                            for (const key in params) {
                                url.searchParams.append(key, params[key]);
                            }
                
                            fetch(url, {
                                method: "GET",
                                headers,
                            })
                                .then((response) => response.json())
                                .then((data) => {

                                    console.log(  posicion_poscampo[element.posicion_campo])

                                    if(currentIndex >= 8 ){
                                      

                                     runAnimationIN(); // Inicia el proceso con el primer jugador

                                    }
                
                                   
                                    currentIndex++;
                                    processNextPlayer(); // Llama a la siguiente iteración
                                    
                                })
                                .catch((error) => {
                                    console.error("Error:", error);
                                    currentIndex++;
                                    processNextPlayer(); // Llama a la siguiente iteración
                                });
                        }
                    }
                    
                    processNextPlayer();

                       document.getElementById('f1_gfx2').innerHTML = primeraFila[0]

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