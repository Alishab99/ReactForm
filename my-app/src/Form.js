import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from './Validation';
import "./Form.css";

const Form = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    });

    const [errors, setErrors] = useState({})
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors(validation(formData))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save the form data to local storage or backend (For simplicity, using local storage)
        const submittedData = JSON.parse(localStorage.getItem("submittedData")) || [];
        submittedData.push(formData);
        localStorage.setItem("submittedData", JSON.stringify(submittedData));

        // Clear the form data
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
        });
    };

    return (
        <div className="form-container">
            <h2>User Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                    <br />
                </div>
                <div className="form-group">
                    <label> Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                    <br />
                </div>
                <div className="form-group">
                    <label> Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                    <br />
                </div>
                <div className="form-group">
                    <label>  Phone Number:  </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                    <br />
                </div>
                <div className="form-group">
                    <label> Address line 1: </label>
                    <input
                        type="text"
                        name="address1"
                        value={formData.address1}
                        onChange={handleInputChange}
                    />
                    {errors.address1 && <p>{errors.address1}</p>}
                    <br />
                </div>
                <div className="form-group">
                    <label> Address line 2:</label>
                    <input
                        type="text"
                        name="address2"
                        value={formData.address2}
                        onChange={handleInputChange}
                    />
                    {errors.address2 && <p>{errors.address2}</p>}
                    <br />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                    {errors.city && <p>{errors.city}</p>}
                    <br />
                </div>
                <div className="form-group">
                    <label>State </label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                    />
                    {errors.state && <p>{errors.state}</p>}
                    <br /></div>
                <div className="form-group">
                    <label> Country </label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                    />
                    {errors.country && <p>{errors.country}</p>}
                    <br /></div>
                <div className="form-group">
                    <label>  Pincode: </label>
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                    />
                    {errors.pincode && <p>{errors.pincode}</p>}
                    <br />
                </div>
                <button type="submit" onClick={() => navigate(1)}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
