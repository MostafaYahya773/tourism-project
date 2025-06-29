'use client';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';

const MapView = ({ lat, lng }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!lat || !lng) return;

    // استيراد Mapbox فقط على الكلاينت
    import('mapbox-gl').then((module) => {
      const mapboxgl = module.default;
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 12,
      });

      new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

      return () => map.remove();
    });
  }, [lat, lng]);

  return <div ref={mapContainer} style={{ height: '400px', width: '100%' }} />;
};

export default MapView;
