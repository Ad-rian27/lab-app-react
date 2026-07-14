import axios from 'axios';
import React, { useState } from 'react'
import NavigationBar from './NavigationBar';

const AddEntry = () => {
    const [input, changeInput] = useState({

        "name": "",
        "dept": "",
        "sem": "",
        "course": "",
        "systemNumber": "",
        "loginTime": "",
        "logoutTime": "",
        "date": ""

    })

    const [error, setError] = useState("");

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-entry", input).then(

            (response) => {
                console.log(response.data)
                alert("Lab Entry added successfully")
            }

        ).catch(
            (error) => (
                console.error("Error Adding Entry", error)
            )
        )
    }
    return (

        <div>
            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" onChange={inputHandler} name='name' value={input.name} pattern="[A-Za-z]{2}-\d{2}-[A-Za-z]{2}-\d{4}" required />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Department</label>
                                <input type="text" name='dept' value={input.dept} onChange={inputHandler} className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Semester</label>
                                <input type="number" name='sem' value={input.sem} onChange={inputHandler} className="form-control" required />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" name='course' value={input.course} onChange={inputHandler} className="form-control" required />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">System Number</label>
                                <input type="text" name='systemNumber' value={input.systemNumber} onChange={inputHandler} className="form-control" required />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Login Time</label>
                                <input type="time" name='loginTime' value={input.loginTime} onChange={inputHandler} className="form-control" required />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Logout Time</label>
                                <input type="time" name='logoutTime' value={input.logoutTime} onChange={inputHandler} className="form-control" required />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date</label>
                                <input type="date" name='date' value={input.date} onChange={inputHandler} className="form-control" required />
                            </div>
                        
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default AddEntry