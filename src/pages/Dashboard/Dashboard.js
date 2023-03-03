import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <div className="content">
          <div className="center-div">
            <ul className="all-link">
              <li className="main">
                <Link to="#" className="active">
                  Ouly
                </Link>
              </li>
              <li>
                <Link to="#">Plagify</Link>
              </li>
              <li>
                <Link to="#">My Product</Link>
              </li>
            </ul>

            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 box1">
                    <div className="row">
                      <div className="col-md-1 search">
                        <Link to="#">
                          <i className="fa fa-search"></i>
                        </Link>
                      </div>

                      <div className="col-md-9 searchtype">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="search"
                          required
                        />
                      </div>

                      <div className="col-md-1 link">
                        <Link to="#">
                          <i className="fa fa-link"></i>
                        </Link>
                      </div>

                      <div className="col-md-1 cam">
                        <Link to="#">
                          <i className="fa fa-camera"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 box2">
                    <Link to="#">
                      <i className="fa fa-filter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
