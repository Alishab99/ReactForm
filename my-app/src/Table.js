import React from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css"
const Table = () => {
    // Retrieve submitted data from local storage
    const submittedData = JSON.parse(localStorage.getItem("submittedData")) || [];
    const navigate = useNavigate();
    return (
        <div className="table-container">
            <h2>User Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address line1</th>
                        <th>Address line2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{data.phoneNumber}</td>
                            <td>{data.address1}</td>
                            <td>{data.address2}</td>
                            <td>{data.city}</td>
                            <td>{data.state}</td>
                            <td>{data.country}</td>
                            <td>{data.pincode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate(-1)}>Go To Form</button>
        </div>
    );
};

export default Table;
