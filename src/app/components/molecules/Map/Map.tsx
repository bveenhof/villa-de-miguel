"use client";

import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

import styles from './Map.module.scss';

type LocationMarker = {
    title?: string;
    lat: number;
    lng: number;
    iconUrl?: string;
    color?: string;
    description?: string; 
}

type MapOptions = {
  center: LocationMarker;
  zoom?: number;
  disableDefaultUI?: false;
  zoomControl?: true;
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

    console.log("locations and markers object: ", locations)

    // const villaMarker = { lat: 7.5631116, lng: 126.5391292 };
    
    // const pointsOfInterest: LocationMarker[] = [
    //   {
    //     title: "Our Airbnb Stay",
    //     lat: villaMarker.lat,
    //     lng: villaMarker.lng,
    //     iconUrl: "http://google.com",
    //     description: "<strong>Welcome!</strong><br/>Tap 'View larger map' for cellular GPS routing.",
    //   },
    //   {
    //     title: "Aliwagwag Falls Ecopark",
    //     lat: 7.7042,
    //     lng: 126.2917,
    //     iconUrl: "http://google.com",
    //     description: "<strong>Aliwagwag Falls</strong><br/>Breathtaking multi-tiered waterfalls.",
    //   },
    //   {
    //     title: "Cateel Town Proper",
    //     lat: 7.7944,
    //     lng: 126.4534,
    //     iconUrl: "http://google.com",
    //     description: "<strong>Cateel Town Center</strong><br/>ATM hubs, local markets, and pharmacy needs.",
    //   },
    // ];

    // 2. Concurrently load core map and classic markers out of separate library trees
    Promise.all([
      importLibrary("maps"),
      importLibrary("marker"), // Pull markers from its dedicated modern package
    ])
      .then(([{ Map, InfoWindow }, { Marker }]) => { // <-- Destructured Marker safely here
        if (!mapRef.current) return;

        // 3. Mount the dynamic canvas map frame
        const map = new Map(mapRef.current, MapOptions);

        // 4. Attach legacy markers to the landscape map
        locations.forEach((location) => {
          const marker = new Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
            icon: location.iconUrl,
          });

          console.log('marker thing: ', marker)

          const infoWindow = new InfoWindow({
            content: location.description,
          });

          console.log('infoWindow thing: ', infoWindow)

          
          // Google's modern marker action event standard
          marker.addListener("gmp-click", () => {
            console.log('marker clicked!', marker)
            infoWindow.open({
              anchor: marker,
              map: map,
              shouldFocus: false,
            });
          });
        });
      })


//   useEffect(() => {
//     // 1. Configure the core API options exactly once
//     setOptions({
//       key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
//     });

//     const villaMarker = { lat: 7.5631116, lng: 126.5391292 };
    
//     const pointsOfInterest: LocationMarker[] = [
//       {
//         title: "Our Airbnb Stay",
//         lat: villaMarker.lat,
//         lng: villaMarker.lng,
//         color: "#FF5A5F", // Airbnb Pink
//         description: "<strong>Welcome!</strong><br/>Tap 'View larger map' for cellular GPS routing.",
//       },
//       {
//         title: "Aliwagwag Falls Ecopark",
//         lat: 7.7042,
//         lng: 126.2917,
//         color: "#4CAF50", // Nature Green
//         description: "<strong>Aliwagwag Falls</strong><br/>Breathtaking multi-tiered waterfalls.",
//       },
//       {
//         title: "Cateel Town Proper",
//         lat: 7.7944,
//         lng: 126.4534,
//         color: "#2196F3", // Town Blue
//         description: "<strong>Cateel Town Center</strong><br/>ATM hubs, local markets, and pharmacy needs.",
//       },
//     ];

//     // 2. Concurrently call importLibrary via Promise.all for speed
//     // 2. Concurrently call importLibrary via Promise.all for speed
// Promise.all([
//   importLibrary("maps"),
//   importLibrary("marker"),
// ]).then(([{ Map, InfoWindow }, { AdvancedMarkerElement }]) => { // <-- Added InfoWindow here
//   if (!mapRef.current) return;

//   // 3. Render the core map instance
//   const map = new Map(mapRef.current, {
//     center: villaMarker,
//     zoom: 12,
//     mapId: "DEMO_MAP_ID", 
//     disableDefaultUI: false,
//     zoomControl: true,
//   });

//   // 4. Inject modern AdvancedMarkers
//   pointsOfInterest.forEach((poi) => {
//     const pinElement = document.createElement("div");
//     pinElement.style.backgroundColor = poi.color || "hotpink";
//     pinElement.style.width = "16px";
//     pinElement.style.height = "16px";
//     pinElement.style.borderRadius = "50%";
//     pinElement.style.border = "2px solid white";
//     pinElement.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)";

//     const marker = new AdvancedMarkerElement({
//       position: { lat: poi.lat, lng: poi.lng },
//       map: map,
//       title: poi.title,
//       content: pinElement,
//     });

//     // Cleaned up instantiator: uses the destructured InfoWindow class directly
//     const infoWindow = new InfoWindow({
//       content: poi.description,
//     });

//     marker.addListener("gmp-click", () => {
//         infoWindow.open({
//             anchor: marker,
//             map: map,
//             shouldFocus: false,
//         });
//     });
//   });
// })

      .catch((error) => {
        console.error("Something went kaboom:", error);
      });
  }, []);

    return (
        <div className={styles.map} ref={mapRef} />
    )
}

export default Map