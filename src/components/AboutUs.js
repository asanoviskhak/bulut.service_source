import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="section over-hide padding-top-120 padding-top-mob-nav section-background-20">
          <div className="section-1400 pt-xl-4">
            <div className="row padding-top-bottom-80 justify-content-center">
              <div className="col-12 text-center">
                <h2 className="display-1 mb-0">
                  <span className=" color-light-2">About us</span>
                </h2>
              </div>
              <div className="col-10 col-md-8 mt-lg-4 text-center align-self-center">
                <h5 className="mb-0 about-title">
                  Hello{" "}
                  <span role="img" aria-label="hello">
                    👋,
                  </span>{" "}
                  We are Bulut! Our company provides full pack and partial
                  services such as Web Development, UI/UX Design, Branding and
                  SMM.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="section over-hide padding-top-120 padding-top-mob-nav section-background-24">
          <div className="section-1400 pt-xl-4">
            <div className="container-fluid padding-top-bottom-80">
              <div className="row">
                <div className="col-12 align-self-center pb-2">
                  <div className="row ">
                    <div className="col-auto align-self-center">
                      <h6 className="color-gray-dark text-vertical text-uppercase mx-0 px-0">
                        services
                      </h6>
                    </div>
                    <div className="col">
                      <h3 className="display-6 font-weight-600 mb-0">
                        Learn more about our
                        <br />
                        <span className="display-6">
                          fields of expertise
                          <span className="color-primary">.</span>
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-1400 padding-bottom-120">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="row">
                    <div className="col">
                      <div className="row">
                        <div className="col-md-6">
                          <div
                            className="section border-4 services-wrap-3 px-4 px-xl-5 py-5"
                            data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                          >
                            <p className="mb-2">
                              <i className="uil uil-cloud-computing size-50" />
                            </p>
                            <h6 className="mb-4">Web Development</h6>
                            <p className="mb-0">
                              While some software needs can be satisfied with
                              modified off-the-shelf products, others require a
                              custom software solution built from the ground up.
                              With deep experience in web, mobile, and back-end
                              platforms, our software solutions are scalable,
                              flexible, and most importantly, secure.
                            </p>
                          </div>
                          <div
                            className="section border-4 services-wrap-3 px-4 px-xl-5 py-5 mt-4"
                            data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                          >
                            <p className="mb-2">
                              <i className="uil uil-ruler-combined size-50" />
                            </p>
                            <h6 className="mb-4">UI/UX Design</h6>
                            <p className="mb-0">
                              Using design thinking, we expose unmet needs,
                              identify the correct problem, and uncover key
                              insights into how we can solve it. Taking a
                              human-centered design approach, we structure an
                              experience that solves the problem in the simplest
                              way possible.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="section border-4 services-wrap-3 px-4 px-xl-5 py-5 mt-4 mt-md-0 mt-lg-5"
                            data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                          >
                            <p className="mb-2">
                              <i className="uil uil-palette size-50" />
                            </p>
                            <h6 className="mb-4">Branding</h6>
                            <p className="mb-0">
                              We help you formulate a strategy specifically
                              around the design and vision of your digital
                              products and services. Looking at the user
                              experience as a whole, we create a cohesive and
                              impactful customer journey that goes beyond the
                              screen.
                            </p>
                          </div>
                          <div
                            className="section border-4 services-wrap-3 px-4 px-xl-5 py-5 mt-4"
                            data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                          >
                            <p className="mb-2">
                              <i className="uil uil-share-alt size-50" />
                            </p>
                            <h6 className="mb-4">SMM</h6>
                            <p className="mb-0">
                              Think of us as an extension of your current
                              technical capabilities. We’ll integrate into your
                              organization and scale as your needs grow.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process section
		================================================== */}
        <div className="section over-hide padding-top-bottom-120 bg-light-2 section-background-21">
          <div className="section-1400">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 align-self-center mb-5 pb-4">
                  <div className="row">
                    <div className="col-auto align-self-center">
                      <h6 className="color-gray-dark text-vertical text-uppercase mx-0 px-0">
                        how we work
                      </h6>
                    </div>
                    <div className="col">
                      <h3 className="display-6 mb-0">
                        Get insight of our
                        <br />
                        <span className="font-weight-600">
                          development milestones
                          <span className="color-primary">.</span>
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-lg pr-xl-5"
                  data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                >
                  <div className="section border-4 services-wrap-3 process light-border p-4">
                    <div className="service-back-text font-weight-400 color-gray font-italic pt-2 pr-3 text-right">
                      01
                    </div>
                    <h5 className="mb-3">
                      RESEARCH
                      <br />
                      <span className="font-italic font-weight-400">
                        We Expose Unmet Needs and Identify the Problem
                      </span>
                    </h5>
                    <p className="mb-3 mb-sm-5">
                      Our team uses design thinking to expose unmet needs,
                      identify the correct problem and who’s experiencing it,
                      and uncover key insights into how we can solve it.
                    </p>
                    <p className="mb-0 text-right">
                      <i className="uil uil-search size-30" />
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 col-lg-5 px-xl-4 mt-4 mt-md-0"
                  data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                >
                  <div className="section border-4 services-wrap-3 process light-border p-4">
                    <div className="service-back-text font-weight-400 color-gray font-italic pt-2 pr-3 text-right">
                      02
                    </div>
                    <h5 className="mb-3">
                      DEVELOPMENT
                      <br />
                      <span className="font-italic font-weight-400">
                        Blending Agile to Create The Best Solution For Your
                        Needs
                      </span>
                    </h5>
                    <p className="mb-3 mb-sm-5">
                      Agile software development allows teams to deliver
                      quickly, collaborate often, and continually improve their
                      product. We take a slightly modified approach to the Agile
                      methodology that maximizes those benefits while utilizing
                      a hybrid models.
                    </p>
                    <p className="mb-0 text-right">
                      <i className="uil uil-cog size-30" />
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 col-lg pl-xl-5 mt-4 mt-md-0"
                  data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                >
                  <div className="section border-4 services-wrap-3 p-4">
                    <div className="service-back-text font-weight-400 color-gray font-italic pt-2 pr-3 text-right">
                      03
                    </div>
                    <h5 className="mb-3">
                      RELEASE & TEST
                      <br />
                      <span className="font-italic font-weight-400">
                        Stopping Roadblocks Before They Happen
                      </span>
                    </h5>
                    <p className="mb-3 mb-sm-5">
                      Identifying potential risks at the start of and during any
                      software project is critical in the success of that
                      project
                    </p>
                    <p className="mb-0 text-right">
                      <i className="uil uil-plane-fly size-30" />
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 mt-4 mt-xl-5 pr-xl-5"
                  data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                >
                  <div className="section border-4 services-wrap-3 process-2 light-border p-4">
                    <div className="service-back-text font-weight-400 color-gray font-italic pt-2 pr-3 text-right">
                      04
                    </div>
                    <h5 className="mb-3">
                      VISUAL
                      <br />
                      <span className="font-italic font-weight-400">
                        Focusing On People’s Real Needs
                      </span>
                    </h5>
                    <p className="mb-3 mb-sm-5">
                      For every screen we design and build, the person
                      interacting with that screen is top of mind. What are
                      their needs? More importantly, what are the behaviors
                      motivating those needs? By taking a human-centered design
                      approach, we’re able to better meet and anticipate
                      people’s expectations as they interact with your business
                      and products.
                    </p>
                    <p className="mb-0 text-right">
                      <i className="uil uil-brush-alt size-30" />
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 mt-4 mt-xl-5 pl-xl-5"
                  data-scroll-reveal="enter bottom move 40px over 0.5s after 0.3s"
                >
                  <div className="section border-4 services-wrap-3 p-4">
                    <div className="service-back-text font-weight-400 color-gray font-italic pt-2 pr-3 text-right">
                      05
                    </div>
                    <h5 className="mb-3">
                      FINAL RELEASE & SUPPORT
                      <br />
                      <span className="font-italic font-weight-400">
                        Keep Your Software Running At Its Best
                      </span>
                    </h5>
                    <p className="mb-3 mb-sm-5">
                      Software is never truly finished. No matter how solid your
                      released product is, changes are inevitable. So are patch
                      releases, language and platform updates, and new
                      enhancements. Our software support team keeps your product
                      secure, maintained, and enhanced well after it launches.
                    </p>
                    <p className="mb-0 text-right">
                      <i className="uil uil-notes size-30" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quote section
		================================================== */}
        <div className="section over-hide padding-top-bottom-80 bg-black">
          <div className="section-1400">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-6 col-xl-5 text-center">
                  <h3 className="color-light">
                    Great things in business are never done by{" "}
                    <span className="color-primary">one person</span>. And our
                    business is not an exception.{" "}
                    <span className="color-primary">
                      See those who work with us.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing section
		================================================== */}

        <div className="section over-hide padding-top-bottom-120">
          <div className="section-1400">
            <div className="container-fluid">
              <div className="row padding-bottom-80">
                <div className="col-12 align-self-center pb-4">
                  <div className="row">
                    <div className="col-auto align-self-center">
                      <h6 className="color-gray-dark text-vertical text-uppercase mx-0 px-0">
                        team
                      </h6>
                    </div>
                    <div className="col">
                      <h3 className="display-6 mb-0">
                        Get acquainted
                        <br />
                        <span className="font-weight-600">
                          with us<span className="color-primary">!</span>
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div
                  className="col-sm-10 col-md-8 col-lg-5 img-wrap"
                  data-scroll-reveal="enter left move 40px over 0.5s after 0.3s"
                >
                  <img
                    className="radius-img-anime-1"
                    src="img/team/iskhak.png"
                    alt="Iskhak Asanov"
                  />
                </div>
                <div className="col-sm-10 col-md-8 col-lg-7 pl-lg-5 align-self-center mt-4 mt-lg-0">
                  <h3 className="mb-1">Iskhak Asanov</h3>
                  <h6 className="mb-4 color-gray font-weight-700">
                    Founder, Web Developer
                  </h6>
                  <div className="row justify-content-start">
                    <div className="col-xl-8">
                      <p className="lead mb-4">
                        Hey there! It is really nice to meet you! I am Founder
                        and Web-Developer at Bulut, so you can contact me about
                        any matter including our services.
                      </p>
                    </div>
                    <div className="clearfix w-100" />
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">5</span>+
                      </div>
                      <h6 className="mb-0 color-gray">Projects</h6>
                    </div>
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span> years
                      </div>
                      <h6 className="mb-0 color-gray">Experience</h6>
                    </div>
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span>
                      </div>
                      <h6 className="mb-0 color-gray">Awards</h6>
                    </div>
                    <div className="col-12 mt-4">
                      <a
                        href="https://instagram.com/iskhak_asanov"
                        className="link link-primary mr-2"
                        data-hover="Instagram"
                        target="_blank"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://twitter.com/iskhakasanov"
                        className="link link-primary mr-2"
                        data-hover="Twitter"
                        target="_blank"
                      >
                        Twitter
                      </a>
                      <a
                        href="https://www.linkedin.com/in/iskhak-a-080466136/"
                        className="link link-primary mr-2"
                        data-hover="LinkedIn"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://t.me/iskhakasanov"
                        className="link link-primary "
                        data-hover="Telegram"
                        target="_blank"
                      >
                        Telegram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center pt-5 pt-lg-0 mt-4 mt-lg-0">
                <div
                  className="col-sm-10 col-md-8 col-lg-5 img-wrap"
                  data-scroll-reveal="enter right move 40px over 0.5s after 0.3s"
                >
                  <img
                    className="radius-img-anime-2"
                    src="img/team/torocool.png"
                    alt="Torokul Kursant Uulu"
                  />
                </div>
                <div className="col-sm-10 col-md-8 col-lg-7 pr-lg-5 align-self-center order-lg-first text-left text-lg-right mt-4 mt-lg-0">
                  <h3 className="mb-1">Torocool</h3>
                  <h6 className="mb-4 color-gray font-weight-700">
                    Co-Founder, Designer
                  </h6>
                  <div className="row justify-content-start justify-content-lg-end">
                    {/* <div className="col-xl-8">
                      <p className="lead mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div> */}
                    <div className="clearfix w-100" />
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">10</span>+
                      </div>
                      <h6 className="mb-0 color-gray">Projects</h6>
                    </div>
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span> years
                      </div>
                      <h6 className="mb-0 color-gray">Experience</h6>
                    </div>
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span>
                      </div>
                      <h6 className="mb-0 color-gray">Awards</h6>
                    </div>
                    <div className="col-12 mt-4">
                      <a
                        href="https://instagram.com/toro.cool"
                        className="link link-primary mr-2 mr-lg-0"
                        data-hover="Instagram"
                        target="_blank"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.behance.net/toro-cool"
                        className="link link-primary mr-2 mr-lg-0 ml-lg-2"
                        data-hover="Behance"
                        target="_blank"
                      >
                        Behance
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center pt-5 pt-lg-0 mt-4 mt-lg-0">
                <div
                  className="col-sm-10 col-md-8 col-lg-5 img-wrap"
                  data-scroll-reveal="enter left move 40px over 0.5s after 0.3s"
                >
                  <img
                    className="radius-img-anime-1"
                    src="img/team/manas.jpg"
                    alt="Manas Askarov"
                  />
                </div>
                <div className="col-sm-10 col-md-8 col-lg-7 pl-lg-5 align-self-center mt-4 mt-lg-0">
                  <h3 className="mb-1">Manas Askarov</h3>
                  <h6 className="mb-4 color-gray font-weight-700">
                    Co-Founder, Project Manager
                  </h6>
                  <div className="row justify-content-start">
                    {/* <div className="col-xl-8">
                      <p className="lead mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div> */}
                    <div className="clearfix w-100" />
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span>+
                      </div>
                      <h6 className="mb-0 color-gray">Projects</h6>
                    </div>
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span> years
                      </div>
                      <h6 className="mb-0 color-gray">Experience</h6>
                    </div>
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span>
                      </div>
                      <h6 className="mb-0 color-gray">Awards</h6>
                    </div>
                    <div className="col-12 mt-4">
                      <a
                        href="https://instagram.com/manaskarov"
                        className="link link-primary mr-2"
                        data-hover="Instagram"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://wa.me/996501248866"
                        className="link link-primary mr-2"
                        data-hover="WhatsApp"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center pt-5 pt-lg-0 mt-4 mt-lg-0">
                <div
                  className="col-sm-10 col-md-8 col-lg-5 img-wrap"
                  data-scroll-reveal="enter right move 40px over 0.5s after 0.3s"
                >
                  <img
                    className="radius-img-anime-2"
                    src="img/team/unknown.jpg"
                    alt="Ulukbek Tursunov"
                  />
                </div>
                <div className="col-sm-10 col-md-8 col-lg-7 pr-lg-5 align-self-center order-lg-first text-left text-lg-right mt-4 mt-lg-0">
                  <h3 className="mb-1">Ulukbek Tursunov</h3>
                  <h6 className="mb-4 color-gray font-weight-700">
                    Co-Founder, SMM Manager, Designer
                  </h6>
                  <div className="row justify-content-start justify-content-lg-end">
                    {/* <div className="col-xl-8">
                      <p className="lead mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div> */}
                    <div className="clearfix w-100" />
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span>+
                      </div>
                      <h6 className="mb-0 color-gray">Projects</h6>
                    </div>
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span> years
                      </div>
                      <h6 className="mb-0 color-gray">Experience</h6>
                    </div>
                    <div className="col-auto">
                      <div className="h5 mb-1">
                        <span className="counter">2</span>
                      </div>
                      <h6 className="mb-0 color-gray">Awards</h6>
                    </div>
                    <div className="col-12 mt-4">
                      <a
                        href="https://instagram.com/ulookt"
                        className="link link-primary mr-2 mr-lg-0"
                        data-hover="Instagram"
                        target="_blank"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/ulukbek.tursunov.3"
                        className="link link-primary mr-2 mr-lg-0 ml-lg-2"
                        data-hover="Facebook"
                        target="_blank"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://wa.me/996999445722"
                        className="link link-primary mr-2 mr-lg-0 ml-lg-2"
                        data-hover="WhatsApp"
                        target="_blank"
                      >
                        WhatsApp
                      </a>
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
}
