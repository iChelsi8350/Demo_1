import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const [file, setFile] = useState(null);

  const fileTypes = ["JPG", "PNG", "JPEG"];

  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <>
      <Sidebar />
      <section id="content">
        <Header />
        <div className="content">
          <div className="center-div">
            <ul className="all-link">
              <li className="main">
                <Link to="" className="active">
                  Ouly
                </Link>
              </li>
              <li>
                <Link>Plagify</Link>
              </li>
              <li>
                <Link>My Product</Link>
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
                        <Link
                          to="#"
                          onClick={() => {
                            setShowFileUploadModal(true);
                            setShowFilterModal(false);
                          }}
                        >
                          <i className="fa fa-camera"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 box2">
                    <Link
                      to="#"
                      onClick={() => {
                        setShowFilterModal(true);
                        setShowFileUploadModal(false);
                      }}
                    >
                      <i className="fa fa-filter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={showFilterModal === true ? "" : "d-none"}>
          <div className="phoneswrapper">
            <div className="phone">
              <div className="phone_head">
                <div className="title">Filter</div>
                <div className="icon_bubble msg">
                  <Link to="#" onClick={() => setShowFilterModal(false)}>
                    <i className="fa fa-close"></i>
                  </Link>
                </div>
              </div>
              <div className="divider"></div>
              <div className="phone_body">
                <form>
                  <div className="form-check form-check-inline col-md-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      2D Product
                    </label>
                  </div>
                  <div className="form-check form-check-inline col-md-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                    >
                      3D Product
                    </label>
                  </div>
                  <div className="form-check form-check-inline col-md-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox3"
                    >
                      With Icon
                    </label>
                  </div>

                  <h6 className="mt-3">Color</h6>

                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-1">
                            <input
                              type="color"
                              className="form-control color"
                            />
                          </div>

                          <div className="col-md-1">
                            <div className="boxes"></div>
                          </div>

                          <div className="col-md-1">
                            <div className="boxes1"></div>
                          </div>
                          <div className="col-md-1">
                            <div className="boxes2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="formGroupExampleInput"> Language </label>
                    <select
                      className="form-select form-select-md"
                      aria-label=".form-select-sm example"
                    >
                      <option>Choose a language</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="row form-group mt-3">
                    <div className="col-md-6">
                      <label className="form-label"> Type of Product</label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-sm example"
                      >
                        <option>Physical</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Number of Section</label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-sm example"
                      >
                        <option>8</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="d-grid gap-2">
                        <button className="btn btn-outline-dark" type="button">
                          Cancle
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button">
                          Apply Filter
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={showFileUploadModal === true ? "" : "d-none"}>
          <div className="container1">
            <div className="card1">
              <div className="phone_head">
                <h3>Upload images</h3>
                <div className="icon_bubble msg">
                  <Link to="#" onClick={() => setShowFileUploadModal(false)}>
                    <i className="fa fa-close"></i>
                  </Link>
                </div>
              </div>

              <div className="drop_box">
                <input
                  type="file"
                  hidden
                  accept=".doc,.docx,.pdf"
                  id="fileID"
                />

                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
