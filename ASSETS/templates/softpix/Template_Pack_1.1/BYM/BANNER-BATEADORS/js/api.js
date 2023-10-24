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
     if(e('f3')){
        if(e('f3').innerText == 'none'){
            e('logoPatrocinio').style="opacity: 0;"
            e('cont-3').style.display = 'none'
            document.querySelector('.contcenter').style.left = '20%'
    
        }else if (e('f3').innerText){
            e('logoPatrocinio').src = e('f3').innerText
           
    
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
        parte

        } = result1.data.juego;


        let iquipo_juega;
        parte == 0 ? iquipo_juega = id_bateador_visitante : iquipo_juega = id_bateador_homeclub
        const url = new URL(
          "https://bss.qualitybeisbol.com/api/anual-pelotero-ave"
      );
      
      const params = {
          "id_bateador": iquipo_juega,
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
            if(document.getElementById('fxg')){
              document.getElementById('fxg').innerHTML = ` 
         <div>
           ${element.AVE == null?'0':element.AVE} <span> AVE </span> / </div>
          <div> ${element.HR== null?'0' :element.HR} <span > HR </span>  / </div>
            <div>${element.CI== null?'0':element.CI} <span>CI </span>  / </div> 
             <div> ${element.OPS== null?'0':element.OPS} <span> OPS</span> </div>`;
    
           }
          }
        })

      });

        let id_jugador;
        if(parte == 1){
          id_jugador = result1.data.juego.id_bateador_homeclub
  
          logos_equipos.src = Logos_equipos[id_equipo_homeclub].img_url;
          data_pelotero = result1.data.boxscore.homeclub.peloteros
          
          data_pelotero.forEach(element => {
            if(element.id_pelotero == id_bateador_homeclub){
              let resultado = parseInt(element.HIT) + parseInt(element.H2) + parseInt(element.H3);

              if(e('primer_turno')){
                e('primer_turno').innerHTML = htmlDecode(e('f1').innerText)
              }else if(document.getElementById('fxt')){
                document.getElementById('fxt').innerText = `HOY: ${element.VB} - ${resultado}  / ${element.HR} HR / ${element.HIT} H / ${element.SO} K / ${element.CI} CI`;
                
              }
              Nombre.innerText = `${element.nombre} ${element.apellido}`;
            }
        });


        }else{
          id_jugador = result1.data.juego.id_bateador_visitante
          logos_equipos.src = Logos_equipos[id_equipo_visitante].img_url;
          data_pelotero = result1.data.boxscore.visitante.peloteros

          data_pelotero.forEach(element => {   
            if(element.id_pelotero == id_bateador_visitante){
              let resultado = parseInt(element.HIT) + parseInt(element.H2) + parseInt(element.H3);
              if(e('primer_turno')){
                e('primer_turno').innerHTML = htmlDecode(e('f1').innerText)
              }else if(document.getElementById('fxt')){
                document.getElementById('fxt').innerText = `HOY: ${element.VB} - ${resultado}  / ${element.HR} HR / ${element.HIT} H / ${element.SO} K / ${element.CI} CI`;
              }
              Nombre.innerText = `${element.nombre} ${element.apellido}`;
            }
          });     
        }
         runAnimationIN();

    })
    .catch(error => {
      console.error("Error en una de las solicitudes:", error);
    });

}


