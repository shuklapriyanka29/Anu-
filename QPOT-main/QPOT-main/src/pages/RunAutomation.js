// import React from 'react';
// import { MDBDataTable } from 'mdbreact';

// import Button from '@mui/material/Button'

// const DatatablePage = () => {
 
//   const data = {
//     columns: [
//       {
//         label: 'Project Id',
//         field: 'projectid',
//         sort: 'asc',
//         width: 160
//       },
//       {
//         label: 'Project Name',
//         field: 'projectname',
//         sort: 'asc',
//         width: 270
//       },
//       {
//         label: 'Last Execution Date',
//         field: 'lastexecutiondate',
//         sort: 'asc',
//         width: 200
//       },
//       {
//         label: 'Run',
//         field: 'report',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Action',
//         field: 'action',
//         sort: 'asc',
//         width: 150,  textAlign: 'center'
//       },
//       {
//         label: 'Status', 
//         field: 'status',
//         sort: 'asc',
//         width: 150,  textAlign: 'center'
//       }
//     ],
//     rows: [
//       {
//         projectid: 'Project121',
//         projectname: 'BAS',
//         lastexecutiondate: '25-Feb-2023',
//         report:<Button variant="contained" size="small" onClick={event => handleClick(event, 'hello world')}>Run</Button>,
//         action:<Button variant="contained" size="small" disabled ><a href="">Generate</a></Button>,
//         status:'Open'           
      
//       },
//       {
//         projectid: 'Project122',
//         projectname: 'CRM',
//         lastexecutiondate: '25-Jan-2023',
//         report:<Button variant="contained" size="small" onClick={event => handleClick(event, 201)}>Run</Button>,
//         action:<Button variant="contained" size="small" disabled ><a href="">Generate</a></Button>,
//         status:'Open'           
      
//       }
      
      
//     ]
//   };
//   const handleClick = (event, param) => {
//     console.log(event);
//     alert(console.log(event))
//      console.log(param);
//   };
//   return (
   
    
//     <div className="container-fluid my-4"  >
//       <div className="row">
//         <div className="col-12">
//           <div className="card my-4" style={{ boxShadow: '1px 2px 9px #F4AAB9'}}>
//             <div className="card-header">
//               <div className='row'>
//                 <div className='col-sm-10'>
//                 <h5 style={{fontWeight:''}}>Project:</h5>
//                 </div>
               
//                  <div className='col-sm-2'>
               
//                  </div>
//               </div>
              
//             </div>
//             <div className="card-body">
//              <MDBDataTable
//        striped
//        bordered
//        small
//      data={data}
//      /> 
//               </div>
//           </div>
//           </div>
//           </div>
//           </div>
//   );
// }

// export default DatatablePage;



// import React, {useState} from 'react';
// import { MDBDataTable } from 'mdbreact';

// import Button from '@mui/material/Button'
// import CircularProgress from '@mui/material/CircularProgress';
// const DatatablePage = () => {
//   const [loading, setLoading]= useState(false);
//   const data = {
//     columns: [
//       {
//         label: 'Project Id',
//         field: 'projectid',
//         sort: 'asc',
//         width: 160
//       },
//       {
//         label: 'Project Name',
//         field: 'projectname',
//         sort: 'asc',
//         width: 270
//       },
//       {
//         label: 'Last Execution Date',
//         field: 'lastexecutiondate',
//         sort: 'asc',
//         width: 200
//       },
//       {
//         label: 'Run',
//         field: 'report',
//         sort: 'asc',
//         width: 100
//       },
//       {
//         label: 'Action',
//         field: 'action',
//         sort: 'asc',
//         width: 150,  textAlign: 'center'
//       },
//       {
//         label: 'Status', 
//         field: 'status',
//         sort: 'asc',
//         width: 150,  textAlign: 'center'
//       }
//     ],
//     rows: [
//       {
//         projectid: 'Project121',
//         projectname: 'BAS',
//         lastexecutiondate: '25-Feb-2023',
//         report:<Button variant="contained"size="small" onClick={event => handleClick(event,332)}>Run</Button>,
//         action:<Button variant="contained" size="small" disabled ><a href="">Generate</a></Button>,
//         status:'Open'           
      
//       },
//       {
//         projectid: 'Project122',
//         projectname: 'CRM',
//         lastexecutiondate: '25-Jan-2023',
//         report:<Button variant="contained" size="small" onClick={event => handleClick(event, 201)}>Run</Button>,
//         action:<Button variant="contained" size="small" disabled ><a href="">Generate</a></Button>,
//         status:'Open'           
      
