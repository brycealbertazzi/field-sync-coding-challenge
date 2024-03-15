import React, { useEffect, useRef } from 'react';
import { User } from '../types';

interface GoogleMapProps {
    lat: number,
    lng: number,
    selectedUser: User | null
}

const GoogleMapComponent: React.FC<GoogleMapProps> = (props) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const { lat, lng, selectedUser } = props;

    useEffect(() => {
        const initializeMap = () => {
            // Initialize the map
            const mapOptions = {
                center: { lat: lat ? lat : 40.7128, lng: lng ? lng : -74.006 },
                zoom: 5,
            };

            const map = new window.google.maps.Map(mapRef.current!, mapOptions);

            // Example: Add a marker
            const marker = new window.google.maps.Marker({
                position: { lat: lat ? lat : 40.7128, lng: lng ? lng : -74.006 },
                map,
            });
        };

        // Check if the Google Maps API script has already been loaded
        if (!window.google) {
            // Load the Google Maps API script
            const googleMapsScript = document.createElement('script');
            googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
            googleMapsScript.async = true;
            googleMapsScript.defer = true;
            document.body.appendChild(googleMapsScript);
            googleMapsScript.onload = initializeMap;
        } else {
            initializeMap();
        }

        // Clean up: Remove the Google Maps script when the component unmounts
        return () => {
            if (window.google) {
                // Clean up any resources if needed
            }
        };
    }, [props.lat, props.lng]); // Dependency array including lat and lng props

    return <div ref={mapRef} style={{ width: '75%', height: '800px' }} hidden={!selectedUser}/>;
}

export default GoogleMapComponent;

