
import { Link } from 'react-router-dom'
import api from '../api/api';
import useGeoLocation from '../hooks/useGeoLocation';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import LoaderComponent from '../components/Loader/LoaderComponent';
const Dashboard = () => {
  const location = useGeoLocation();
  const [attendanceStatus, setAttendanceStatus] = useState("0");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    checkAttendancestatus();
  }, []);


  const checkAttendancestatus = async () => {
    try {
      const res = await api.post('/attendance/today-check');
      if (res.data.success) {
        if (res.data.data == null && res.data.data == '') {
          //
        }
        else {
          setAttendanceStatus(res.data.data.attendanceStatus);
        }
      }
    } catch (error) {
    }
    finally {
      setLoader(false);
    }

  }

  const markAttendance = async ({ type }: any, e: any,) => {
    e.preventDefault();
    setLoader(true);
    try {
      const geoPermission = await navigator.permissions.query({ name: 'geolocation' });
      if (geoPermission.state == 'denied') {
        alert('Please grant access to location');
      }
      else if (geoPermission.state == 'granted') {
        let lat;
        let lng;
        if (location.loaded == true) {
          lat = location.coordinates.lat;
          lng = location.coordinates.lng;
        }
        const res = await api.post('/attendance/mark-attendance', { type, platform: 'web', lat, lng });
        if (res.data.success) {
          // console.log(res.data)
          // setAttendanceStatus(true);
          setAttendanceStatus(res.data.data.attendanceStatus);
          toast.success(res.data.message, {
            position: "top-right", autoClose: 5000,
            hideProgressBar: false,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    }
    catch (e: any) {
      // console.log(e)
    }
    finally {
      setLoader(false);
    }
  }
  const date = new Date().toLocaleDateString();

  return (
    <>
      {loader ? <LoaderComponent /> : null}
      <div className="bg-white flex pl-10 pt-5 rounded-lg shadow-md w-full">
        <div className="w-3/4">
          <h1 className="text-xl font-bold">Mark attendance for today {date}</h1>
          <div className="mt-2 mb-10">

            {/* <p>You can mark your attendance for today. </p> */}
            <p className="text-gray-600">Today Attendance Status :  {attendanceStatus === "0" || attendanceStatus === "2" ? 'Not PunchIn' : 'PunchIn'} </p>

            {attendanceStatus === "0" || attendanceStatus === "2" ? <div className="bg-pink-400 w-64 h-3 rounded-lg mt-2"></div> : <div className="bg-green-400 w-64 h-3 rounded-lg mt-2"></div>}
          </div>
        </div>
        <div className="w-1/4">

          {attendanceStatus === "0" || attendanceStatus === "2" ? <button onClick={(e) => markAttendance({ type: 'punchIn' }, e)} className="bg-teal-500 py-3 px-8 mt-7 rounded text-sm text-white font-semibold">Punch In</button> : <button onClick={(e) => markAttendance({ type: 'punchOut' }, e)} className="bg-teal-500 py-3 px-8 mt-7 rounded text-sm text-white font-semibold">Punch Out</button>}

        </div>

      </div>


      {/* <div
        className='flex sm:flex-row flex-col space-y-2 sm:space-x-2 flex-row w-full items-center justify-center'>
        <div
          className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md  border-l-4 border-blue-300'>
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" className="w-6 h-6">
                  <path
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
            </div>
            <div>
              <div
                className="flex items-center text-xs px-3 bg-blue-200 text-blue-800 rounded-full">100%</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-5xl">
              4
            </div>
            <div className="font-bold text-sm">
              For next holiday
            </div>
          </div>
        </div>


        <div
          className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md  border-l-4 border-blue-300'>
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" className="w-6 h-6">
                  <path
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
            </div>
            <div>
              <div
                className="flex items-center text-xs px-3 bg-blue-200 text-blue-800 rounded-full">100%</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-5xl">
              4
            </div>
            <div className="font-bold text-sm">
              For next holiday
            </div>
          </div>
        </div>

        <div
          className='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-2/4 p-5 bg-white rounded-md  border-l-4 border-blue-300'>
          <div className="flex justify-between w-full">
            <div>
              <div className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" className="w-6 h-6">
                  <path
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
            </div>
            <div>
              <div
                className="flex items-center text-xs px-3 bg-blue-200 text-blue-800 rounded-full">100%</div>
            </div>
          </div>
          <div>
            <div className="font-bold text-5xl">
              4
            </div>
            <div className="font-bold text-sm">
              For next holidagvhvhg
            </div>
          </div>
        </div>


      </div> */}

      <div className="flex space-x-4 mt-3">


        <div className="w-6/12 h-full bg-white rounded">

          <img src={"./dashboard1.svg"} className='p-8' />
          {/* <div className="flex flex-col bg-white rounded p-4 w-full">
            <div className="font-bold text-xl text-indigo-600">India</div>
            <div className="text-sm text-gray-500">Thursday 10 May 2020</div>

            <div className="flex flex-row items-center justify-center mt-6">


              <div className="font-medium text-6xl">24°</div>
              <div className="flex flex-col items-center ml-6">
                <div>Cloudy</div>
                <div className="mt-1">
                  <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
                  <span className="text-sm font-light text-gray-500">28°C</span>
                </div>
                <div>
                  <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
                  <span className="text-sm font-light text-gray-500">20°C</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Wind</div>
                <div className="text-sm text-gray-500">9k/h</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Humidity</div>
                <div className="text-sm text-gray-500">68%</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Visibility</div>
                <div className="text-sm text-gray-500">10km</div>
              </div>
            </div>
          </div> */}

        </div>

        <div className="w-6/12 pl-10 pt-3 pb-2 bg-white   items-center justify-center rounded">
          <h4 className="text-xl text-teal-500 font-bold mb-2 ml-3">
            Timeline</h4>

          <ol >

            <li className="border-l-2 border-teal-500 mb-3 w-full">
              <div className="md:flex flex-start">
                <div className="bg-teal-500 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="block p-3 rounded-lg  bg-gray-200 max-w-md ml-6">
                  <div className="flex justify-between mb-1">
                    <Link to={'#'} className="font-medium text-teal-500  text-sm">Attendance Punch Request approved</Link>
                    <Link to={'#'} className=" text-teal-500  text-sm">12 / 01 / 2022</Link>
                  </div>
                  <p className="text-gray-700  text-sm">
                    Your punch request for date Jun 07, 2023 has been approved by Deepak Kumar Swain.  <Link to={'#'} className='text-teal-500'>view more</Link>

                  </p>

                </div>
              </div>
            </li>
            <li className="border-l-2 border-teal-500 mb-3 w-full">
              <div className="md:flex flex-start">
                <div className="bg-teal-500 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="block p-3 rounded-lg  bg-gray-200 max-w-md ml-6">
                  <div className="flex justify-between mb-1">
                    <Link to={'#'} className="font-medium text-teal-500  text-sm">Attendance Punch Request approved</Link>
                    <Link to={'#'} className=" text-teal-500  text-sm">12 / 01 / 2022</Link>
                  </div>
                  <p className="text-gray-700  text-sm">
                    Your punch request for date Jun 07, 2023 has been approved by Deepak Kumar Swain.  <Link to={'#'} className='text-teal-500'>view more</Link>

                  </p>

                </div>
              </div>
            </li>
            <li className="border-l-2 border-teal-500 mb-3 w-full">
              <div className="md:flex flex-start">
                <div className="bg-teal-500 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div className="block p-3 rounded-lg  bg-gray-200 max-w-md ml-6">
                  <div className="flex justify-between mb-1">
                    <Link to={'#'} className="font-medium text-teal-500  text-sm">Attendance Punch Request approved</Link>
                    <Link to={'#'} className=" text-teal-500  text-sm">12 / 01 / 2022</Link>
                  </div>
                  <p className="text-gray-700  text-sm">
                    Your punch request for date Jun 07, 2023 has been approved by Deepak Kumar Swain.  <Link to={'#'} className='text-teal-500'>view more</Link>

                  </p>

                </div>
              </div>
            </li>




          </ol>
        </div>

      </div>
    </>
  )
}

export default Dashboard