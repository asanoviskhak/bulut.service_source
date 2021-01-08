import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class GetInTouch extends Component {
    render() {
        return (
          <div className="section over-hide pb-5 pt-5 bg-light-2">
            <div className="section-1400">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="section border-4 over-hide padding-top-bottom-80 bg-dark-blue section-background-8">
                      <div className="section z-bigger px-3">
                        <div className="row justify-content-center">
                          <div className="col-12 text-center">
                            <h4 className="mb-4 color-white">
                              If our services needed to you and suits you, hurry up and
                            </h4>
                          </div>
                          <div className="col-12 text-center">
                            <NavLink
                              to="/contact"
                              className="btn btn-primary-gradient animsition-link"
                            >
                              Get in touch
                              <i className="uil uil-arrow-right size-22 ml-3" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
