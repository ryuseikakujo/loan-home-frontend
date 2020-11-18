import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="Navigator">
      <nav>
        <h2>Home bank</h2>
        <ul className="nvlink">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/batchProcessing">
            <li>Batch Processing</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
