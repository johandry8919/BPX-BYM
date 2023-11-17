
function runTemplateUpdate() {

    const video = document.getElementById('video');
    const zoomableDivs = document.querySelectorAll('.cont2, .logo');
    const img_equipos = document.getElementById('cont-2');
    const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
  const url2 = new URL("https://bss.qualitybeisbol.com/api/lineup");
  

    if(e('f3')){
      if(e('f3').innerText == 'none'){
          e('logoPatrocinio').style="opacity: 0;"
      }else if (e('f3').innerText){
          e('logoPatrocinio').src = e('f3').innerText
      } 
   }
   let parte
   if(e('f1').innerText == 1) parte = 1
    else parte = 0
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
  
  const request1 = fetch(url1, {
   method: "GET",
   headers,
  
  
  }).then(response => response.json());
  
  const request2 = fetch(url2, {
   method: "GET",
   headers,
  
  
  }).then(response => response.json());
  
  Promise.all([request1 ,request2])
   .then(([result1 ,result2 ]) => {
     if (result1) {

      
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
                if(parte == 1 ) datos = '!K46:L49' , parte = 1 
                 else if(parte == 0) datos = '!K39:L42' , parte = 0
                  gapi.client.sheets.spreadsheets.values.get({
                      spreadsheetId: SPREADSHEET_ID,
                      range: sheetName + datos
                  }).then(function (response) {
                      var data = response.result.values;
                      if (data && data.length > 0) {
                          var primeraFila = data[0];


                   
   
   
                          let { 
                            id_equipo_homeclub,
                            id_equipo_visitante,
                              } = result1.data.juego;
             
                              var jugadores ;
                              var id_equipos  ;
                              parte == 1 ? jugadores = result2.data.homeclub.peloteros: jugadores = result2.data.visitante.peloteros
                              parte == 1 ?  id_equipos = id_equipo_homeclub: id_equipos = id_equipo_visitante
             
                              posicion_poscampo =['BD' ,'BD' , ' C' , '1B', '2B' , '3B' ,' SS' , 'LF' ,'CF' , 'RF']
             
                              function compararPorPosicionBateo(a, b) {
                                 return   a.posicion_campo - b.posicion_campo;
                               }


                               var nombreCompleto =  primeraFila[0];
                                var partes = nombreCompleto.split(" ");
                                var apellido = partes[partes.length - 1];

                               
                                          
           
                              
                              let resul =  jugadores.sort(compararPorPosicionBateo);
           
                              document.getElementById('posicion_1').innerText = primeraFila[0].charAt(0)  + '. ' + apellido
                              document.getElementById('posicion_2').innerText = resul[1].nombre.charAt(0)  + '. ' + resul[1].apellido
                              document.getElementById('posicion_3').innerText = resul[2].nombre.charAt(0)  + '. ' + resul[2].apellido
                              document.getElementById('posicion_4').innerText = resul[3].nombre.charAt(0)  + '. ' + resul[3].apellido
                              document.getElementById('posicion_5').innerText = resul[4].nombre.charAt(0)  + '. ' + resul[4].apellido
                              document.getElementById('posicion_6').innerText = resul[5].nombre.charAt(0)  + '. ' + resul[5].apellido
                              document.getElementById('posicion_7').innerText = resul[6].nombre.charAt(0)  + '. ' + resul[6].apellido
                              document.getElementById('posicion_8').innerText = resul[7].nombre.charAt(0)  + '. ' + resul[7].apellido
                              document.getElementById('posicion_9').innerText = resul[8].nombre.charAt(0)  + '. ' + resul[8].apellido
                            
           
               const videoElement = document.getElementById("video");
              
                // Crea y configura el elemento source una sola vez
                const sourceElement = document.createElement("source");
                sourceElement.src = Logos_equipos[id_equipos].img_url;
                sourceElement.type = "video/webm";
                // Agrega el elemento source al video y carga el video
                videoElement.appendChild(sourceElement);
                videoElement.play()
                img_equipos.style.backgroundImage = "url('https://www.shutterstock.com/shutterstock/photos/1609616806/display_1500/stock-vector-baseball-player-vector-silhouette-baseball-player-logo-design-sport-club-logo-design-1609616806.jpg')"
           
                video.addEventListener('play', () => {
                   zoomableDivs.forEach(div => div.classList.add('zoomed'));  
                   runAnimationIN();
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
   else {console.error("Error fetching data:", response.statusText);}})
   .catch(error => {
       console.error("Error en una de las solicitudes:", error);
   });
  
  
   }





