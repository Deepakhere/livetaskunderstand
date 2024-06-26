import { useEffect, useState } from 'react'

const useGeoLocation = () => {
  const [location, setLocation]: any = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: any) => {
    setLocation({
      loaded: false,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };


  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return location;
}

export default useGeoLocation