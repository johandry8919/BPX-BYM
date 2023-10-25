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