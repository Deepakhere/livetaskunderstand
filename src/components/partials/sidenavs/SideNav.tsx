import { useState } from "react"
import appRoutes from "../../../routes/Routes"
import { Link } from "react-router-dom"
import { getDecodedTokenUser } from "../../../helpers/auth.helper"
import { useDispatch, useSelector } from "react-redux"
import { changeHamburger } from "../../../store/hamburger-menu.reducer"
import { AiOutlineCloseSquare } from "react-icons/ai"

const SideNav = () => {
  const decoded = getDecodedTokenUser();
  const hamburgerMenu = useSelector((state: any) => state.hamburgerMenu);
  const dispatch = useDispatch();

  return (
    <>
      <div className={` fixed w-56 inset-y-0 left-0 z-30 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 ${hamburgerMenu === 'open' ? 'show-mobile-menu' : 'smallscreen'}`}   >

        {/* Hamburger Menu close button */}
        <div className="hicon absolute top-0 right-0 mr-1 " onClick={() => {
          dispatch(changeHamburger('close'));
        }}>
          <AiOutlineCloseSquare fontSize={25} style={{ color: '#14b8a6' }} />
        </div>

        <div className="flex  bg-gray-800  p-1">
          <div className="flex items-center px-2  h-12 w-40 ">
            {/* <img src="https://s6.imgcdn.dev/AjHLS.png" alt="logo" className="mt-2" /> */}
            <img src="https://ik.imagekit.io/dmtyg24te/logo.png?updatedAt=1695448416088" alt="logo" className="mt-2" />

          </div>
        </div>

        <nav >
          {appRoutes.map((items: any, index: any) => <SidebarItem key={index} items={items} role={decoded.role} />)}
        </nav>
        {/* <div className="absolute bottom-0 left-0 w-full ">
          <h1 className="text-gray-400 p-4">Last Login : 00-00-0000</h1>
        </div> */}
      </div>
    </>
  )
}




const SidebarItem = ({ items, role }: any) => {
  // const newTo = {
  //   pathname: "/category/595212758daa6810cbba4104",
  //   param1: "Par1"
  // };

  const allowedRoles = items.role ? items.role : [];
  const [open, setOpen] = useState(false)
  return (
    <div >

      {
        items.child ? <div className={open ? " active" : "  "} onClick={() => setOpen(!open)} >
          {allowedRoles.includes(role) ? <a className=" flex items-center px-3 py-1 mt-1 text-gray-400 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="#">
            {items.icon}
            <span className="mx-2 sidebar_font_primary_text_size">{items.displayText}</span>
          </a> : null}

          {allowedRoles.includes(role) ? <div className={open ? "bg-gray-800 ml-3 mr-2 mt-1 py-2 rounded" : "hidden "}  >
            {items.child.map((data: any, index: any) =>
              <Link to={`${data.path}`} key={index} className=" flex items-center px-2  py-1 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" >
                {data.icon}
                <span className="mx-1 text-xs">{data.displayText}</span>
              </Link>
            )}
          </div> : null}

        </div > :
          <>
            {allowedRoles.includes(role) ? <Link to={`${items.path}`} className={open ? "" : " flex items-center px-3 py-1 mt-1 text-gray-400 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"} >
              {items.icon}
              <span className="mx-2 sidebar_font_primary_text_size">{items.displayText}</span>
            </Link> : null}

          </>
      }
    </div>
  )
}

export default SideNav