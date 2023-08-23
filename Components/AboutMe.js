import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import Navbar from "./Navbar";

const AboutMe = () => {
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
      <h1 className="p-5">About me</h1>
      <BiSolidUserCircle
        style={{ width: "100px", height: "100px" }}
        className="mx-5"
      />
      <div className="ml-5">
        <p>
          lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
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

export default AboutMe;
