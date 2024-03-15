import React, { useEffect, useRef } from 'react'
import { User } from '../types'

interface GoogleMapProps {
    lat: number,
    lng: number,
    selectedUser: User | null
}

const GoogleMapComponent: React.FC<GoogleMapProps> = (props) => {
    const mapRef = useRef<HTMLDivElement>(null)
    const { lat, lng, selectedUser } = props

    useEffect(() => {
        const initializeMap = () => {
            // Initialize the map
            const mapOptions = {
                center: { lat: lat ? lat : 40, lng: lng ? lng : -70 },
                zoom: 5,
            }

            const map = new window.google.maps.Map(mapRef.current!, mapOptions)

            // Example: Add a marker
            new window.google.maps.Marker({
                position: { lat: lat ? lat : 40, lng: lng ? lng : -70 },
                map,
            })
        }

        // Check if the Google Maps API script has already been loaded
        if (!window.google) {
            // Load the Google Maps API script
            const googleMapsScript = document.createElement('script')
            googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`
            googleMapsScript.async = true
            googleMapsScript.defer = true
            document.body.appendChild(googleMapsScript)
            googleMapsScript.onload = initializeMap
        } else {
            initializeMap()
        }
    }, [props.lat, props.lng]) 

    return <div ref={mapRef} style={{ marginTop: '20px', width: '75%', height: '800px' }} hidden={!selectedUser}/>
}

export default GoogleMapComponent

