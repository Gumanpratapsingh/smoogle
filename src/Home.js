import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerleft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          {/*Link */}
        </div>
        <div className="home_headerright">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />

          <PersonSharpIcon />
        </div>
      </div>
      
      <div className="home_body">
        <img src="https://drive.google.com/uc?export=download&id=1KQnMX8ag3gnpJZX2vKwCvRYssS40p7mX" />
        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
