const Carreras_homeclub = document.getElementById("carreras_homeclub");
const Carreras_visitante =document.getElementById("carreras_visitante");
const triangle = document.getElementById("triangle");
const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const Hombre_primera = document.getElementById("hombre_primera");
const Hombre_segunda = document.getElementById("hombre_segunda");
const Hombre_tercera = document.getElementById("hombre_tercera");
const strikes = document.getElementById("strikes");
const fondoLogo1 = document.getElementById("fondoLogo1");
const fondoLogo2 = document.getElementById("fondoLogo2");
const boxscore1 = document.getElementById("boxscore1");
const visitante = document.getElementById("visitante");
const Inning = document.getElementById("inning");
const outs1 = document.getElementById("outs1");
const outs2 = document.getElementById("outs2");
const Ave = document.getElementById("ave");
const numeroLanzamiento = document.getElementById("numeroLanzamiento");
const colorDeBase = "#fff";
let animationExecuted = false;
function runTemplateUpdate() {
    const cont_name = htmlDecode(e('f6').innerText);
    let name_activate  = parseInt(cont_name)
    if(name_activate == 1){
        document.getElementById('box-top').style.display = 'block'
        document.getElementById('box-botton').style.display = 'block'

        runAnimationIN();
        animationExecuted = true;
    }

}


var sheets;
var valueData = [];
var banners = [];
var j= 0;
var controlaA = 0;
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


function shortName(fullnamep){
    const parts = fullnamep.split(" ");
    const firstName = parts[0];
    const lastName = parts[1];

    // Obtiene la primera inicial del nombre
    const firstInitial = firstName.charAt(0);

    // Crea el nuevo formato
    const formattedName = `${firstInitial}. ${lastName}`;
    return formattedName;
}
function getDataB() {
    gapi.client.sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID
    }).then(function (response) {
        var sheets = response.result.sheets;
        // sheets es un array de objetos que contiene informaciÃ³n sobre cada hoja.
        for (var i = 0; i < sheets.length; i++) {
            var sheet = sheets[i];
            var sheetName = sheet.properties.title;
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: sheetName
            }).then(function (response) { 
                var valuesOrigen = response.result;
                valuesOrigen.values[0].map((value, key)=> {

                    valueData[`${value}`] = [];
                    valuesOrigen.values.map((v, k)=>{
                        if(k > 0){
                            valueData[`${value}`].push(v[key]);
                           
                        }
                    });
                });
                Carreras_homeclub.innerText = valueData['VALOR'][5];
                Carreras_visitante.innerText =  valueData['VALOR'][4];
                var idvisitante = valueData['ID-EQUIPO'][1];
                var idthomeclub = valueData['ID-EQUIPO'][2];
                Id_equipo_homeclub.src = array_logo[idthomeclub].img_url;
                Id_equipo_visitante.src = array_logo[idvisitante].img_url;
                numeroLanzamiento.innerText =   "L: " + valueData['H-'][1];
                Inning.innerText = valueData['VALOR'][6];
                strikes.innerText = valueData['VALOR'][9]+' - '+valueData['VALOR'][8];
                var parte = valueData['VALOR'][7];
                if(parte=='ALTA'){
                    triangle.classList.add("up");
                    triangle.classList.remove("down");
                }else{
                    triangle.classList.add("down");
                    triangle.classList.remove("up");
                }


                var out = valueData['VALOR'][10];


            

             
                if (out == '1') {
                    outs1.classList.add("activate");
                } else if (out == '2') {
                    outs1.classList.add("activate");
                    outs2.classList.add("activate");
                } else {
                    outs1.classList.remove("activate");
                    outs2.classList.remove("activate");
                }
                var primera =  valueData['VALOR'][11];
                var segunda =  valueData['VALOR'][12];
                var tercera =  valueData['VALOR'][13];
                
                if( primera == 'TRUE'){
                    Hombre_primera.style.backgroundColor = colorDeBase;
                }else{
                    Hombre_primera.style.backgroundColor = "";
                }
                if(segunda == 'TRUE'){
                    Hombre_segunda.style.backgroundColor = colorDeBase;
                }else{
                    Hombre_segunda.style.backgroundColor = "";
                }
                if(tercera == 'TRUE'){
                    Hombre_tercera.style.backgroundColor = colorDeBase;
                }else{
                    Hombre_tercera.style.backgroundColor = "";
                }
                document.getElementById("f1_gfx").innerText = shortName(valueData['NOMBRE'][1]);
                document.getElementById("f0_gfx").innerText = shortName(valueData['NOMBRE'][4]);
                var avgf = valueData['H-'][4];
                if(avgf.length > 0){
                    Ave.innerText =  avgf;
                }
                if (!animationExecuted) {
                    runAnimationIN();
                    animationExecuted = true;
                }
            }, function (error) {
                console.log(error);
            });
        }
    }, function (error) {
        console.log(error);
    });
}
setInterval(function () {
    getDataB();
}, 10000);