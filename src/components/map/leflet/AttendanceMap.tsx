import { useState } from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import useGeoLocation from '../../../hooks/useGeoLocation';




const AttendanceMap = ({ regionCoord, regionName }: any) => {
  const radius = 100;
  const [map, setMap]: any = useState(null);
  const location = useGeoLocation();


  function FlyToButton() {

    const onClick = () => {
      if (location.loaded && !location.error) {
        map.flyTo([location.coordinates.lat, location.coordinates.lng], 17, { animate: true });
      } else {
        alert(location.error.message);
      }
    };
    return <button className='bg-teal-500 px-2 py-2 rounded text-white mb-2' onClick={onClick}>Locate Me</button>;
  }

  // const LocationFinderDummy = () => {
  //   const map = useMapEvents({
  //     click(e) {
  //       map.flyTo([e.latlng.lat, e.latlng.lng], 17, { animate: true });

  //     },
  //   });
  //   return null;
  // };



  return (
    <>
      {/* <input type='text' onClick={(e: any): any => setRadius(e.value)} /> */}

      <FlyToButton />

      <div className="w-full bg-white rounded p-4">


        {regionCoord && (
          <MapContainer
            center={[25.4484, 78.5685]}
            zoom={6}
            style={{ height: "80vh" }}
            ref={setMap}
            scrollWheelZoom={false}

          >

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={[location.coordinates.lat, location.coordinates.lng]} pathOptions={{ fillColor: 'blue' }} radius={radius} />
            <Marker position={[location.coordinates.lat, location.coordinates.lng]} >
              <Popup>{regionName}</Popup>
            </Marker>
            {/* <LocationFinderDummy /> */}
          </MapContainer>

        )}
      </div>





    </>
  )
}

export default AttendanceMap