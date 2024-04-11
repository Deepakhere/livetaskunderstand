import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react";
import { request } from "../../api/request";

const SalaryTemplatePage = () => {
  const [open, setOpen] = useState(false);
  const [openDed, setDedOpen] = useState(false);
  const [openOther, setOtherOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [allowance, setAllowance]: any = useState([]);
  const [dedtitle, setDedTitle] = useState('');
  const [dedamount, setDedAmount] = useState('');
  const [deduction, setDeduction]: any = useState([]);
  const [othertitle, setOtherTitle] = useState('');
  const [otheramount, setOtherAmount] = useState('');
  const [other, setOther]: any = useState([]);

  const [basicSalary, SetBasicSalary] = useState('');
  const [payGradeName, SetPayGradeName] = useState('');
  const [startingDay, SetStartDay] = useState(0);
  const [endDay, SetEndDay] = useState(0);
  const [description, Setdescription] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOtherOpen(false);
  };

  const handleCloseAllowances = () => {
    setOpen(false);

  }

  const handleSubmit = () => {
    setAllowance([...allowance, { title, amount }]);
    setTitle('');
    setAmount('');
    setOpen(false);
  }
  const deleteAllowance = (index: number) => {
    let clonedAllowance = [...allowance];
    clonedAllowance.splice(index, 1);
    setAllowance(clonedAllowance);
  }

  const handleClickOtherOpen = () => {
    setOtherOpen(true);
  };
  const handleCloseOther = () => {
    setOtherOpen(false);
  };

  const handleOther = () => {
    setOther([...other, { othertitle, otheramount }]);
    setOtherTitle('');
    setOtherAmount('');
    setOtherOpen(false);
  }
  const deleteOther = (index: number) => {
    let otherCloned = [...other];
    otherCloned.splice(index, 1);
    setOther(otherCloned);
  }

  const handleCloseDed = () => {
    setDedOpen(false);
  };
  const handleClickDedOpen = () => {
    setDedOpen(true);
  };

  const handleDeduction = () => {
    setDeduction([...deduction, { dedtitle, dedamount }]);
    setDedTitle('');
    setDedAmount('');
    setDedOpen(false);
  }
  const deleteDeduction = (index: number) => {
    let clonedAllowance = [...deduction];
    clonedAllowance.splice(index, 1);
    setDeduction(clonedAllowance);
  }

  const handleFormSubmit = async () => {

    const jsonData = {
      endDay,
      startingDay,
      description,
      payGradeName,
      basicSalary,
      other,
      deduction,
      allowance
    }
    console.log(jsonData)
    // jsonData.employee = payload.userId;
    const res = await request.create({ url: '/salary-template', jsonData });
    if (res.success) {
      SetBasicSalary('');
      SetPayGradeName('');
      SetStartDay(0);
      SetEndDay(0);
      Setdescription('');
      setAllowance([]);
      setDeduction([]);
      setOther([]);
    }
    // other.splice(0, other.length)
    // console.log(other)
  }


  return (
    <>
      <div className="bg-white p-4 rounded">
        <h3 className="text-xl font-medium mb-4">Configure Salary Template</h3>

        <div className="flex">
          <div className="w-1/2 pr-4">
            <div className="bg-gray-100 rounded shadow p-3">
              <div className="border w-full rounded mt-2 flex p-3 flex justify-between items-center flex-wrap ">
                <div >
                  <h3 className="text-lg font-medium">Pay Grade Name*</h3>
                </div>
                <div >
                  <TextField id="filled-basic" label="Pay Grade Name*" variant="filled" value={payGradeName} onChange={(e) => SetPayGradeName(e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 pr-4">
            <div className="bg-gray-100 rounded shadow p-3">
              <div className="border w-full rounded mt-2 flex p-3 flex justify-between items-center flex-wrap ">
                <div >
                  <h3 className="text-lg font-medium">Basic Salary</h3>
                  <h4 className="text-red-700 text-xs font-bold mt-1">/Per Month</h4>
                </div>
                <div >
                  <TextField id="filled-basic" label="Amount" variant="filled" value={basicSalary} onChange={(e) => SetBasicSalary(e.target.value)} />
                </div>
              </div>
            </div>
          </div>


        </div>



        <div className="flex mt-3">
          <div className="w-1/2 pr-4">
            <div className="bg-gray-100 rounded shadow p-3">
              <div className="border w-full rounded mt-2 flex p-3 flex justify-between items-center flex-wrap ">
                <div >
                  <h3 className="text-lg font-medium">Salary Start Day of Month</h3>
                </div>
                <div >
                  <FormControl variant="filled" sx={{ minWidth: 188 }}>
                    <InputLabel > Select Day</InputLabel>
                    <Select
                      value={startingDay}
                      label="Select Day"
                      onChange={(e: any): any => SetStartDay(e.target.value)}
                    >
                      {[...Array(31)].map((_elementInArray, index) => (
                        <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
                      )
                      )}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 pr-4">
            <div className="bg-gray-100 rounded shadow p-3">
              <div className="border w-full rounded mt-2 flex p-3 flex justify-between items-center flex-wrap ">
                <div >
                  <h3 className="text-lg font-medium">Salary End Day of Month</h3>

                </div>
                <div >
                  <FormControl variant="filled" sx={{ minWidth: 188 }}>
                    <InputLabel > Select Day</InputLabel>
                    <Select
                      value={endDay}
                      label="Select Day"
                      onChange={(e: any): any => SetEndDay(e.target.value)}
                    >
                      {[...Array(31)].map((_elementInArray, index) => (
                        <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
                      )
                      )}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex mt-4">


          <div className="w-1/2 pr-4">
            <div className="bg-gray-100 rounded shadow p-4">
              <TextField id="filled-basic" label="Description" variant="filled" defaultValue={description} onChange={(e: any) => Setdescription(e.target.value)} fullWidth />
            </div>
          </div>

          <div className="w-1/2 pr-4">
            <div className="bg-gray-100 rounded shadow p-4">
              <div className="justify-between  flex ">
                <h3 className="text-xl  font-bold ">Allowance*</h3>
                <button onClick={handleClickOpen} className="px-2 py-1 bg-teal-500 text-white rounded shadow font-bold ">Add</button>
              </div>
              {allowance.map((data: any, index: number) => {
                return (
                  <div key={index} className="border w-full rounded mt-2 flex p-2 flex justify-between items-center flex-wrap ">
                    <div >
                      <h3 className="text-lg font-medium">{data.title}</h3>
                      <h4 className="text-red-700 text-xs font-bold mt-1" onClick={() => {
                        deleteAllowance(index)
                      }}>Remove</h4>
                    </div>
                    <div>
                      <h4 className="text-2xl font-medium">{data.amount}</h4>
                      <h5 className="text-sm font-bold text-purple-800">/Per Month</h5>
                    </div>
                  </div>
                )
              })}


            </div>
          </div>

        </div>


        <div className="flex mt-4">

          <div className="w-1/2 pr-4">
            <div className="bg-gray-100 rounded shadow p-4">
              <div className="justify-between  flex ">
                <h3 className="text-xl  font-bold ">Deduction*</h3>
                <button onClick={handleClickDedOpen} className="px-2 py-1 bg-teal-500 text-white rounded shadow font-bold ">Add</button>
              </div>
              {deduction.map((data: any, index: number) => {
                return (
                  <div key={index} className="border w-full rounded mt-2 flex p-2 flex justify-between items-center flex-wrap ">
                    <div >
                      <h3 className="text-lg font-medium">{data.dedtitle}</h3>
                      <h4 className="text-red-700 text-xs font-bold mt-1" onClick={() => {
                        deleteDeduction(index)
                      }}>Remove</h4>
                    </div>
                    <div>
                      <h4 className="text-2xl font-medium">{data.dedamount}</h4>
                      <h5 className="text-sm font-bold text-purple-800">/Per Month</h5>
                    </div>
                  </div>
                )
              })}


            </div>
          </div>
          <div className="w-1/2 pr-4">
            <div className="bg-gray-100 rounded shadow p-4">
              <div className="justify-between  flex ">
                <h3 className="text-xl  font-bold ">Other Services*</h3>
                <button onClick={handleClickOtherOpen} className="px-2 py-1 bg-teal-500 text-white rounded shadow font-bold ">Add</button>
              </div>
              {other.map((data: any, index: number) => {
                return (
                  <div key={index} className="border w-full rounded mt-2 flex p-2 flex justify-between items-center flex-wrap ">
                    <div >
                      <h3 className="text-lg font-medium">{data.othertitle}</h3>
                      <h4 className="text-red-700 text-xs font-bold mt-1" onClick={() => {
                        deleteOther(index)
                      }}>Remove</h4>
                    </div>
                    <div>
                      <h4 className="text-2xl font-medium">{data.otheramount}</h4>
                      <h5 className="text-sm font-bold text-purple-800">/Per Month</h5>
                    </div>
                  </div>
                )
              })}


            </div>
          </div>


        </div>
        <div>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create Allowances</DialogTitle>
            <DialogContent>

              <DialogContentText>
                Salary allowances means give their employees financial benefits.
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
                variant="filled"
                onChange={(e: any) => setTitle(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Amount"
                type="text"
                fullWidth
                variant="filled"
                onChange={(e: any) => setAmount(e.target.value)}
              />
            </DialogContent>
            <DialogActions className="mb-2">
              <button className="text-red-500" onClick={handleCloseAllowances}>Cancel</button>
              <button className="px-5 py-1 mr-4 bg-teal-500 text-white rounded shadow font-bold " onClick={handleSubmit}>Submit</button>
            </DialogActions>

          </Dialog>

          {/* dedection */}

          <Dialog open={openDed} onClose={handleClose}>
            <DialogTitle>Create Deduction</DialogTitle>
            <DialogContent>

              <DialogContentText>
                Salary allowances means give their employees financial benefits.
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
                variant="filled"
                onChange={(e: any) => setDedTitle(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Amount"
                type="text"
                fullWidth
                variant="filled"
                onChange={(e: any) => setDedAmount(e.target.value)}
              />
            </DialogContent>
            <DialogActions className="mb-2">
              <button className="text-red-500" onClick={handleCloseDed}>Cancel</button>
              <button className="px-5 py-1 mr-4 bg-teal-500 text-white rounded shadow font-bold " onClick={handleDeduction}>Submit</button>
            </DialogActions>

          </Dialog>


          {/* other */}
          <Dialog open={openOther} onClose={handleCloseOther}>
            <DialogTitle>Create Other Services</DialogTitle>
            <DialogContent>

              <DialogContentText>
                Salary allowances means give their employees financial benefits.
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
                variant="filled"
                onChange={(e: any) => setOtherTitle(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Amount"
                type="text"
                fullWidth
                variant="filled"
                onChange={(e: any) => setOtherAmount(e.target.value)}
              />
            </DialogContent>
            <DialogActions className="mb-2">
              <button className="text-red-500" onClick={handleCloseOther}>Cancel</button>
              <button className="px-5 py-1 mr-4 bg-teal-500 text-white rounded shadow font-bold " onClick={handleOther}>Submit</button>
            </DialogActions>

          </Dialog>
        </div >
        <button className="px-4 py-2 bg-teal-400 mt-3 text-white rounded" onClick={() => {
          handleFormSubmit();
        }}>Save</button>
      </div>
    </>
  )
}

export default SalaryTemplatePage