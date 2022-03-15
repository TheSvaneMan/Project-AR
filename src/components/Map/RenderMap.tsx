// The purpose of this component is to render the Mapbox map and assign a value to the map container
import 'mapbox-gl/dist/mapbox-gl.css';
import './RenderMap.css';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect } from 'react';

const RenderMap: React.FC<any> = () => {
    useEffect(() => {
        // TO MAKE THE MAP APPEAR YOU MUST
        // ADD YOUR ACCESS TOKEN FROM
        // https://account.mapbox.com
        // IMPORTANT: Mask this auth key for MapBox access to geo-db
        mapboxgl.accessToken = 'pk.eyJ1IjoidGhlc3ZhbmVtYW4iLCJhIjoiY2wwczJ0bndhMDkyczNrcWtwemZrbGRpdiJ9.SvwyHaNaN0wH7RMl4XujfA';
        // Generate the map area before first render of the component
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [12.56, 55.67], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

    });
    return (
        <div id="map">

        </div>
    )
}

export default RenderMap;