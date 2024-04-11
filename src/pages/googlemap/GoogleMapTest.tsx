import { useMemo } from 'react'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
const GoogleMapTest = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC0KYKIjJ4jlHK7Vyo-yYSdffnvvx05vw4',
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <>
      <h1>jbjb</h1>
      <div className="App">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
          </GoogleMap>
        )}
      </div>

    </>
  )
}

export default GoogleMapTest