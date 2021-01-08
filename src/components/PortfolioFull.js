import React, { Component } from "react";
// section over-hide padding-top-120 padding-top-mob-nav padding-bottom-120 section-background-20 background-img-top
export default class PortfolioFull extends Component {
  render() {
    return (
      <div className="section over-hide padding-top-120 padding-top-mob-nav section-background-20 background-img-top">
        <div className="section-1400 pt-xl-4">
          <div className="container-fluid padding-top-80">
            <div className="row padding-bottom-80">
              <div className="col-12 align-self-center pb-2">
                <div className="row">
                  <div className="col-auto align-self-center">
                    <h6 className="color-gray-dark text-vertical text-uppercase mx-0 px-0">
                      portfolio
                    </h6>
                  </div>
                  <div className="col">
                    <h3 className="display-6 font-weight-600 mb-0">
                      See what we have
                      <br />
                      <span className="display-6">
                        so far<span className="color-primary">.</span>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-xl-4">
              <div className="col-12 filter-sorting mb-4">
                <button
                  className="btn-filter link size-18 link-brand mr-3 active"
                  data-filter="*"
                  data-hover="all"
                >
                  all
                </button>
                <button
                  className="btn-filter link size-18 link-brand mr-3"
                  data-filter=".category-1"
                  data-hover="branding"
                >
                  branding
                </button>
                <button
                  className="btn-filter link size-18 link-brand mr-3"
                  data-filter=".category-2"
                  data-hover="art direction"
                >
                  art direction
                </button>
                <button
                  className="btn-filter link size-18 link-brand mr-3"
                  data-filter=".category-3"
                  data-hover="graphic design"
                >
                  graphic design
                </button>
                <button
                  className="btn-filter link size-18 link-brand mr-3"
                  data-filter=".category-4"
                  data-hover="illustration"
                >
                  illustration
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="filter-wrapper-mix fullwidth">
            <div className="mb-5 mix mix-4-col category-1">
              <a href="project-1.html" className="animsition-link">
                <div className="portfolio-wrap-1 no-shadow img-wrap">
                  <div className="section border-4 over-hide">
                    <img src="img/project-1.jpg" alt />
                    <div className="wrap-mask" />
                    <p className="lead mb-0 font-weight-700 text-right color-white">
                      BRANDING
                    </p>
                    <div className="port-wrap-text text-center-v color-white">
                      Discover
                      <i className="uil uil-arrow-right size-22 ml-3 color-primary" />
                    </div>
                  </div>
                  <h6 className="mb-0 mt-3">Fresha app branding</h6>
                </div>
              </a>
            </div>
            <div className="mb-5 mix mix-4-col category-2">
              <a href="project-2.html" className="animsition-link">
                <div className="portfolio-wrap-1 no-shadow img-wrap">
                  <div className="section border-4 over-hide">
                    <img src="img/project-2.jpg" alt />
                    <div className="wrap-mask" />
                    <p className="lead mb-0 font-weight-700 text-right color-white">
                      ART DIRECTION
                    </p>
                    <div className="port-wrap-text text-center-v color-white">
                      Discover
                      <i className="uil uil-arrow-right size-22 ml-3 color-primary" />
                    </div>
                  </div>
                  <h6 className="mb-0 mt-3">Tarkett showroom for NeoCon</h6>
                </div>
              </a>
            </div>
            <div className="mb-5 mix mix-4-col category-1">
              <a href="project-4.html" className="animsition-link">
                <div className="portfolio-wrap-1 no-shadow img-wrap">
                  <div className="section border-4 over-hide">
                    <img src="img/project-4.jpg" alt />
                    <div className="wrap-mask" />
                    <p className="lead mb-0 font-weight-700 text-right color-white">
                      BRANDING
                    </p>
                    <div className="port-wrap-text text-center-v color-white">
                      Discover
                      <i className="uil uil-arrow-right size-22 ml-3 color-primary" />
                    </div>
                  </div>
                  <h6 className="mb-0 mt-3">Bioteca oils</h6>
                </div>
              </a>
            </div>
            <div className="mb-5 mix mix-4-col category-2">
              <a href="project-4.html" className="animsition-link">
                <div className="portfolio-wrap-1 no-shadow img-wrap">
                  <div className="section border-4 over-hide">
                    <img src="img/project-7.jpg" alt />
                    <div className="wrap-mask" />
                    <p className="lead mb-0 font-weight-700 text-right color-white">
                      ART DIRECTION
                    </p>
                    <div className="port-wrap-text text-center-v color-white">
                      Discover
                      <i className="uil uil-arrow-right size-22 ml-3 color-primary" />
                    </div>
                  </div>
                  <h6 className="mb-0 mt-3">VIZOU - reading glasses</h6>
                </div>
              </a>
            </div>
            <div className="mb-5 mix mix-4-col category-4">
              <a href="project-4.html" className="animsition-link">
                <div className="portfolio-wrap-1 no-shadow img-wrap">
                  <div className="section border-4 over-hide">
                    <img src="img/project-6.jpg" alt />
                    <div className="wrap-mask" />
                    <p className="lead mb-0 font-weight-700 text-right color-white">
                      ILLUSTRATION
                    </p>
                    <div className="port-wrap-text text-center-v color-white">
                      Discover
                      <i className="uil uil-arrow-right size-22 ml-3 color-primary" />
                    </div>
                  </div>
                  <h6 className="mb-0 mt-3">Pachamama</h6>
                </div>
              </a>
            </div>
            <div className="mb-5 mix mix-4-col category-3">
              <a href="project-3.html" className="animsition-link">
                <div className="portfolio-wrap-1 no-shadow img-wrap">
                  <div className="section border-4 over-hide">
                    <img src="img/project-3.jpg" alt />
                    <div className="wrap-mask" />
                    <p className="lead mb-0 font-weight-700 text-right color-white">
                      GRAPHIC DESIGN
                    </p>
                    <div className="port-wrap-text text-center-v color-white">
                      Discover
                      <i className="uil uil-arrow-right size-22 ml-3 color-primary" />
                    </div>
                  </div>
                  <h6 className="mb-0 mt-3">The artist commons</h6>
                </div>
              </a>
            </div>
            <div className="mb-5 mix mix-4-col category-1">
              <a href="project-4.html" className="animsition-link">
                <div className="portfolio-wrap-1 no-shadow img-wrap">
                  <div className="section border-4 over-hide">
                    <img src="img/project-5.jpg" alt />
                    <div className="wrap-mask" />
                    <p className="lead mb-0 font-weight-700 text-right color-white">
                      BRANDING
                    </p>
                    <div className="port-wrap-text text-center-v color-white">
                      Discover
                      <i className="uil uil-arrow-right size-22 ml-3 color-primary" />
                    </div>
                  </div>
                  <h6 className="mb-0 mt-3">Enjoei</h6>
                </div>
              </a>
            </div>
            <div className="mb-5 mix mix-4-col category-3">
              <a href="project-4.html" className="animsition-link">
                <div className="portfolio-wrap-1 no-shadow img-wrap">
                  <div className="section border-4 over-hide">
                    <img src="img/project-8.jpg" alt />
                    <div className="wrap-mask" />
                    <p className="lead mb-0 font-weight-700 text-right color-white">
                      GRAPHIC DESIGN
                    </p>
                    <div className="port-wrap-text text-center-v color-white">
                      Discover
                      <i className="uil uil-arrow-right size-22 ml-3 color-primary" />
                    </div>
                  </div>
                  <h6 className="mb-0 mt-3">LAPP &amp; FAO butter</h6>
                </div>
              </a>
            </div>
            <div className="mb-5 mix mix-4-col category-3">
              <a href="project-4.html" className="animsition-link">
                <div className="portfolio-wrap-1 no-shadow img-wrap">
                  <div className="section border-4 over-hide">
                    <img src="img/project-9.jpg" alt />
                    <div className="wrap-mask" />
                    <p className="lead mb-0 font-weight-700 text-right color-white">
                      GRAPHIC DESIGN
                    </p>
                    <div className="port-wrap-text text-center-v color-white">
                      Discover
                      <i className="uil uil-arrow-right size-22 ml-3 color-primary" />
                    </div>
                  </div>
                  <h6 className="mb-0 mt-3">Villa Vita</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
