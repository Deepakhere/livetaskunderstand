import { Header } from '../partials/headers/Header'
import Footer from '../partials/footers/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import SideNav from '../partials/sidenavs/SideNav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const token = window.localStorage.getItem('token');
  //const token = window.sessionStorage.getItem('token');
  //   
  if (!token) {
    return <Navigate to="/" replace />
  }
  else {

    // const decoded = getDecodedTokenUser();
    // console.log(decoded);
  }
  return (
    <>

      <div className="flex h-screen bg-gray-200 font-roboto">
        <SideNav />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-4 py-3">
              <Outlet />
            </div>
            <ToastContainer />
          </main>
        </div>
      </div>


      {/* 
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div className="w-full">
            <div className="m-8 my-20 max-w-[400px] mx-auto">
              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-extrabold text-teal-500">Turn on notifications</h1>
                <p className="text-gray-600">Get the most out of Twitter by staying up to date with what's happening.</p>
              </div>
              <div className="space-y-4">
                <button className="p-3 bg-teal-500 rounded-full text-white w-full font-semibold">Allow notifications</button>
                <button className="p-3 bg-white border rounded-full w-full font-semibold">Skip for now</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}




      <Footer />
    </>
  )
}

export default Layout