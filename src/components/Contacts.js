import React, { useState } from 'react'


const mailgun = require("mailgun-js");
const DOMAIN = 'bulut.services';
const mg = mailgun({apiKey: process.env.REACT_APP_MAILGUN_API, domain: DOMAIN});


export default function Contacts(){
    const [state, setState] = useState({name: '', email: '', message:"", subject:"", subject2:"", subject3:"", subject4:"", notval:"" });
    // sgMail.setApiKey(SENDGRID_API_KEY)

    const handleChange = event => {
      const { name, value } = event.target;
      setState({
        ...state,
        [name]: value
      });
    }

    const handlePress = () => {
      if (state.name && state.email){
        const subj = state.subject || state.subject2 || state.subject3 || state.subject4;
        const data = {
          from: `From website <bulut.hello@gmail.com>`,
          to: 'bulut.hello@gmail.com',
          subject: 'Request From Website',
          html: 
          `
                <strong>Name: </strong> ${state.name} <br>
                <strong>Email: </strong> ${state.email} <br>
                <strong>Topic: </strong> ${subj} <br>
                <strong>Message: </strong> ${state.message}
          `
        };
        mg.messages().send(data, function (error, body) {
          if(body.message === "Queued. Thank you."){
            const notvalm = document.getElementById("notvalid-mail");
            if (!notvalm.classList.contains("hidden")) notvalm.classList.add("hidden");
            const successm = document.getElementById("success-mail");
            successm.classList.remove("hidden");
            setTimeout(()=>{
              window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
              });
              
            }, 4000);
          }
          else{
            document.getElementById("servernot-mail").classList.remove("hidden");
        setTimeout(()=>{
          document.getElementById("servernot-mail").classList.add("hidden");
        }, 3000);
          }
        });
      }
      else{
        document.getElementById("notvalid-mail").classList.remove("hidden");
        setTimeout(()=>{
          document.getElementById("notvalid-mail").classList.add("hidden");
        }, 3000);
      }
    }
    
        return (
          <>
            <div className="section over-hide full-height full-height-xl section-background-3">
              <div className="hero-center-section">
                <div className="section-1400 pt-xl-4">
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div className="col-12 parallax-fade-hero-short text-center">
                        <h1 className="display-1 mb-4 mb-lg-5">
                        <span role="img" aria-label="hi!">👋 </span>Have something in mind? Let's discuss
                        </h1>
                      </div>
                      <div className="col-auto parallax-fade-hero-short">
                        <a
                          href="#contact-form"
                          className="text-decoration-none"
                          data-gal="m_PageScroll2id"
                          data-ps2id-offset={80}
                        >
                          <p className="font-weight-700 mb-0 size-18 text-vertical color-gray">
                            contact us
                            <i className="uil uil-arrow-down size-20 mt-3" />
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section over-hide" id="contact-form">
              <div className="section over-hide padding-top-bottom-120 bg-white section-background-21 z-bigger">
                <div className="section-1400">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12  align-self-center mb-5 pb-4">
                        <div className="row">
                          <div className="col-auto align-self-center">
                            <h6 className="color-gray-dark text-vertical text-uppercase mx-0 px-0">
                              contact
                            </h6>
                          </div>
                          <div className="col">
                            <h3 className="display-6 font-weight-600 mb-0">
                              Tell us about
                              <br />
                              <span className="display-6">
                              yourself<span className="color-primary">.</span>
                              </span>
                            </h3>
                          </div>
                          <div className="col-lg-4 text-lg-right mt-5 mt-lg-0 align-self-center"></div>
                        </div>
                      </div>
                      <div className="col-xl-8">
                        <div className="form-group mx-auto text-center">
                        
                          <div className="row justify-content-left text-left">
                            <div className="col-md-12"> <h4 className="color-gray">You are interested in ...</h4></div>
                            <div className="col-md-3">
                              <input
                                className="checkbox-contact"
                                type="radio"
                                defaultValue="Web Application"
                                value="WebApp"
                                name="subject"
                                id="contact-1"
                                onChange={handleChange}
                              />
                              <label
                                className="for-checkbox-contact"
                                htmlFor="contact-1"
                              >
                                Web Application
                              </label>
                            </div>
                            <div className="col-md-3 mt-4 mt-md-0">
                              <input
                                className="checkbox-contact"
                                type="radio"
                                value="UI/UX"
                                defaultValue="UI/UX"
                                name="subject"
                                id="contact-2"
                                onChange={handleChange}
                              />
                              <label
                                className="for-checkbox-contact"
                                htmlFor="contact-2"
                              >
                                UI/UX
                              </label>
                            </div>
                            <div className="col-md-3 mt-4 mt-md-0">
                              <input
                                className="checkbox-contact"
                                type="radio"
                                defaultValue="Branding"
                                name="subject"
                                value="Branding"
                                id="contact-3"
                                onChange={handleChange}
                              />
                              <label
                                className="for-checkbox-contact"
                                htmlFor="contact-3"
                              >
                                Branding
                              </label>
                            </div>
                            <div className="col-md-3 mt-4 mt-md-0">
                              <input
                                className="checkbox-contact"
                                type="radio"
                                defaultValue="Full pack"
                                name="subject"
                                value="Full Pack"
                                id="contact-4"
                                onChange={handleChange}
                              />
                              <label
                                className="for-checkbox-contact"
                                htmlFor="contact-4"
                              >
                                Full packs
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix w-100" />
                      <div className="col-md-6 col-xl-4 mt-4">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-style big form-style-with-icon section-shadow-blue"
                            placeholder="Full Name"
                            id="contactname"
                            autoComplete="off"
                            onChange={handleChange}
                          />
                          <i className="input-icon big uil uil-user" />
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 mt-4">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-style big form-style-with-icon section-shadow-blue"
                            placeholder="Your Email"
                            id="contactemail"
                            autoComplete="off"
                            onChange={handleChange}
                          />
                          <i className="input-icon big uil uil-at" />
                        </div>
                      </div>
                      <div className="clearfix w-100" />
                      <div className="col-xl-8 mt-4">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-style big form-style-with-icon form-textarea section-shadow-blue"
                            placeholder="Tell about your project"
                            id="contactmessage"
                            autoComplete="off"
                            rows={5}
                            defaultValue={""}
                            onChange={handleChange}
                          />
                          <i className="input-icon big uil uil-comment-alt-lines" />
                        </div>
                        <h4 id="success-mail" className="mt-4 mb-4 alert alert-primary hidden" role="alert">Thank you for contacting us! We will reply very soon.</h4>
                        <h4 id="notvalid-mail" className="mt-4 mb-4 alert alert-warning hidden" role="alert">Please fill out your Name and Email address</h4>
                        <h4 id="servernot-mail" className="mt-4 mb-4 alert alert-warning hidden" role="alert">Something went wrong :( Please try later!</h4>
                      </div>
                      <div className="col-12 align-left text-center pt-5">
                        <button
                          onClick={handlePress}
                          className="btn btn-brand-gradient"
                        >
                          Send message
                          <i class="uil uil-message size-22 ml-3"></i>
                        </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }

