
import React , {useEffect, useState}from "react";
import Login from './pages/Login';
import Forgotpassword from "./pages/Forgotpassword";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import MainLayout from "./component/MainLayout";
import Resetpassword from "./pages/Resetpassword";
import CreateUser from "./pages/CreateUser";
import ProjectManagement from "./pages/ProjectManagement";
import RunAutomation1 from "./pages/RunAutomation1";
import Menu from "./pages/Menu"
import Header  from "./pages/Header";
import  Table  from "./pages/Table";
import Cards from './pages/Cards'
import Card1 from './pages/Card1'
import CreateTask from "./pages/CreateTask";
import Menu1 from "./pages/Menu1";
import Dashboard from './pages/Dashboard'
import RunAutomation from "./pages/RunAutomation";
import TaskCreation from './pages/TaskCreation'
import AutotestAllocation from './pages/AutotestAllocation'
import ReportHistory from './pages/ReportHistory';
import Profile from './pages/Profile';
import ReportHistory1 from "./pages/ReportHistory1";
import ProjectManagement1 from "./pages/ProjectManagent1";
import ManualTesting from "./pages/ManualTesting"
import Getotp from "./pages/Getotp";
import ManualTesting1 from "./pages/ManualTesting1"
import ManualtestingHistory from "./pages/ManualtestingHistory"
const App = () => {
 

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/manualtestinghistory" element={<ManualtestingHistory />}/>
      <Route path="/usertask" element={<CreateTask /> }/>
      <Route path="/manual_testing1" element={<ManualTesting1 /> }/>
      <Route path="/getotp" element={<Getotp /> }/>
      <Route path="/profile" element={<Profile /> }/>
      <Route path="/createtask" element={<TaskCreation />} />
      <Route path="/report_history" element={<ReportHistory />} />
      <Route path="/report_history1" element={<ReportHistory1 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manual_testing" element={<ManualTesting /> }/> 
      <Route path="/user_management" element={<CreateUser />}/>
      <Route path="/header" element={<Header />}/>
      <Route path="/projectform" element={<ProjectManagement />}/>
      <Route path="/pproject_management" element={<ProjectManagement1 />}/>
      <Route path="/run_atomation1"  element={<RunAutomation/>} />
      <Route path="/run_atomation"  element={<RunAutomation1/>} />
      <Route path="/table"  element={<Table/>} />
      <Route path="/menu"  element={<Menu/>} />
      <Route path="/" element={<CreateUser />}/>
      <Route path="/Forgotpassword" element={<Forgotpassword />}/>
      <Route path="/resetpassword" element={<Resetpassword />}/>
      <Route path="/admin" element={<MainLayout /> }/>
      {/* <Route path="/menu/dashboard" element={<Dashboard /> }/> */}
      <Route path="/menu1" element={<Menu1 /> }/>
      <Route path="/autotes_allocation" element={<AutotestAllocation /> }/>
       {/* <Route path="/user_mang" element={<Usermanagement /> }/>  */}
        {/* <Route index  element={<Dashboard/>} /> */}
           
           
      
    </Routes>
   </BrowserRouter>
  )
}

export default App

 