//       }
      
      
//     ]
//   };
//   // const handleClick = (event, param) => {
//   //   console.log(event);
//   //   alert(console.log(event))
//   //    console.log(param);
//   // };
//   const handleClick = () => {
//     setLoading(true);
    
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000); 
//   };
//   return (
   
    
//     <div className="container-fluid my-4"  >
//       <div className="row">
//         <div className="col-12">
//           <div className="card my-4" style={{ boxShadow: '1px 2px 9px #F4AAB9'}}>
//             <div className="card-header">
//               <div className='row'>
//                 <div className='col-sm-10'>
//                 <h5 style={{fontWeight:''}}>Project:</h5>
//                 </div>
               
//                  <div className='col-sm-2'>
               
//                  </div>
//               </div>
              
//             </div>
//             {loading ? (
//                 <div className="d-flex justify-content-center align-items-center">
//                   <CircularProgress />
//                 </div>
//               ) : (
//   <div className="card-body">
//                 <MDBDataTable
//                   striped
//                   bordered
//                   small
//                   data={data}
//                 /> 
// </div>
//               )}
//           </div>
//           </div>
//           </div>
//           </div>
//   );
// }

// export default DatatablePage;


import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate,Link } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import './runautomation.css'
const DatatablePage = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate(); 
  const [data, setData] = useState({
    columns: [
      {
        label: "Project Id",
        field: "projectid",
        sort: "asc",
        width: 160,
      },
      {
        label: "Project Name",
        field: "projectname",
        sort: "asc",
        width: 270,
      },
      {
        label: "Last Execution Date",
        field: "lastexecutiondate",
        sort: "asc",
        width: 200,
      },
      {
        label: "Run",
        field: "report",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
        textAlign: "center",
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 150,
        textAlign: "center",
      },
    ],
    rows: [],
  });

  useEffect(() => {
      setLoading(true);
      const win =window.sessionStorage;
        const value = win.getItem('username');
        // alert(value)
    fetch("https://uat.omfysgroup.com/qpotapp/getReportsByUSer?user_name="+value)
      .then((response) => response.json())
     
      .then((result) => {
        const rows = result.map((report) => ({
                projectid: report.project_id,
                projectname: report.project_name,
                lastexecutiondate: report.last_update_date,
                report:(<Button variant="contained" size="small" disabled={report.run_status} onClick={event => handleClick(event,report.report_id)} >Run</Button>),
                action:(<Button variant="contained" size="small"  disabled={report.generate_status} ><a href={"https://uat.omfysgroup.com/qpotmongo/uploadreports/"+report.report_url} style={{marginBottom:'-6px'}}><DownloadIcon sx={{ fontSize: 20 }}/></a></Button>),
                status: report.status                                                                  
        }));

        setData({ ...data, rows });
      })
      .finally(() => {
         setLoading(false);
      });
  }, []);

  const checkReportGenration=(report_id)=>
  {
    // setLoading(true);
    fetch("https://uat.omfysgroup.com/qpotapp/checkReportGenration?report_id="+report_id)
      .then(response => response.text())
      .then(result => {
        setLoading(true);
        if(result == "Generated")
        {
          setLoading(false);
          alert("Report Generated Successfully");
          navigate(0)
        }
        else{
          checkReportGenration(report_id);
        }
      })
      .catch(error => console.log('error', error));
  }

  const handleClick = (event, report_id) => {
    
    
     
      fetch("https://uat.omfysgroup.com/qpotapp/callSelenium?report_id="+report_id)
        .then((response) => response.text())
        .then((result) => {
          setLoading(true);
          console.log(result);
          setLoading(false);
        })
        .catch((error) => console.log("error", error));

      checkReportGenration(report_id);
  }

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
          <div
            className="card my-4"
            style={{ boxShadow: "1px 2px 9px #F4AAB9" }}
          >
            <div className="card-header">
              <div className="row">
                <div className="col-sm-10">
                  <h5 style={{ fontWeight: "" }}>Project:</h5>
                </div>

                <div className="col-sm-2"></div>
              </div>
            </div>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                <CircularProgress />
              </div>
            ) : (
              <div className="card-body">
                <MDBDataTable striped bordered small data={data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
   );
   }
   
   export default DatatablePage;
   
