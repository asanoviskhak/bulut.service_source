import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class Process extends Component {
    render() {
        return (
          <div className="section over-hide padding-top-bottom-120 bg-light-3">
            <div className="section-1400">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 align-self-center mb-5 pb-4">
                    <div className="row">
                      <div className="col-auto align-self-center">
                        <h6 className="color-gray-dark text-vertical text-uppercase mx-0 px-0">
                          what we do
                        </h6>
                      </div>
                      <div className="col">
                        <h3 className="display-6 font-weight-600 mb-0">
                          We are
                          <br />
                          <span className="display-6">
                            full package<span className="color-primary">.</span>
                          </span>
                        </h3>
                      </div>
                      <div className="col-lg-4 text-lg-right mt-5 mt-lg-0 align-self-center">
                        <NavLink
                          to="/about"
                          className="btn btn-brand-gradient animsition-link"
                        >
                          Learn more
                          <i className="uil uil-arrow-right size-22 ml-3" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 pr-xl-5"
                    
                  >
                    <div
                      className="section border-4 services-wrap-3 process px-4 px-xl-5 py-5 text-center"
                      
                    >
                      <p className="mb-2">
                      <i class="uil uil-cloud-computing size-50"></i>
                      </p>
                      <h6 className="mb-4">Web Applications</h6>
                      <p className="mb-0">
                        Transform Your Business Through Technology
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 px-xl-4 mt-4 mt-md-0"
                    
                  >
                    <div
                      className="section border-4 services-wrap-3 process px-4 px-xl-5 py-5 text-center "
                      
                    >
                      <p className="mb-2">
                      <i class="uil uil-palette size-50"></i>
                      </p>
                      <h6 className="mb-4">Branding</h6>
                      <p className="mb-0">
                        Formulate A Vision For Your Digital Products
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 pl-xl-5 mt-4 mt-md-0"
                    
                  >
                    <div
                      className="section border-4 services-wrap-3 px-4 px-xl-5 py-5 text-center "
                     
                    >
                      <p className="mb-2">
                        <i class="uil uil-layers-alt size-50"></i>
                      </p>
                      <h6 className="mb-4">UI/UX Design</h6>
                      <p className="mb-0">
                      Craft Delightful User Experiences For Your Digital Products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
