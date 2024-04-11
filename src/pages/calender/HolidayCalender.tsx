
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import { HOLIDAYTYPE } from "../../interfaces/constants";


// const events = [
//   { title: 'Jai', date: '2023-07-02' },
//   { title: 'Mata', date: '2023-07-03', color: '#ea337f' },
// ]


const HolidayCalender = () => {

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



      <div
        className="bg-white px-6 py-4 my-3 mx-auto shadow rounded-md flex items-center"
      >
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


      <div className="bg-white p-8 rounded-md">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          weekends={true}
          events={event}
          eventContent={renderEventContent}
          height={600}
        />
      </div>
    </>
  )
}
function renderEventContent(eventInfo: any) {
  return (
    <>
      {/* <b>{eventInfo.timeText}</b> */}
      <p className="px-2" style={{ background: `"${eventInfo.event.color}"` }}>{eventInfo.event.title}</p>
    </>
  )
}
export default HolidayCalender