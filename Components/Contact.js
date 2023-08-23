import React, { useState } from "react";
import Navbar from "./Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState("");
  const handleSubmit = () => {
    if (!email || !name || !description) {
      setShowError("All fields are required");
    }
  };
  return (
    <>
    <Navbar/>
    <div
      className="container-fluid pb-5"
      style={{
        backgroundColor: "blue",
        color: "#fff",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1 className="p-5">Contact</h1>
      <div className="container">
        <div>
          <label>Name</label>
          <input
            className="form-control"
            style={{ width: "50%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-4">Email</label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="mt-4">Email</label>
          <textarea
            type="email"
            className="form-control"
            style={{ width: "50%", height: "150px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {showError ? showError : null}
        <br />
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
    </>
  );
};

export default Contact;
