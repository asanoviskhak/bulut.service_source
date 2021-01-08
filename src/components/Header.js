import React, { useState } from 'react'
import { NavLink, useHistory} from 'react-router-dom';
export default function Header () {
        var [state, changeState] = useState("false");
        const history = useHistory();
        function navigateTo(path){
          if (history.length!==0 && history.location===path) history.goBack()
          else history.push(path);
          handleIcon();
        }
        function handleIcon(){
          var el = document.querySelector("#close");
          var el2 = document.querySelector("#navbarSupportedContent");
          if (el.getAttribute("aria-expanded")==="true"){
            changeState("false");
            el.setAttribute('aria-expanded', "false");
            el2.classList.remove("show");
          }
          else if(el.getAttribute("aria-expanded")==="false"){
            changeState("true");
            el.setAttribute("aria-expanded", "true");
            el2.classList.add("show");
          }
        }
        return (
          <>
            <div className="navigation-wrap cbp-af-header header-transparent">
              <div className="padding-on-scroll">
                <div className="section full-width-mega-menu px-2">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <nav className="navbar navbar-expand-xl navbar-light">
                          <NavLink
                            className="navbar-brand animsition-link"
                            to="/"
                            exact
                            onClick={() => {
                              navigateTo("/");
                            }}
                          >
                            <img src={"img/logo.png"} alt="logo" />
                          </NavLink>
                          <button
                            className="navbar-toggler"
                            type="button"
                            id="close"
                            aria-label="Toggle navigation"
                            aria-expanded="false"
                            onClick={handleIcon}
                          >
                            <span className="navbar-toggler-icon" />
                          </button>
                          <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                          >
                            <ul className="navbar-nav ml-auto pt-4 pt-xl-0 mr-xl-4">
                              <li className="nav-item">
                                <NavLink
                                  id="home"
                                  className="nav-link"
                                  onClick={() => {
                                    navigateTo("/")
                                  }}
                                  to="/"
                                >
                                  Home
                                </NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink
                                  className="nav-link"
                                  onClick={() => {
                                    navigateTo("/about");
                                  }}
                                  to="/about"
                                  exact
                                >
                                  About us
                                </NavLink>
                              </li>
                              {/* <li className="nav-item">
                                <NavLink
                                  className="nav-link"
                                  onClick={() => {
                                    navigateTo("/works");
                                  }}
                                  to="/works"
                                  exact
                                >
                                  Portfolio
                                </NavLink>
                              </li> */}
                              <li className="nav-item">
                                <NavLink
                                  className="nav-link"
                                  to="/contact"
                                  onClick={() => {
                                    navigateTo("/contact");
                                  }}
                                  exact
                                >
                                  Contact us
                                </NavLink>
                              </li>
                            </ul>
                            <a
                              href="/"
                              className="btn btn-icon-transparent btn-44 mt-4 mt-xl-0"
                              data-toggle="modal"
                              data-target="#modalSearch"
                            >
                              <i className="uil uil-search size-20" />
                            </a>
                            <div className="pb-3 pb-xl-0" />
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade modal-search"
              id="modalSearch"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="modalSearch"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body z-bigger d-flex justify-content-center align-items-center">
                    <div className="container-fluid">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="uil uil-multiply" />
                      </button>
                      <div className="row justify-content-center">
                        <div className="col-lg-8">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-style search"
                              placeholder="Search..."
                              autoComplete="off"
                            />
                          </div>
                          <p className="mb-0 mt-4 text-center color-gray-dark font-weight-500">
                            Start typing &amp; press "Enter" or "ESC" to close
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }

