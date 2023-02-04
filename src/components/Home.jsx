import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

const Home = () => {
    var [empData, setData] = useState([])
    var [isLoading, setLoad] = useState(true)
    useEffect(
        () => {
            fetchDataFromApi();
        }, []
    )
    const fetchDataFromApi = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(
                (response) => {
                    console.log(response.data)
                    setData(response.data)
                    setLoad(false)
                }
            )
            .catch(
                (error) => {
                    alert("Something Went Wrong" + error)
                }
            )
    }

    return (
        <div>
            <Navbar />
            <br/>
            {isLoading == true ? (<LoadingScreen />) : (
                <div classname="container p-md-5">
                    <div classname="row">
                        <div classname="col">
                            <div classname="row g-3">
                                <div classname="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <center>
                                        <h3><b>EMPLOYEE DETAILS</b></h3><br/>
                                    <table class="table table-striped table-hover card-body" border={2} cellSpacing="6px" cellPadding={10}>
                                        <thead>
                                            <tr class="table-secondary">
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {empData.map((data) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{data.id}</th>
                                                        <td>{data.name}</td>
                                                        <td>{data.email}</td>
                                                        <td>
                                                            <button className="btn btn-primary">Edit</button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-danger">Delete</button>
                                                        </td>

                                                    </tr>
                                                )
                                            })}

                                        </tbody>

                                    </table>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}
export default Home