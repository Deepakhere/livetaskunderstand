

import "leaflet/dist/leaflet.css";

import AttendanceMap from './AttendanceMap';

const SetAttendanceRadius = () => {


  return (
    <>
      <AttendanceMap regionCoord={[48.864716, 2.349014]} regionName="Paris" />
    </>
  )
}

export default SetAttendanceRadius