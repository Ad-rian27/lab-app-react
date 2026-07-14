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
                                <select name="dept" id="" className="form-control" value={input.dept} onChange={inputHandler}>
                                    <option value="">Select an Option</option>
                                    <option value="BTech">BTech</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="MSc">MSc</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Semester</label>
                                <select name="sem" id="" className="form-control" value={input.sem} onChange={inputHandler}>
                                    <option value="">Select an Option</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course</label>
                                <select name="course" id="" className="form-control" value={input.course} onChange={inputHandler}>
                                    <option value="">Select an Option</option>
                                    <option value="ADBMS">ADBMS</option>
                                    <option value="DS">DS</option>
                                    <option value="Web">Web</option>
    
                                </select>
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