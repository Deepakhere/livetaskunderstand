import { useEffect, useState } from 'react';
import BasicDetails from './components/BasicDetails'
import { useDispatch } from 'react-redux';
import { getProfile } from '../../store/job-desk/job-desk.reducer';
import { MdDocumentScanner, MdMenuBook, MdOutlineArrowCircleRight, MdWork } from 'react-icons/md';
import MyEducationComponent from './components/MyEducationComponent';
import MyJobHistory from './components/MyJobHistory';
import EmergencyContactComponent from './components/EmergencyContactComponent';
import MyBankComponent from './components/MyBankComponent';
import DocumentComponent from './components/DocumentComponent';


const JobDeskPage = () => {

  const types = [
    {
      tabIndex: '1',
      title: 'Education',
      icon: <MdMenuBook />
    },
    {
      tabIndex: '2',
      title: 'Job History',
      icon: <MdWork />
    },
    {
      tabIndex: '3',
      title: 'Emergency',
      icon: <MdDocumentScanner />
    },
    {
      tabIndex: '4',
      title: 'Bank Details',
      icon: <MdDocumentScanner />
    },
    // {
    //   tabIndex: '5',
    //   title: 'Documents',
    //   icon: <MdDocumentScanner />
    // },
    // {
    //   tabIndex: '6',
    //   title: 'Bussiness Card',
    //   icon: <MdDocumentScanner />
    // },

  ];
  const [active, setActive] = useState(types[0].tabIndex);

  const dispatch = useDispatch();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getProfile());
    }
    return (): any => mounted = false;
  }, [])



  return (
    <>
      <BasicDetails />
      <div className=" mt-2">
        <div className="container mx-auto">
          <div className="flex ">
            <div className="w-3/12  border-r">
              <ul className="flex flex-col bg-gray-300 p-4 rounded-l-lg " >
                {types.map((type) => (
                  <div
                    id={type.tabIndex}
                    key={type.tabIndex}
                    onClick={() => setActive(type.tabIndex)}
                  >
                    <li className={`${active === type.tabIndex ? "border-gray-400 flex flex-row mb-2 text-teal-500" : "border-gray-400 flex flex-row mb-2 text-gray-600"}`}>
                      <div className="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-3">
                        <div className="flex flex-col rounded-md w-8 h-8 bg-gray-300 justify-center items-center mr-3">
                          {type.icon}
                        </div>
                        <div className="flex-1 pl-1 mr-16">
                          <div className={`${active === type.tabIndex ? "text-teal-500 font-medium" : "text-gray-600 font-medium"}`}>{type.title}</div>
                        </div>
                        <div className={`${active === type.tabIndex ? "text-white font-medium bg-teal-500 rounded-full " : "text-gray-600 font-medium"}`}><MdOutlineArrowCircleRight /></div>
                      </div>
                    </li>

                  </div>
                ))}

              </ul>

            </div>


            <div className="w-9/12 ml-2 h-96">
              {/* user education section start */}
              {active === "1" && <MyEducationComponent />}
              {/* job history section start */}
              {active === "2" && <MyJobHistory />}
              {/* emergency section start */}
              {active === "3" && <EmergencyContactComponent />}
              {/* bank section start */}
              {active === "4" && <MyBankComponent />}
              {/* bank section start */}
              {active === "5" && <DocumentComponent />}
              {/* bank section start */}
              {/* {active === "6" && <DigitalBussinessCard />} */}
            </div >



          </div >
        </div >
      </div >

    </>
  )
}

export default JobDeskPage