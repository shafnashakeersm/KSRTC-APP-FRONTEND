import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavPage from './NavPage'

const ViewAll = () => {
    const[bus,changeBus]=useState([])
    const fetchData=()=>{
        axios.get("").then(
            (Response)=>{
                changeBus(Response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavPage/>
            <div className="container">
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
                                    bus.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.busname}</th>
                                                <td>{value.route}</td>
                                                <td>{value.busno}</td>
                                                <td>{value.drivername}</td>
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

export default ViewAll