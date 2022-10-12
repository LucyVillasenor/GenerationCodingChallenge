// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

let map;
const mapDiv = document.getElementById("map");
function initMap() {
    map = new google.maps.Map(mapDiv,{
    center: { lat: 23.0000000, lng: -102.0000000 },
    zoom: 6,
  });
}

// window.initMap = initMap;