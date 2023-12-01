import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Modaform from './Modaform';
import Projectform from './Projectform';

const DatatablePage = () => {
  
  const data = {
    columns: [
      {
        label: 'Project Id',
        field: 'projectid',
        sort: 'asc',
        width: 160
      },
      {
        label: 'Project Type',
        field: 'projecttype',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Project Name',
        field: 'projectname',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Planned Start Date',
        field: 'plannedstartdate',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Planned End Date',
        field: 'plannedenddate',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Bat File Name',
        field: 'batfilename',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Bat File Path',
        field: 'batfilepath',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        projectid: '111',
        projecttype: 'POC',
        projectname: 'CRM',
        plannedstartdate: '14-Apr-2023',
        plannedenddate: '24-Apr-2023',
        batfilename: 'CRM.bat',
        batfilepath:'../crm.bat'
      },
      {
        projectid: '112',
        projecttype: 'POC',
        projectname: 'Whats App policy',
        plannedstartdate: '11-Feb-2023',
        plannedenddate: '24-Feb-2023',
        batfilename: 'WHAT.bat',
        batfilepath:'../what.bat'
      },
      {
        projectid: '113',
        projecttype: 'R and D',
        projectname: 'Nova Deployment',
        plannedstartdate: '18-Apr-2023',
        plannedenddate: '20-Apr-2023',
        batfilename: 'nova.bat',
        batfilepath:'../nova.bat'
      },
      {
        projectid: '114',
        projecttype: 'POC',
        projectname: 'Insurance Policy',
        plannedstartdate: '14-Apr-2023',
        plannedenddate: '24-Apr-2023',
        batfilename: 'INSURANCE.bat',
        batfilepath:'../insurance.bat'
      },
      {
        projectid: '115',
        projecttype: 'Training',
        projectname: 'Trainee Evolution',
        plannedstartdate: '1-Apr-2023',
        plannedenddate: '10-Apr-2023',
        batfilename: 'TRAINEE.bat',
        batfilepath:'../trainee.bat'
      },
      {
        projectid: '116',
        projecttype: 'Training',
        projectname: 'New JOINING MODULE',
        plannedstartdate: '10-Apr-2023',
        plannedenddate: '15-Apr-2023',
        batfilename: 'NEW_JOINbat',
        batfilepath:'../newjoin.bat'
      },
      {
        projectid: '117',
        projecttype: 'POC',
        projectname: 'CRM',
        plannedstartdate: '14-Apr-2023',
        plannedenddate: '24-Apr-2023',
        batfilename: 'CRM.bat',
        batfilepath:'../crm.bat'
      },
      {
        projectid: '118',
        projecttype: 'Development',
        projectname: 'PM',
        plannedstartdate: '14-Apr-2023',
        plannedenddate: '24-Apr-2023',
        batfilename: 'PM.bat',
        batfilepath:'../pm.bat'
      },
      {
        projectid: '119',
        projecttype: 'POC',
        projectname: 'Data Analysis',
        plannedstartdate: '17-Jan-2023',
        plannedenddate: '21-Jan-2023',
        batfilename: 'DATA_ANALYSIS.bat',
        batfilepath:'../data_analysis.bat'
      },
      {
        projectid: '120',
        projecttype: 'Production Implementation',
        projectname: 'HR',
        plannedstartdate: '11-Jan-2023',
        plannedenddate: '15-Jan-2023',
        batfilename: 'HR.bat',
        batfilepath:'../hr.bat'
      },
      {
        projectid: '121',
        projecttype: 'POC',
        projectname: 'BSAT',
        plannedstartdate: '14-Feb-2023',
        plannedenddate: '24-Feb-2023',
        batfilename: 'BSAT.bat',
        batfilepath:'../bsat.bat'
      },
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
                <h5 style={{fontWeight:''}}>Projects:</h5>
                </div>
                                <div className='col-sm-2'>
                 <Projectform />
                 </div>
              </div>
              
            </div>
            <div className="card-body">
             <MDBDataTable
       striped
       bordered
       small
     data={data}
     /> 
              </div>
          </div>
          </div>
          </div>
          </div>
  );
}

export default DatatablePage;