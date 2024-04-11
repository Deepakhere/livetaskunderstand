import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import LoaderComponent from "../../components/Loader/LoaderComponent";

const LoginPage = () => {
  const [loader, setLoader] = useState(false)
  const [code, setCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoader(true)

    try {
      const res = await api.post("/employee/login", { code, password, mobile });
      if (res.data.success == true) {
        toast.success(res.data.message, {
          position: "top-right", autoClose: 5000,
          hideProgressBar: false,
          progress: undefined,
          theme: "colored",
        });
        window.sessionStorage.setItem('token', res.data.data.accessToken);
        window.localStorage.setItem('token', res.data.data.accessToken)
        navigate('/dashboard', { replace: true });
      }
    } catch (error: any) {
      // console.log(error)

      toast.error('Internal Server Error', {
        position: "top-right", autoClose: 5000,
        hideProgressBar: false,
        progress: undefined,
        theme: "colored",
      });

    } finally {
      setLoader(false)
    }


  }

  return (
    <>
      {loader ? <LoaderComponent /> : null}

      <div className="min-h-screen bg-gray-100 flex items-center">
        <div className="container mx-auto max-w-md shadow-md ">
          <div className="bg-white flex justify-center w-full pt-10px  ">
            {/* <img src="https://c149.pcloud.com/dpZh4L3S6Zg2GYaX7Zdq3D7ZZeoxsykZNVZZNsHZZQY8BupMl9TuHGpcoP2EfVFbpxOvX/Colorful%20Print%20Palace%20Logo%20-%20Made%20with%20PosterMyWall%20%281%29.jpg" style={{ height: "60px", paddingLeft: "10px", paddingTop: "10px", paddingBottom: "1px", marginLeft: "-10px" }} /> */}
            {/* <img src={"./logo.png"} style={{ height: "60px", paddingLeft: "10px", paddingTop: "10px", paddingBottom: "1px", marginLeft: "-10px" }} />
           */}

          </div>
          <div className="bg-white flex justify-center w-full ">
            <h2 className="font-bold text-xl text-gray-500">Login to your account </h2>
          </div>

          <div className=" px-8 pb-8 pt-2 bg-white ">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="mr-4 text-gray-700  inline-block mb-2" >Code</label>
                <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none  " value={code} onChange={(e) => setCode(e.target.value)} />
              </div>
              <div className="mb-2">
                <label className="mr-4 text-gray-700  inline-block mb-2" >Mobile No</label>
                <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none  " value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div>
              <div className="">
                <label className="mr-4 text-gray-700  inline-block mb-2" >Password</label>
                <input type="password" className="border bg-gray-100 py-2 px-4 w-96 outline-none  " value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className="w-96 mt-3 text-indigo-50 font-bold bg-teal-500 py-3 " type="submit">LOGIN</button>
              {/* <span className="text-sm text-gray-700 inline-block mt-2  ">Forget password ?</span> */}


              <ToastContainer />
            </form>
          </div>
        </div >
      </div >

    </>
  )
}

export default LoginPage