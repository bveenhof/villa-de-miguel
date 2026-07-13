"use client";

import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

import styles from './Map.module.scss';

type LocationMarker = {
    lat: number;
    lng: number;
    content?: string; 
}

type MapOptions = {
  center: LocationMarker;
  zoom?: number;
  disableDefaultUI?: false;
  zoomControl?: true;
  mapId: string;
}

export type MapProps = {
  villaMarker: LocationMarker;
  pointsOfInterest?: LocationMarker[];
  MapOptions?: MapOptions;
}

const defaultMapProps: MapOptions = {
  center: { lat: 7.5631116, lng: 126.5391292 },
  zoom: 12,
  disableDefaultUI: false,
  mapId: 'villa-demo-map',
  zoomControl: true,
}

const Map = ({ villaMarker, pointsOfInterest, MapOptions = defaultMapProps }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInitializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapInitializedRef.current) return;
    mapInitializedRef.current = true;

    setOptions({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_DEMO_API_KEY as string,
    });

    const locations: LocationMarker[] = [villaMarker, ...(pointsOfInterest || [])];

    Promise.all([
      importLibrary("maps"),
      importLibrary("marker"),
    ])
      .then(([{ Map, InfoWindow }, { AdvancedMarkerElement }]) => {
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
          const marker = new AdvancedMarkerElement({
            position: { lat: location.lat, lng: location.lng },
            map: map,
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