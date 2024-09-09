import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function Createuser() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => {
        console.log(result)
        navigate('/')
      }) // as we get the sucessfull data we will redirect to the home page for that we use navigate
      .catch((err) => console.log(err));
  };
  return (
    <div className=" d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className=" w-50 bg-white rounded p-3 text-start">
        <form action="" onSubmit={Submit}>
          <h2>Add Users</h2>
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
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
