
import './payslip.css'
import PayslipTemplateOne from "./PayslipTemplateOne";
const Payslip = () => {
  // let componentRef = useRef(null);




  // const [employee, setEmployee] = useState({
  //   id: 1685328248504,
  //   name: "John Doe",
  //   email: "johndoe@gmail.com",
  //   position: "accountant",
  //   cadreLevel: "Consultant",
  //   isAdmin: false,
  //   earnings: {
  //     basic: 5000,
  //     transport: 1000,
  //     overtime: 370,
  //     housing: 700,
  //   },
  //   deductions: {
  //     tax: 500,
  //     pension: 200,
  //   },
  // });

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: `${employee.name.replace(/\s/g, "-")
  //     }-Payslip`,
  //   onPrintError: () => alert("there is an error when printing"),
  // });

  return (
    <>

      <PayslipTemplateOne />


      {/* <section className="min-h-[85vh] p-4 lg:p-8 max-w-4xl mx-auto" ref={componentRef}>
        <div
          key={employee.id}
          className="bg-white rounded-md p-3 lg:p-8 relative print:mt-12"
        >
          <h1 className="font-bold mb-8 mt-12 lg:mt-0 print:text-3xl">
            Employee Details
          </h1>

          <div className="info p-4 border border-zinc-200 rounded-md">
            <p className="mb-4">
              <span className="font-bold">Name:</span>{" "}
              <span className="text-zinc-500 text-sm capitalize">
                {employee.name}
              </span>
            </p>
            <p className="mb-4">
              <span className="font-bold">Email:</span>{" "}
              <span className="text-zinc-500 text-sm break-words">
                {employee.email}
              </span>
            </p>
            <p className="mb-4">
              <span className="font-bold">Cadre Level:</span>{" "}
              <span className="text-zinc-500 text-sm capitalize">
                {employee.cadreLevel}
              </span>
            </p>
            <p className="mb-4">
              <span className="font-bold">Position:</span>{" "}
              <span className="text-zinc-500 text-sm capitalize">
                {employee.position}
              </span>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 my-6">
            <div className="flex-1 p-4 border border-zinc-200 rounded-md flex flex-col justify-between">
              <div className="">
                <h2 className="font-bold mb-6  text-lg lg:text-xl">Earnings</h2>

                <div className="mb-4">
                  <span className="font-bold">Basic:</span>{" "}
                  <span className="text-zinc-500 text-sm">
                    {employee.earnings.basic}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-bold">Transport:</span>{" "}
                  <span className="text-zinc-500 text-sm">
                    {employee.earnings.transport}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-bold">Overtime:</span>{" "}
                  <span className="text-zinc-500 text-sm">
                    {employee.earnings.overtime}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-bold">Housing:</span>{" "}
                  <span className="text-zinc-500 text-sm">
                    {employee.earnings.housing}
                  </span>
                </div>
              </div>
              <div className="">
                <h2 className="text-lg">
                  <span className="font-bold">Total:</span>{" "}
                  <span className=""> ₦ 7,070.00</span>
                </h2>
              </div>
            </div>{" "}
            <div className="flex-1 p-4 border border-zinc-200 rounded-md flex flex-col justify-between">
              <div className="">
                <h2 className="font-bold mb-6 text-lg lg:text-xl">Deductions</h2>
                <div className="mb-4">
                  <span className="font-bold">Tax:</span>{" "}
                  <span className="text-zinc-500 text-sm">
                    {employee.deductions?.tax}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-bold">Pension:</span>{" "}
                  <span className="text-zinc-500 text-sm">
                    {employee.deductions?.pension}
                  </span>
                </div>
              </div>
              <div className="">
                <h2 className="text-lg">
                  <span className="font-bold">Total:</span>{" "}
                  <span className="">₦ 700.00</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="info p-4 border border-zinc-200 rounded-md">
            <h2 className="text-lg">
              <span className="font-bold">Overall Total:</span>{" "}
              <span className="">₦ 6,370.00</span>
            </h2>
          </div>
          <div className="print:hidden">
            <button
              onClick={handlePrint}
              className="bg-cyan-500 px-6 py-2 text-white border border-cyan-500 font-bold rounded-md mb-3 w-full lg:w-fit my-6 max-w-sm"
            >
              Print Payslip
            </button>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Payslip