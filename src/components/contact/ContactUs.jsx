// MyForm.js

import React, { useState } from "react";
import './contact.css'

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact-heading">
            <h2>
              GET IN TOUCH
              <span> WITH US</span>
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
            <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
            </div>
            <div className="col-sm-6">
            <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
            </div>
            <div className="col-sm-6">
            <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          placeholder="Number"
        />
            </div>
            <div className="col-sm-6">
            <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
            </div>
            <div className="col-sm-12">
            <textarea name="" id="" cols="30" rows="5" placeholder="Enter your text"> </textarea>
            <button type="submit" className="contact-btn">Submit</button>
            </div>
          </div>
          </form>
        </div>
      </section>  
    </>
  );
};

export default MyForm;
