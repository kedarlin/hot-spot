import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './Map.css';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const chennai = { lat: 13.0827, lng: 80.2707 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'nJ4cOb73m6Ufl2gQ3Qwg';

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [chennai.lng, chennai.lat],
      zoom: zoom
    });

  }, [chennai.lng, chennai.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;