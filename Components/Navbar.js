import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5" style={{backgroundImage:"url(https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTI3MzEyMTF8MA&ixlib=rb-4.0.3)"}}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 style={{color:"#fff"}}>Yusuf haji</h1>
        </div>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ width: "900px" }}
        >
          <Link to="/" style={{color:"#fff"}}>About me </Link>
          <Link to="/portfolio" style={{color:"#fff"}}>Portfolio </Link>
          <Link to="/contact" style={{color:"#fff"}}>Contact</Link>
          <Link to="/resume" style={{color:"#fff"}}>Resume </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
