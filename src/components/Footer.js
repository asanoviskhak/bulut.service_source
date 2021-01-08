import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer(){    
        return (
          <>
          <div
            className="section over-hide padding-top pb-4 bg-dark-blue section-background-16"
            id="footer"
          >
            <div className="section-1400">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-4 mb-5 mb-lg-0 text-center text-lg-left">

                  <Link
                      to="/"
                      exact
                  >
                    <img src={"img/logo.png"} className="mb-4 logo-bulut" alt="logo" style={{height:80}} />
                  </Link>

                    <h3 className="mb-5 color-light-2">
                      <i>
                        <span className="size-24 font-weight-700">We don't just provide services, we provide services that Sell</span> 
                      </i>
                    </h3>
                  </div>
                  <div className="col-md col-lg mb-5 mb-md-0 text-center text-lg-left">
                    
                  </div>
                  <div className="col-md-4 col-lg-3 mb-5 mb-md-0 text-center text-lg-left">
                    <h5 className="mb-3 color-light-2">Sitemap</h5>
                    <Link
                      to='/'
                      
                    >
                      <a className="link size-18 link-gray mb-1" >Home</a>
                    </Link>
                    <div className="clearfix w-100" />
                    <Link
                      to='/about'
                      
                    >
                       <a className="link size-18 link-gray mb-1" >About us</a>
                    </Link>
                    {/* <div className="clearfix w-100" />
                    <Link
                      to='/works'
                      
                    >
                      Portfolio
                    </Link> */}
                    <div className="clearfix w-100" />
                    <Link
                      to='/contact'
                     
                    >
                      <a className="link size-18 link-gray mb-1" >Contact us</a>
                    </Link>
                    <div className="clearfix w-100" />
                   
                  </div>
                  <div className="col-md-6 col-lg-4 text-center text-lg-left">
                    <h5 className="mb-3 color-light-2">Say hello:</h5>
                    <a
                      href="mailto:bulut.hello@gmail.com"
                      className="link size-18 link-primary"
                      data-hover="bulut.hello@gmail.com"
                    >
                    bulut.hello@gmail.com
                    </a>
                    <h5 className="mb-3 mt-5 color-light-2">Follow us on:</h5>
                    <a
                      href="https://instagram.com/bulut.services"
                      className="link link-primary mb-1 mr-2"
                      rel="noopener norefferer"
                      target="_blank"
                      data-hover="Instagram"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://t.me/bulutservices"
                      className="link link-primary mb-1 mr-2"
                      data-hover="Telegram"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      Telegram
                    </a>
                    <a
                      href="https://www.facebook.com/bulut.services"
                      className="link link-primary mb-1 mr-2"
                      data-hover="Facebook"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      Facebook
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/company/bulut-services/"
                      className="link link-primary mb-1 "
                      data-hover="Linkedin"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                       Linkedin
                    </a>
                  </div>
                  <div className="col-12 mt-5 mb-4">
                    <div className="section divider divider-light" />
                  </div>
                </div>
                <div className="row text-center text-md-left">
                  <div className="col-md-auto">
                    <a
                      href="/"
                      className="link link-normal link-gray text-center-v animsition-link"
                    >
                      <img className="bulut-logo" src="/img/bulut-logo.svg" alt="Bulut Services" style={{height:"40px"}}></img>
                    </a>
                  </div>
                  <div className="col-md order-md-first">
                    <p className="mb-0 size-14 color-gray-dark mt-1 font-weight-500">
                      © 2020 Bulut Services. All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        </>
        );
}
