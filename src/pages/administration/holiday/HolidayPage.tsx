import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import AddHolidayComponent from '../../../components/forms/AddHolidayComponent';
import { useEffect, useState } from 'react';
import api from '../../../api/api';
import { toast } from 'react-toastify';
import { HOLIDAYTYPE } from '../../../interfaces/constants';
const HolidayPage = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await api.get('/holiday/fetch');
      if (res.data) {
        setEvent(res.data.data);

      }

    } catch (error) {
      toast.error('Oops Something Wrong!', {
        position: "top-right", autoClose: 5000,
        hideProgressBar: false,
        progress: undefined,
        theme: "colored",
      });
    }

  }
  return (
    <>
      <AddHolidayComponent />
      <div
        className="bg-white px-6 py-4 my-3 mx-auto shadow rounded-md flex items-center"
      >
        <div className="left-0 top-0 absolute">
          <AddHolidayComponent />
        </div>
        <div className="w-full text-center mx-auto">
          <button
            type="button"
            className='text-white rounded-md px-4 py-1 m-2 text-xs'
            style={{
              background: HOLIDAYTYPE.BIRTHDAY
            }}
          >
            Birthday
          </button>

          <button
            type="button"
            className='text-white rounded-md px-4 py-1 m-2 text-xs'
            style={{
              background: HOLIDAYTYPE.WORK_ANNIVERSARIES
            }}
          >
            Work Anniversaries
          </button>

          <button
            type="button"
            className='text-white rounded-md px-4 py-1 m-2 text-xs'
            style={{
              background: HOLIDAYTYPE.EVENTS
            }}
          >
            Events
          </button>

          <button
            type="button"
            className='text-white rounded-md px-4 py-1 m-2 text-xs'
            style={{
              background: HOLIDAYTYPE.HOLIDAY
            }}
          >
            Holiday
          </button>

          <button
            type="button"
            className='text-white rounded-md px-4 py-1 m-2 text-xs'
            style={{
              background: HOLIDAYTYPE.OPTIONAL_HOLIDAY
            }}
          >
            optional Holiday
          </button>


          <button
            type="button"
            className='text-white rounded-md px-4 py-1 m-2 text-xs'
            style={{
              background: HOLIDAYTYPE.OTHER
            }}
          >
            Other
          </button>
        </div>


      </div>
      <div className="bg-white mt-2 p-8 rounded-md">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          weekends={true}
          // events={event}
          eventContent={renderEventContent}
          height={600}
          eventClick={(arg: any) => {
            handleDateClick(arg)
          }
          }

          events={event.map((event: any) => {
            return {
              id: event.id ? event.id : 0,
              color: event.color,
              start: event.start,
              end: event.end,
              date: event.date,
              title: event.title,
            };
          })}

          eventAdd={function () {
            alert('hh')
          }}
        />
      </div>
    </>
  )
}
function renderEventContent(eventInfo: any) {
  return (
    <>
      {/* <p>{eventInfo.event.id}</p> */}
      {/* <p>{eventInfo.event.type}</p> */}
      <p className="px-3 " style={{ background: `"${eventInfo.event.color}"` }}>{eventInfo.event.title}</p>
    </>
  )
}


const handleDateClick = async (arg: any) => { // bind with an arrow function
  // alert(arg.event.id)
  // console.log(arg.event._def.publicId)
  // // console.log(arg.event.id);
  if (arg.event.id == 0) {
    toast.error("This event can't be able delete ,Event Type  : [Birtday,Work Anniversaries etc]", {
      position: "top-right", autoClose: 5000,
      hideProgressBar: false,
      progress: undefined,
      theme: "colored",
    });
  }
  else {
    var result = confirm("Are you sure you want to delete?");
    if (!result) {
      return;
    }

    try {

      await api.delete('/holiday/delete/', {
        params: { id: arg.event.id },
      });
      toast.success('Data deleted Successfully!', {
        position: "top-right", autoClose: 5000,
        hideProgressBar: false,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error('Oops Something Wrong!', {
        position: "top-right", autoClose: 5000,
        hideProgressBar: false,
        progress: undefined,
        theme: "colored",
      });
    }

    arg.event.remove()
  }

}




export default HolidayPage