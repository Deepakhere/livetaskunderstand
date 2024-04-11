import { AiFillProfile, AiFillProject, AiFillWallet } from "react-icons/ai";
import { IoIosAlbums, IoIosCalendar, IoIosFingerPrint, IoIosWallet, IoMdContacts, IoMdDesktop } from "react-icons/io";
import { USERROLE } from "../interfaces/constants";
const iconColor = '#14B8A6';

const appRoutes: any = [

  {
    path: "/dashboard",
    displayText: "Dashboard",
    icon: <AiFillProject style={{ color: iconColor }} fontSize={15} />,
    role: [USERROLE.EMPLOYEE, USERROLE.ACCOUNTANT, USERROLE.COMPANYADMIN, USERROLE.HR, USERROLE.MANAGER]
  },

  {
    path: "/job-desk",
    displayText: "Job Desk",
    icon: <IoIosAlbums fontSize={15} style={{ color: iconColor }} />,
    role: [USERROLE.EMPLOYEE, USERROLE.ACCOUNTANT, USERROLE.COMPANYADMIN, USERROLE.HR, USERROLE.MANAGER]
  },
  {
    path: "#",
    displayText: "Attendance",
    icon: <IoIosFingerPrint fontSize={15} style={{ color: iconColor }} />,
    role: [USERROLE.EMPLOYEE, USERROLE.ACCOUNTANT, USERROLE.COMPANYADMIN, USERROLE.HR, USERROLE.MANAGER],
    child: [
      {
        path: "/attendance",
        displayText: "View",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      },
      // {
      //   path: "/request-leave",
      //   displayText: "Request Attandance",
      //   icon: <AiFillTags fontSize={15} style={{ color: iconColor }} />,
      // },
    ]
  },
  // {
  //   path: "#",
  //   displayText: "Leaves",
  //   icon: <IoIosFolder fontSize={15} style={{ color: iconColor }} />,
  //   child: [
  //     {
  //       path: "/my-leave",
  //       displayText: "My Leave",
  //       icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
  //     },
  //     {
  //       path: "/request-leave",
  //       displayText: "Request Leave",
  //       icon: <AiFillTags fontSize={15} style={{ color: iconColor }} />,
  //     },
  //     {
  //       path: "/approve-leave",
  //       displayText: "Approve",
  //       icon: <AiFillTags fontSize={15} style={{ color: iconColor }} />,
  //     },
  //   ]
  // },

  {
    path: "/calender",
    displayText: "Calender",
    icon: <IoIosCalendar fontSize={15} style={{ color: iconColor }} />,
    role: [USERROLE.EMPLOYEE, USERROLE.ACCOUNTANT, USERROLE.COMPANYADMIN, USERROLE.HR, USERROLE.MANAGER]
  },

  {
    path: "#",
    displayText: "Compensation",
    icon: <AiFillWallet fontSize={15} style={{ color: iconColor }} />,
    role: [USERROLE.EMPLOYEE, USERROLE.ACCOUNTANT, USERROLE.COMPANYADMIN, USERROLE.HR, USERROLE.MANAGER],
    child: [
      {
        path: "/my-compensation",
        displayText: "My Compensation",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
        role: [USERROLE.EMPLOYEE, USERROLE.ACCOUNTANT, USERROLE.COMPANYADMIN, USERROLE.HR, USERROLE.MANAGER]
      },
      // {
      //   path: "/my-payslip",
      //   displayText: "My PaySlip",
      //   icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      //   role: [USERROLE.EMPLOYEE, USERROLE.ACCOUNTANT, USERROLE.COMPANYADMIN, USERROLE.HR, USERROLE.MANAGER]
      // },
    ]
  },

  // {
  //   path: "#",
  //   displayText: "Assets",
  //   icon: <IoIosLaptop fontSize={15} style={{ color: iconColor }} />,
  //   child: [
  //     {
  //       path: "/my-payslip",
  //       displayText: "Assets Lists",
  //       icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
  //     },

  //     {
  //       path: "/my-payslip",
  //       displayText: "Assegined Assets",
  //       icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
  //     },
  //   ]
  // },



  {
    path: "#",
    displayText: "Payroll",
    icon: <IoIosWallet fontSize={15} style={{ color: iconColor }} />,
    role: [USERROLE.ADMIN, USERROLE.COMPANY, USERROLE.SUPERADMIN, USERROLE.HR],
    child: [
      {
        path: "/salary-template",
        displayText: "Salary Template",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      },

      {
        path: "/salary-template-list",
        displayText: "Salary Template List",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      },
      // {
      //   path: "/assign-salary",
      //   displayText: "Assign Salary Template",
      //   icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      // },
      // {
      //   path: "/generate-payslip",
      //   displayText: "Generate Payslip",
      //   icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      // },
    ]
  },

  //adminstration
  {
    path: "#",
    displayText: "Administration",
    icon: <IoMdDesktop fontSize={15} style={{ color: iconColor }} />,
    role: [USERROLE.ADMIN, USERROLE.COMPANY, USERROLE.SUPERADMIN, USERROLE.HR],
    child: [
      {
        path: "/work-shift",
        displayText: "Work Shift",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      },
      {
        path: "/adminstration/holiday",
        displayText: "Holiday",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      },
      {
        path: "/department/lists",
        displayText: "Department",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      },
      {
        path: "/designation/lists",
        displayText: "Designation",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      },
    ]
  },



  // {
  //   path: "#",
  //   displayText: "Reports",
  //   icon: <IoMdDesktop fontSize={15} style={{ color: iconColor }} />,
  //   role: [USERROLE.ADMIN, USERROLE.COMPANY, USERROLE.SUPERADMIN, USERROLE.HR],
  //   child: [
  //     {
  //       path: "/monthly-attendance-report",
  //       displayText: "Attendance Report",
  //       icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
  //     },

  //   ]
  // },

  // 


  {
    path: "#",
    displayText: "Employee",
    icon: <IoMdContacts fontSize={15} style={{ color: iconColor }} />,
    role: [USERROLE.ADMIN, USERROLE.COMPANY, USERROLE.SUPERADMIN, USERROLE.HR],
    child: [
      {
        path: "/employee/lists",
        displayText: "Manage Employee",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
        role: [432]
      },
    ]
  },

  {
    path: "#",
    displayText: "Setting",
    icon: <IoMdContacts fontSize={15} style={{ color: iconColor }} />,
    role: [USERROLE.ADMIN, USERROLE.COMPANY, USERROLE.SUPERADMIN, USERROLE.HR],
    child: [
      {
        path: "/permission",
        displayText: "Roles and Permission",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      },
      {
        path: "/setting/location",
        displayText: "Set Location",
        icon: <AiFillProfile fontSize={15} style={{ color: iconColor }} />,
      },
    ]
  },
];

export default appRoutes;

