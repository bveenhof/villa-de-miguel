"use client";

import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

import styles from './Map.module.scss';

type LocationMarker = {
    lat: number;
    lng: number;
    content?: string; 
    isVilla?: boolean;
    isActive?: boolean;
}

type MapOptions = {
  center: LocationMarker;
  zoom?: number;
  disableDefaultUI?: false;
  zoomControl?: true;
  mapId: string;
}

export type MapProps = {
  locations: LocationMarker[];
  MapOptions?: MapOptions;
}

const defaultMapProps: MapOptions = {
  center: { lat: 7.5631116, lng: 126.5391292 },
  zoom: 12,
  disableDefaultUI: false,
  mapId: 'villa-demo-map',
  zoomControl: true,
}

const Map = ({ locations, MapOptions = defaultMapProps }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapInitializedRef.current) return;
    mapInitializedRef.current = true;

    setOptions({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_DEMO_API_KEY as string,
    });

    Promise.all([
      importLibrary("maps"),
      importLibrary("marker"),
    ])
      .then(([{ Map, InfoWindow }, { AdvancedMarkerElement, PinElement }]) => {
        if (!mapRef.current) return;

        const map = new Map(mapRef.current, MapOptions);
        const infoWindow = new InfoWindow();

        const showInfoWindow = (
          content: string | undefined, 
          marker: google.maps.marker.AdvancedMarkerElement, 
          shouldFocus: boolean
        ) => {
          infoWindow.setOptions({
            content: content || '',
          });

          infoWindow.open({
            anchor: marker,
            map: map,
            shouldFocus: shouldFocus,
          });

          if (marker.position) {
            map.panTo(marker.position);
          }
        };

        locations.forEach((location, index) => {
          let markerElement: HTMLElement | google.maps.marker.PinElement;

          if (location.isVilla) {

            const villaPin = new PinElement({
              background: '#f2b401',
              borderColor: '#a77d00',
              glyphColor: 'white',
            });


            villaPin.className = styles.villaMarker; 
            
            markerElement = villaPin;

            // Todo: Will add a custom image marker in a later version. //
            // const img = document.createElement("img");

            // img.src = "/logo-villa-de-miguel.svg"; 
            // img.className = styles.villaMarker; 
            // img.alt = "Main Villa Location";
            
            // markerElement = img;
          } else {
            const pin = new PinElement({
              background: '#d86d38',
              borderColor: '#793a1b',
              glyphColor: 'white',
            });
            
            markerElement = pin;
          }

        const marker = new AdvancedMarkerElement({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          content: markerElement, 
        });
          
          marker.addListener("gmp-click", () => {
            showInfoWindow(location.content, marker, true);
          });

          if (index === 0) {
            showInfoWindow(location.content, marker, false);
          }
        });
      })

      .catch((error) => {
        console.error("Something went kaboom:", error);
      });
  }, []);

    return (
        <section className={styles.map} ref={mapRef} />
    )
}

export default Map