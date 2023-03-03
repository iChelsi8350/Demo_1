import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <div className="white-label">Ouly AI</div>
      <div id="sidebar-nav">
        <ul>
          <li className="active">
            <Link to="#">
              <i className="fa fa-th-large"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-desktop"></i> Product{" "}
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-usd"></i> Support
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-pencil"></i> Edit
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-sign-out"></i> Logout{" "}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
