import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Portfolio extends Component {
    render() {
        return (
          <div className="section over-hide padding-top-bottom-120">
            <div className="section-1400 mb-5 pb-lg-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12  align-self-center pb-3">
                    <div className="row">
                      <div className="col-auto align-self-center">
                        <h6 className="color-gray-dark text-vertical text-uppercase mx-0 px-0">
                          projects
                        </h6>
                      </div>
                      <div className="col">
                        <h3 className="display-6 mb-0">
                          Our latest
                          <br />
                          <span className="font-weight-600">
                            works<span className="color-primary">.</span>
                          </span>
                        </h3>
                      </div>
                      <div className="col-lg-4 text-lg-right mt-5 mt-lg-0 align-self-center">
                        {/* <NavLink
                          to="/works"
                          className="btn btn-brand-gradient animsition-link"
                        >
                          All works
                          <i className="uil uil-arrow-right size-22 ml-3" />
                        </NavLink> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <h2 className="display-1 mb-0">
              <span className="ml-5 color-light-2">Cases coming soon...</span>
            </h2> */}
            <div className="section-1400">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 img-slice-wrap mb-5 over-hide">
                    <div className="section over-hide border-4">
                      <a
                        href="#"
                        className="hover-target animsition-link hover-portfolio-box"
                      >
                        <div
                          className="scroll-img"
                          style={{ backgroundImage:"url(img/projects/ask-proj.png)" }}
                        />
                        <p>web development</p>
                        <h5>Ask (Case is coming)</h5>
                      </a>
                    </div>
                    
                  </div>
                  <div className="section clearfix" />
                  <div className="offset-md-3 col-md-6 img-slice-wrap mb-5 over-hide">
                    <div className="section over-hide border-4">
                      <a
                        href="#"
                        className="hover-target animsition-link hover-portfolio-box"
                      >
                        <div
                          className="scroll-img"
                          style={{ backgroundImage: "url(img/projects/kelkel-proj.png)" }}
                        />
                        <p>branding</p>
                        <h5>Kelkel (Case is coming)</h5>
                      </a>
                    </div>
                  </div>
                  <div className="section clearfix" />
                  <div className="offset-md-6 col-md-6 img-slice-wrap mb-5 over-hide">
                    <div className="section over-hide border-4">
                      <a
                        href="#"
                        className="hover-target animsition-link hover-portfolio-box"
                      >
                        <div
                          className="scroll-img"
                          style={{ backgroundImage: "url(img/projects/shafer-proj.png)" }}
                        />
                        <p>branding</p>
                        <h5>Shafer (Case is coming)</h5>
                      </a>
                    </div>
                  </div>
                  <div className="section clearfix" />
                  <div className="offset-md-3 col-md-6 img-slice-wrap mb-5 over-hide">
                    <div className="section over-hide border-4">
                      <a
                        href="#"
                        className="hover-target animsition-link hover-portfolio-box"
                      >
                        <div
                          className="scroll-img"
                          style={{ backgroundImage: "url(img/projects/kettik-proj.png)" }}
                        />
                        <p>ui/ux</p>
                        <h5>Kettik (Case is coming)</h5>
                      </a>
                    </div>
                  </div>
                  <div className="section clearfix" />
                  <div className="col-md-6 img-slice-wrap mb-5 over-hide">
                    <div className="section over-hide border-4">
                      <a
                        href="#"
                        className="hover-target animsition-link hover-portfolio-box"
                      >
                        <div
                          className="scroll-img"
                          style={{ backgroundImage: "url(img/projects/transfer-proj.png)" }}
                        />
                        <p>branding</p>
                        <h5>TransferBy (Case is coming)</h5>
                      </a>
                    </div>
                  </div>      
                  <div className="section clearfix" />
                  
                </div>
              </div>
            </div>
          </div>
        );
    }
}
