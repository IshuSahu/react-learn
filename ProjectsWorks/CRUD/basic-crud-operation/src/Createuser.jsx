import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Createuser() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [isValidAge, setIsValidAge] = useState(true);

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      }) // as we get the sucessfull data we will redirect to the home page for that we use navigate
      .catch((err) => console.log(err));
  };

  // mail validation
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    // A simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue)); // Check if the email is valid
  };
  const handleAgeChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      // Allows only whole numbers (0-9) and empty value for deletion
      setAge(value);
      setIsValidAge(
        value === "" || (parseInt(value, 10) > 0 && parseInt(value, 10) <= 120)
      );
      // Ensures the age is within a reasonable range (1-120)
    }
  };
  return (
    <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className=" w-50 bg-white rounded p-3 text-start">
        <form action="" onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="" className=" align-text-start">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Mail"
              className="form-control"
              onChange={handleEmailChange}
              style={{ borderColor: isValidEmail ? "" : "red" }} // Conditionally change border color
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age" className="align-text-start">
              Age
            </label>
            <input
              type="text"
              id="age"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={handleAgeChange}
              style={{ borderColor: isValidAge ? "" : "red" }} // Red border if invalid
            />
            {!isValidAge && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Please enter a valid age (1-120).
              </p>
            )}
          </div>
          <button type="submit" className=" btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Createuser;
