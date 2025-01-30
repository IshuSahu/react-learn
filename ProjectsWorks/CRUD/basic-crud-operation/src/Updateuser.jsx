import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Updateuser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [isValidAge, setIsValidAge] = useState(true);

  const [email, setEmail] = useState();
  const navigate = useNavigate();

  //when the the page load useEfffect will get the data of that params id and placeholder into there places
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/${id}`)
      .then((result) => {
        console.log(result);

        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, [id]);
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
  const handleUpdate = (e) => {
    e.preventDefault();
    // Add logic to update user data
    axios
      .put("http://localhost:3001/updateUser/" + id, { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      }) // as we get the sucessfull data we will redirect to the home page for that we use navigate
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 text-start">
        <form onSubmit={handleUpdate}>
          <h2>User update page</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Mail"
              className="form-control"
              value={email}
              onChange={handleAgeChange}
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
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Updateuser;
