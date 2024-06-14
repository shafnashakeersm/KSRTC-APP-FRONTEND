import axios from 'axios'
import React, { useState } from 'react'
import NavPage from './NavPage'

const AddBus = () => {
    const[bus,setBus]=useState(
        {
            "busname":"",
            "route":"",
            "busno":"",
            "drivername":""
        }
    )
    const inputHandler=(event)=>{
        setBus({...bus,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(bus)
        axios.post("",bus).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfull")
                } else {
                    alert("Error")
                }
            }
        )
    }
  return (
    <div>
        <NavPage/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">BUS NAME</label>
                            <input type="text" className="form-control" name='busname' value={bus.busname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">BUS ROUTE</label>
                        <input type="text" className="form-control" name='route' value={bus.route} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">BUS NO</label>
                        <input type="text" className="form-control" name='busno' value={bus.busno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DRIVER NAME</label>
                        <input type="text" className="form-control"  name='drivername' value={bus.drivername} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBus