import React from 'react'
import Navbar from './Navbar'
const AddEmp = () => {
    return (
        <div>
            <Navbar/>
            <br/>
            <div className="container">       
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
            <div class="card text-black ">
            <div class="card-body p-md-5 " >
            <h1 className="text-center" >Employee Form</h1>       
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">NAME</label>
                <input type="text" className="form-control" placeholder='Enter employee Name' required/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">DESIGNATION</label>
                <input type="text" className="form-control" placeholder='Enter Employee Designation' required />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">LOCATION</label>
                <input type="text" className="form-control" placeholder='Enter Employee location' required />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">SALARY</label>
                <input type="text" className="form-control" placeholder='Enter Employee Salary' required/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center ">
                    <button type="button" class="btn btn-success">Submit</button>                  
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center ">
                    <a href='/'>Back to Home Page</a>       
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        
      </div>

        </div>
    )
}

export default AddEmp