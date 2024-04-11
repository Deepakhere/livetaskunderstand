
const PayslipTemplateOne = () => {
  return (
    <>

      <div id="payslip">
        <div className="outer">

          <div className="company_logo" >
            Logo
          </div>
          <div className="space"></div>
          <div className="company_text">
            <h1>Sundaravijayam Automobile Services Private Limited</h1>
            <p>#16, 4th floor, 17th cross, 9th Main, Sector 7, HSR Layout.<br></br>
              Bangalore 560102, Karnataka, INDIA</p>
          </div>
        </div>


        <div className="content">
          <table className='basicDetail'>
            <tr className='basicDetail_header_tr'>
              <th colSpan={2}>Employee Details</th>
              <th colSpan={2}>Salary Details</th>
            </tr>
            <tr className='basicDetail_tr'>
              <td>Name</td>
              <td><span className="basicDetail_text">Ankit Kumar Sah</span></td>
              <td>Salary Period</td>
              <td>Jul 01, 2023 - Jul 31, 2023</td>

            </tr>


            <tr className='basicDetail_tr'>
              <td>Email Id</td>
              <td>ankit.kumar.sah@readyassist.in</td>
              <td>Attendance</td>
              <td>Jul 01, 2023 - Jul 31, 2023</td>
            </tr>

            <tr className='basicDetail_tr'>
              <td>Email Id</td>
              <td>ankit.kumar.sah@readyassist.in</td>
              <td>Attendance</td>
              <td>Jul 01, 2023 - Jul 31, 2023</td>
            </tr>
          </table>

          <table className='payDetails'>
            <tr className='payDetails_tr'>
              <th className='payDetails_header_th' colSpan={2}>Earnings</th>
              <th className='payDetails_header_th' colSpan={2}>Deduction</th>
            </tr>
            <tr>
              <td className='payDetails_td'>Peter</td>
              <td className='payDetails_td'>33</td>
              <td className='payDetails_td'>Peter</td>
              <td className='payDetails_td'>55</td>
            </tr>
            <tfoot>
              <tr>
                <td className='payDetails_td'>Earning Total</td>
                <td className='payDetails_td'>180</td>
                <td className='payDetails_td'>Deduction Total</td>
                <td className='payDetails_td'>18000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

    </>
  )
}

export default PayslipTemplateOne