// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

const mapDiv = document.getElementById("map"); //obtenemos el div map
const btnShowStores = document.getElementById("btnShowStores");
let map; //variable que almacena el mapa 
let market;

//funcion que inicia el mapa con las coordenadas en México City 
function initMap() {
    map = new google.maps.Map(mapDiv,{
    center: { lat: 19.42847, lng: -99.12766 },
    zoom: 9,
  });
}// function initMap

//Mostrar las direcciones y marcarlas en el Mapa
btnShowStores.addEventListener("click", (e) => { //cuando se hace click en el boton, entonces ejecutamos esta funcion
    e.preventDefault(); //evitamos que el navegador se recargue
    const geocoder = new google.maps.Geocoder();//Inicializamos GeoCoder
    fetch("/store_directory.json")
    .then(response => {
       return response.json();
    })
    .then(json =>{
       directorio = JSON.stringify(json);
       directorio = JSON.parse(directorio); //convertimos nuestro JSON a objeto
       //recorremos nuestro JSON y almacenamos las direcciones en un array
       for (let i = 0; i< directorio.length; i++) {
            let direccion = directorio[i].Address //almacenamos la direccion del JSON en la variable direccion
            // console.log(direccion);
            geocoder.geocode({ direccion: direccion }, (results, status) => {
                
                if (status === "OK") {
                    // Mostrar respuesta en la consola
                    console.log(results);

                    // Establecer la ubicación del mapa obtenido por la API
                    resultsMap.setCenter(results[0].geometry.location);

                    // Agrega el marcador con la ubicación obtenida
                    new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location,
                    });//if
                } else {
                    alert("Geocode error: " + status);
                }//else
                });//Promesa  
        }//for
        }); //Fetch

    });

// function initStores(){
//     console.log(entróAlBtnListener);
//     const geocoder = new google.maps.Geocoder();//Inicializamos GeoCoder
//     fetch("/store_directory.json")
//     .then(response => {
//        return response.json();
//     })
//     .then(json =>{
//        directorio = JSON.stringify(json);
//        directorio = JSON.parse(directorio); //convertimos nuestro JSON a objeto
//        //recorremos nuestro JSON y almacenamos las direcciones en un array
//        for (let i = 0; i< directorio.length; i++) {
//             let direccion = directorio[i].Address //almacenamos la direccion del JSON en la variable direccion
//             console.log(direccion);
//             geocoder.geocode({ direccion: direccion }, (results, status) => {
//                 if (status === "OK") {
//                     // Mostrar respuesta en la consola
//                     console.log(results);

//                     // Establecer la ubicación del mapa obtenido por la API
//                     resultsMap.setCenter(results[0].geometry.location);

//                     // Agrega el marcador con la ubicación obtenida
//                     new google.maps.Marker({
//                         map: resultsMap,
//                         position: results[0].geometry.location,
//                     });//if
//                 } else {
//                     alert("Geocode error: " + status);
//                 }//else
//                 });//Promesa  
//         }//for
//         }); //Fetch
// }//initStores()



