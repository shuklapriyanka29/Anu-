import './ReportTemplate.css'
const ReportTemplate = () => {

	return (
		<>
			  <div className="certificate-container">
    <div className="certificate">
        <div className="water-mark-overlay"></div>
        <div className="certificate-body">
            <div className="certificate-header">
                <img src="./download.jpg" className="logo" alt="" />  <img src="./qpot.jpeg" className="" alt="" />
            </div> 
            <div className="certificate-header"  style={{float:"left"}}>
                Certificate No.:-Attendance Mgmt_V1.0	
             </div>
             <div className="certificate-header" style={{float:"right"}}>
                 Date: 5/05/2022                                                                                          
             </div>
            <p className="certificate-title"><strong></strong></p>
            <br/><br/>
            <h1>Certificate of clearance</h1>
                        <div className="certificate-content">
                            <p className="student-name">Rinal Girase</p>
                <div className="about-certificate">
                    <p>
                        It is to certify that following module have been successfully tested by Sampada Pokale. We are giving our clearance for deployment of the same as follows:
                </p>
                </div>
                <p className="topic-title">
                    Testing on Attendance Management module (Enhancement factor- Changes of UI for Attendance Time Settings as per Mindsconnect standers) 
                </p>
                
            </div>
            <div className="certificate-footer text-muted">
                <div className="row">
                   
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    Tested by,
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p>
                                   Sampada Pokale
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</div>
      
		</>
	);
};

export default ReportTemplate;
