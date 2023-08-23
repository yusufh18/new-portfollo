import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <>
    <Navbar/>
    <div
      style={{
        backgroundColor: "blue",
        color: "#fff",
        width: "100%",
        height: "100vh",
      }}
      className="container-fluid"
    >
      <div className="container">
        <h1 className="p-5">Resume</h1>

        <h2>Front end proficiency</h2>
        <ul>
          <li>html </li>
          <li>css </li>
          <li>javascript </li>
          <li>react </li>
          <li>nextjs </li>
        </ul>

        <h2>Backend end proficiency</h2>
        <ul>
          <li>Nodejs </li>
          <li>Graph ql </li>
          <li>My sql</li>
          <li>mongo db </li>
          <li>php </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <AiFillGithub style={{ width: "45px", height: "45px" }} />
        <AiFillLinkedin style={{ width: "45px", height: "45px" }} />
        <BsStackOverflow style={{ width: "45px", height: "45px" }} />
      </div>
    </div>
    </>
  );
};

export default Resume;
