// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

let map;
let market;
const mapDiv = document.getElementById("map");
function initMap() {
    map = new google.maps.Map(mapDiv,{
    center: { lat: 19.42847, lng: -99.12766 },
    zoom: 9,
  });

}// function initMap

// window.initMap = initMap;