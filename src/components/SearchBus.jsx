import axios from 'axios'
import React, { useState } from 'react'
import NavPage from './NavPage'

const SearchBus = () => {
    const[bus,setBus]=useState(
        {
            "busname":""
        }
    )
    const [result,setResult]=useState([])

    // delete operation
const  deleteCourse=(id)=>{
    let input={"_id": id}
    axios.post("",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfull")
            } else {
                alert(Error)
            }
        }
    ).catch().finally()
}

    // input operation
    const  inputHandler=(event)=>{
        setBus({...bus,[event.target.name]:event.target.value})
    }


    //  read operation
    const readValue=()=>{
        console.log(bus)
       axios.post("",bus).then(
            (response)=>{
                console.log(response.data)
                setResult(response.data)
            }
        ).catch().finally()
    }
    return (
        <div>
            <NavPage/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">BUS NAME</label>
                        <input type="text" className="form-control" name='busname' value={bus.busname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                    </div>
                </div>


                {/* table copy paste here */}
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">BUS NAME</th>
                                    <th scope="col">ROUTE</th>
                                    <th scope="col">BUS NO</th>
                                    <th scope="col">DRIVER NAME</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.busname}</th>
                                                <td>{value.route}</td>
                                                <td>{value.busno}</td>
                                                <td>{value.drivername}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>DELETE</button></td>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBus