const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const Fecha = document.getElementById("fecha");
const Nombre_Estadio = document.getElementById("nombre_estadio");
const apiUrl = "https://bss.qualitybeisbol.com/api/boxscore";
const authToken = "Bearer 45eadc85b650776e48bdf666120d0fbc";


function ajustarCadena(cadena) {
  cadena = cadena.replace(/\+/g, ' ');
  cadena = cadena.replace(/\+/g, ' ');
  return cadena;
}

const expresion = htmlDecode(e('f0').innerText);
const cadenaAjustada = ajustarCadena(expresion);


const params = {
  id_juego:  `23 2 4  3`,
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
    const url = `https://bss.qualitybeisbol.com/api/anual-equipo-era?periodo=TR&equipo_juega=${teamId}`;
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
        const { id_equipo_homeclub, id_equipo_visitante, fecha, nombre_estadio } = result.data.juego;
  
        // Realizar solicitudes para cada equipo en paralelo
        return Promise.all([
          fetchTeamData(id_equipo_homeclub),
          fetchTeamData(id_equipo_visitante)
        ]).then(([homeClubData, visitanteData]) => {
         
          // Filtrar datos para la temporada 2023
                const temporada2023HomeClub = filterByTemporada(homeClubData, "2023" );
                const temporada2023Visitante = filterByTemporada(visitanteData, "2023");

                // Función para filtrar datos por temporada
                function filterByTemporada(data, temporada) {
    
                let filteredData = {};

                for (const key in data) {
                  data.data.forEach((element) => {
                    if (
                      element.temporada == temporada &&
                      element.id_equipo == id_equipo_homeclub
                    ) {
                      filteredData = element;
                    }
                    if (
                      element.temporada == temporada &&
                      element.id_equipo == id_equipo_visitante
                    ) {
                      filteredData = element;
                    }
                  });
                }

                return filteredData;
                }

                console.log(result.data.juego)

               
                
               
                e('record_homeclub').innerHTML =  temporada2023HomeClub.G + ' - ' + temporada2023HomeClub.P
                
                e('record_visitante').innerHTML = temporada2023Visitante.G + ' - ' + temporada2023Visitante.P




                    Id_equipo_visitante.src = logoLeft[id_equipo_visitante].img_url;
                    Id_equipo_homeclub.src = logoRight[id_equipo_homeclub].img_url;
                
                    const fechaOriginal = fecha;


                  
                    const fechas = new Date(fechaOriginal);


                      
                    const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];
                    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
                
                    const nombreDiaSemana = diasSemana[fechas.getDay()];
                    const dia = fechas.getDate();
                    const nombreMes = meses[fechas.getMonth()];
                    const año = fechas.getFullYear();

                
                    const fechaConvertida = `${nombreDiaSemana} ${dia +1} de ${nombreMes}`;
                    Fecha.innerText = fechaConvertida;
                    Nombre_Estadio.innerHTML = 'ESTADIO' + ' ' + nombre_estadio;

                   
                
                    runAnimationIN();
            
        
        });
      } else {
        console.error("Error fetching data:", result.statusText);
      }
    })
    .catch(error => {
      console.error("Error en una de las solicitudes:", error);
    });

