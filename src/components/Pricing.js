import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Pricing extends Component {
    render() {
        return (
          <div className="section over-hide padding-top-bottom-120 bg-light-2 section-background-24">
            <div className="section-1400">
              <div className="container-fluid">
                <div className="row ">
                  <div className="col-12 align-self-center mb-5 pb-4">
                    <div className="row">
                      <div className="col-auto align-self-center">
                        <h6 className="color-gray-dark text-vertical text-uppercase mx-0 px-0">
                          pricing
                        </h6>
                      </div>
                      <div className="col">
                        <h3 className="display-6 mb-0">
                          Choose your
                          <br />
                          <span className="font-weight-600">
                            desired package<span className="color-primary">.</span>
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4"
                    data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                  >
                    <div className="section pricing-wrap-1 with-shadow border-4 over-hide bg-black">
                      <div className="row">
                        <div className="col-sm-auto text-center">
                          <div className="section bg-dark">
                            <h2 className="mb-0 color-primary px-4 mx-2 pt-5 pb-4 size-30">
                              <sup className="size-18 pr-1">$</sup>755.
                              <sup className="size-20">00</sup>
                            </h2>
                            <h5 className="mb-0 color-white pb-5">startups</h5>
                            <Link to="/contact">
                            <button
                              className="btn btn-pricing size-22 btn-fluid"
                            >
                              Start Now
                            </button>
                            </Link>
                          </div>
                        </div>
                        <div className="col-sm align-self-center py-4 py-sm-0 px-5 px-xl-4">
                          <p className="lead mb-2 font-weight-700 color-gray-light">
                          
                          </p>
                          <h5 className="mb-4 color-white">Full package:</h5>
                          <p className="mb-2 color-gray-light">
                            Landing page
                          </p>
                          <p className="mb-2 color-gray-light">
                            Branding
                          </p>
                          <p className="mb-0 color-gray-light">
                            Free .com domain name for 1 year
                          </p>
                          <p className="mb-0 color-gray-light">
                            Free support for 3 months
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 mt-4 mt-xl-0"
                    data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                  >
                    <div className="section pricing-wrap-1 with-shadow border-4 over-hide bg-dark">
                      <div className="row">
                        <div className="col-sm-auto text-center">
                          <div className="section bg-black">
                            <h2 className="mb-0 color-primary px-4 mx-2 pt-5 pb-4 size-30">
                              <sup className="size-18 pr-1">$</sup>1055.
                              <sup className="size-20">00</sup>
                            </h2>
                            <h5 className="mb-0 color-white pb-5">small business</h5>
                            <Link to="/contact">
                            <button
                              className="btn btn-pricing-2 size-22 btn-fluid"
                            >
                              Start Now
                            </button>
                            </Link>
                          </div>
                        </div>
                        <div className="col-sm align-self-center py-4 py-sm-0 px-5 px-xl-4">
                          <p className="lead mb-2 font-weight-700 color-gray-light">
                            Sale: 15% OFF
                          </p>
                          <h5 className="mb-4 color-white">Full package:</h5>
                          <p className="mb-2 color-gray-light">
                            Large scale website
                          </p>
                          <p className="mb-2 color-gray-light">
                            Branding
                          </p>
                          <p className="mb-0 color-gray-light">
                            Free .com domain name for 1 year
                          </p>
                          <p className="mb-0 color-gray-light">
                            Free support for 6 months
                          </p>
                          <p className="mb-0 color-gray-light">
                            Free SMM for 1 year
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 mt-4 mt-xl-0"
                    data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                  >
                    <div className="section pricing-wrap-1 with-shadow border-4 over-hide bg-black">
                      <div className="row">
                        <div className="col-sm-auto text-center">
                          <div className="section bg-dark">
                            <h2 className="mb-0 color-primary px-4 mx-2 pt-5 pb-4 size-30">
                              <sup className="size-18 pr-1">$</sup>1755~
                            </h2>
                            <h5 className="mb-0 color-white pb-5">enterprise</h5>
                           <Link to="/contact">
                            <button
                              className="btn btn-pricing size-22 btn-fluid"
                            >
                              Start Now
                            </button>
                            </Link>
                          </div>
                        </div>
                        <div className="col-sm align-self-center py-4 py-sm-0 px-5 px-xl-4">

                          <h5 className="mb-4 color-white">Full package</h5>
                          <p className="mb-2 color-gray-light">
                            Get in touch with us and let's discuss what do you need. 
                          </p>
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
