


import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import api from './BaseURL';
const Cards = () => {
    var PMbaseURL = api.defaults.PMbaseURL;
    // alert("===="+PMbaseURL)
    const [data, setData] = useState(null)
    useEffect(() => {
              const fetchData = async () => {
                const win =window.sessionStorage;
                const value = win.getItem('username');
                var url = PMbaseURL+"getAlltestingstatuscount?emp_code="+value;
                // alert("========="+url)
                const response = await fetch(url)
               
                // const response = await fetch('https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getAlltestingstatuscount?emp_code='+value)
                const jsonData = await response.json();
               // alert(jsonData[0].inprogresscount)
                //var jsondata1 = jsonData[0];
               //if(jsonData.length > 0)
               //{
                // alert("-------------"+JSON.stringify(jsonData[0]))
                // alert("in if---------")
                setData(jsonData[0])
               //}
              }
              fetchData()
            }, [])
          
            if (!data) {
              return <div>Loading...</div>
            }
            
 
  return (
    <>
     
       <div className="row">
            {/* <div className="col-sm-3">
                <div className="card" style={{ boxShadow: '1px 2px 9px #F4AAB9'}}>
                <div className="card-body">
                    <div class="inner" >
                        <h3>0</h3>
                        <p>Total Task</p>
                    </div>
                </div>
                </div>
            </div> */}
            {/* <div className="col-sm-3">
                <div className="card" style={{ boxShadow: '1px 2px 9px #F4AAB9'}}>
                <div className="card-body">
                    <div class="inner" >
                        <h3><Link to="" style={{color:'black',textDecoration:'none'}}>{data.totalcount}</Link></h3>
                        <p>Total Task</p>
                    </div>
                </div>
                </div>
            </div> */}
            <div className="col-sm-3">
                <div className="card" style={{ boxShadow: '1px 2px 9px #F4AAB9'}}>
                <div className="card-body">
                    <div class="inner" >
                        <h3><Link to="/manual_testing" style={{color:'black',textDecoration:'none'}}>{data.viewtaskcount}</Link></h3>
                        <p>View Task</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card" style={{ boxShadow: '1px 2px 9px #F4AAB9'}}>
                <div className="card-body">
                    <div class="inner" >
                        <h3><Link to="/manualtestinghistory" style={{color:'black',textDecoration:'none'}}>{data.managetaskcount}</Link></h3>
                        <p>Manage Task</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
  
    </>
  )
}

export default Cards
