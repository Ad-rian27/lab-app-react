import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar';

const ViewEntry = () => {
    const [fdata, changeData] = useState([]);

    const fetchData = () => {
        axios
            .get("http://localhost:3000/view-entry")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching entries:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
<NavigationBar />
      <div className="container mt-5">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle text-center">
              <thead className="table-info">
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Semester</th>
                  <th>Course</th>
                  <th>System Number</th>
                  <th>Login TIme</th>
                  <th>Logout Time</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {fdata.map((value, index) => (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.dept}</td>
                    <td>{value.sem}</td>
                    <td>{value.course}</td>
                    <td>{value.systemNumber}</td>
                    <td>{value.loginTime}</td>
                    <td>{value.logoutTime}</td>
                    <td>{value.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


        </div>
    )
}

export default ViewEntry