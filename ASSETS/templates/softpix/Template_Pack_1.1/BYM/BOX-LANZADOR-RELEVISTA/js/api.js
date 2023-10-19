const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const Fecha = document.getElementById("fecha");
const Nombre_Estadio = document.getElementById("nombre_estadio");
const apiUrl = "https://bss.qualitybeisbol.com/api/boxscore";
const authToken = "Bearer 45eadc85b650776e48bdf666120d0fbc";


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


  const headers = {
    "Authorization": authToken,
    "Content-Type": "application/json",
    "Accept": "application/json",
  };
  

const fetchData = async (url, headers) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  };


const fetchTeamData = async (teamId) => {
    //const url = `https://bss.qualitybeisbol.com/api/anual-equipo-era?periodo=TR&equipo_juega=${teamId}`;
    const url = `https://bss.qualitybeisbol.com/api/acumula-lanzador-era?periodo=TR&temporada=${teamId}`;
    return fetchData(url, {
      "Authorization": authToken,
      "Content-Type": "application/json",
      "Accept": "application/json",
    });
  };


  // Realizar la solicitud inicial y obtener datos de los equipos
  fetchData(`${apiUrl}?${new URLSearchParams(params)}`, headers)
    .then(result => {
      if (result) {
        const {picher_probable_homeclub , picher_probable_visitante ,  id_equipo_homeclub, id_equipo_visitante, fecha, nombre_estadio ,id_lanzador_visitante ,id_lanzador_homeclub ,parte} = result.data.juego;

        let vatiadores ;
      if(parte != 0){

        vatiadores = picher_probable_visitante == null ? id_lanzador_visitante:picher_probable_visitante

        vatiadores = id_lanzador_visitante
        Id_equipo_visitante.src = logos_equipos[id_equipo_visitante].img_url;
      } else {
        vatiadores = picher_probable_homeclub == null ? id_lanzador_homeclub:picher_probable_homeclub
       
        Id_equipo_visitante.src = logos_equipos[id_equipo_homeclub].img_url;
      }
  
        // Realizar solicitudes para cada equipo en paralelo
        return Promise.all([
          fetchTeamData(2023),
         
        ]).then(([visitanteData]) => {

                const Visitante = filterByTemporada(visitanteData);

                // Función para filtrar datos por temporada
                function filterByTemporada(data) {
    
                let filteredData = {};

                for (const key in data) {
                  data.data.forEach((element) => {
                    if(element.id_picher == vatiadores){ filteredData = element }
                    
                  });
                }

                return filteredData;
                }

                
                let JL =  Visitante.JL
                let G=  Visitante.G
                let P =  Visitante.P
                let S =  Visitante.S
                let ERA =  Visitante.ERA ? Visitante.ERA : '0.0' 
                let IP =  Visitante.IP
                let SO =  Visitante.SO
                let AVG =  0.00

                let nombre =  Visitante.nombre
                let apellido =  Visitante.apellido

                document.getElementById('name').innerHTML = nombre + ' ' + apellido
                document.getElementById('apariciones_right').innerHTML = JL
                document.getElementById('salvados_right').innerHTML = S
                document.getElementById('efec_right').innerHTML = ERA
                document.getElementById('ip_right').innerHTML = IP
                document.getElementById('k_right').innerHTML = SO
                document.getElementById('op_avg_right').innerHTML = AVG
            

                runAnimationIN();
            
        
        });
      } else {
        console.error("Error fetching data:", result.statusText);
      }
    })
    .catch(error => {
      console.error("Error en una de las solicitudes:", error);
    });


}




