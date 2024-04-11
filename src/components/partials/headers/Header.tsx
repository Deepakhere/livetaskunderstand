

import { BiMenu } from "react-icons/bi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { changeHamburger } from "../../../store/hamburger-menu.reducer";
export const Header = () => {
  // const [profileDropdown, setProfileDropdown] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <header className="flex items-center justify-between px-2 py-2 bg-white border-b-4 border-teal-500">
        <div className="flex items-center">
          <div className="relative mx-2 flex">
            <div className="hicon">

              <BiMenu fontSize={38} style={{ color: '#' }} onClick={() => {
                dispatch(changeHamburger('open'));
              }} />

            </div>
            <img src="https://s6.imgcdn.dev/Ajg6C.png" alt="Ajg6C.png" className="h-10 w-36" />
          </div>
          <div className="relative ml-3 ">

            <form className="flex items-center">
              {/* <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" ></path></svg>
                </div>
                <input type="text" className="bg-gray-300 focus:outline-none text-gray-900 text-sm rounded   block w-full pl-10 p-1" placeholder="Search Employes.." required />

              </div> */}
              {/* <button type="submit" className="inline-flex items-center py-1 px-3 ml-2 text-sm  text-white bg-indigo-500 rounded border border-blue-700 hover:bg-indigo-700">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                Search</button> */}
            </form>
          </div>
        </div>

        <div className="flex items-center">
          {/* <div className='px-3 pt-1 flex'>
            <IoReloadCircleSharp style={{ color: '#14B8A6' }} fontSize={25} onClick={() => { window.location.reload(); }} />
          </div>
          <div className="relative">

            <button type="submit" className="rounded-md bg-teal-500 inline-flex items-center py-1 px-2 mr-3 text-gray-200 text-sm" onClick={() => {
              attendance()
            }}> <IoIosFingerPrint fontSize={18} /> Punch In</button>

          </div > */}

          <div className="relative">

            <button onClick={() => {
              window.localStorage.removeItem("token");
              return window.location.replace('/');
            }} className="w-full   py-2 text-sm text-gray-700 inline-flex items-center">
              <RiLogoutBoxRFill />
              <span className="pl-1">Logout</span> </button>
            {/* <button className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none" onClick={() => { setProfileDropdown(!profileDropdown) }}>
              <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80" alt="Your avatar" />
            </button>

            <div className={profileDropdown ? `absolute border right-0  w-48 mt-2 overflow-hidden bg-white shadow-xl ` : 'hidden'}>
              <button onClick={() => {
                window.localStorage.removeItem("token");
                return window.location.replace('/');
              }} className="w-full   py-2 text-sm text-gray-700 hover:bg-teal-500 hover:text-white">Logout</button>
            </div> */}
          </div >
        </div >
      </header >
    </>
  )
}
