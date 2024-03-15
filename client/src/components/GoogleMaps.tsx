import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

interface GoogleMapsProps {
    lat: number
    lng: number
}

const GoogleMaps: React.FC<GoogleMapsProps> = (props) => {
    const { lat, lng } = props
    const center = { lat, lng }
    const zoom = 3
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}
        >
            <GoogleMap
                mapContainerStyle={{
                    width: '50%',
                    height: '800px'
                }}
                center={center}
                zoom={zoom}
            >
                <Marker position={center}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMaps