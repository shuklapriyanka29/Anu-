import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Modaform from './Modaform';
import UserForm from './UserForm';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateTask from './CreateTask';
const DatatablePage = () => {
  function callapi(){
    alert("call Api");
  }
  const data = {
    columns: [
      {
        label: 'Project Id',
        field: 'projectid',
        sort: 'asc',
        width: 160
      },
      {
        label: 'Project Name',
        field: 'projectname',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Allocation Start Date',
        field: 'allocationstartdate',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Allocation End Date',
        field: 'allocationenddate',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Project Assigned By',
        field: 'projectassignedto',
        sort: 'asc',
        width: 150,  textAlign: 'center'
      },
      {
        label: 'Project Assigned To',
        field: 'projectassignedby',
        sort: 'asc',
        width: 150,  textAlign: 'center'
      }
    ],
    rows: [
      {
        projectid: 'Project121',
        projectname: 'BAS',
        allocationstartdate: '25-Feb-2023',
        allocationenddate:'25-Mar-2023',
        projectassignedto:   'Sanil Shinde',
        projectassignedby:   'Nilesh Kangane'
      
      },
      {
        projectid: 'Project121',
        projectname: 'HR',
        allocationstartdate: '21-Jan-2023',
        allocationenddate:'25-Feb-2023',
        projectassignedto:   'Priyanka Shukla',
        projectassignedby:   'Nilesh Kangane'
      },
      {
        projectid: 'Project121',
        projectname: 'BSAT',
        allocationstartdate: '1-March-2023',
        allocationenddate:'25-Mar-2023',
        projectassignedto:'Sampada Pokale',
        projectassignedby:'Pramod Shraganvi'
      }
      
    ]
  };
  return (
    <div className="container-fluid my-4"  >
      <div className="row">
        <div className="col-12">
          <div className="card my-4" style={{ boxShadow: '1px 2px 9px #F4AAB9'}}>
            <div className="card-header">
              <div className='row'>
                <div className='col-sm-10'>
                <h5 style={{fontWeight:''}}>Task:</h5>
                </div>
                 <div className='col-sm-2'>
                 <CreateTask />
                 </div>
              </div>
            </div>
            <div className="card-body">
             <MDBDataTable striped bordered small data={data}/> 
            </div>
          </div>
          </div>
          </div>
          </div>
  );
}

export default DatatablePage;