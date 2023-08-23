import React from "react";
import Navbar from "./Navbar";

const Portfolio = () => {
  return (
    <>
    <Navbar/>
    <div
      className="container-fluid pb-5"
      style={{
        backgroundColor: "blue",
        color: "#fff",
        width: "100%",
        height: "100%",
      }}
    >
        <h1 className="p-5">Portfolio</h1>
        <div className="d-flex justify-content-center">
            <img className="m-2" width={500} height={300} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ukGUoooS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zwu6ropxidlaybuzw2k4.png" alt="project one"/>
            <img className="m-2"  width={500} height={300} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ukGUoooS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zwu6ropxidlaybuzw2k4.png" alt="project two"/>
        </div>
        <div className="d-flex justify-content-center">
            <img className="m-2" width={500} height={300} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ukGUoooS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zwu6ropxidlaybuzw2k4.png" alt="project one"/>
            <img className="m-2"  width={500} height={300} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ukGUoooS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zwu6ropxidlaybuzw2k4.png" alt="project two"/>
        </div>
        <div className="d-flex justify-content-center">
            <img className="m-2" width={500} height={300} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ukGUoooS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zwu6ropxidlaybuzw2k4.png" alt="project one"/>
            <img className="m-2"  width={500} height={300} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ukGUoooS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zwu6ropxidlaybuzw2k4.png" alt="project two"/>
        </div>
    </div>
    </>
  );
};

export default Portfolio;
