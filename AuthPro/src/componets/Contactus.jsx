import React from "react";
import email from "../componets/contackIcons/email.png";
import phonecall from "../componets/contackIcons/phonecall.png";
import location from "../componets/contackIcons/location.png";

export function Contactus() {
  return (
    <section className="contack-us-section">
      <div className="section-wrapper">
        <div className="heading-part">
          <h1>Get in Touch</h1>
          <p>
            We're here to help you manage your institution more efficiently. Our
            team typically responds within 2 business hours.
          </p>
        </div>
        <section className="contack-detail-section">
          <div className="our-info">
            <img src={email} alt="Email Icon" />
            <h4>Email Support</h4>
            <p className="question">Questions about our platform?</p>
            <p className="our-details">student@management.com</p>
          </div>
          <div className="our-info">
            <img src={phonecall} alt="Phone Call Icon" />
            <h4>Call Us</h4>
            <p className="question">Mon-Fri from 8am to 6pm PST.</p>
            <p className="our-details">(123) 456-7890</p>
          </div>
          <div className="our-info">
            <img src={location} alt="Location Icon" />
            <h4>Office</h4>
            <p className="question">Visit our Silicon Valley campus.</p>
            <p className="our-details">123 Main Street, City, State 12345</p>
          </div>
          <div className="our-info"></div>
          <section className="form-section">
            <form className="contack-us-form">
              <div className="input-wrapper">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="input-wrapper">
                <label>Email Address</label>
                <input type="text" placeholder="Enter your email address" />
              </div>
              <div className="input-wrapper">
                <label>Subject</label>
                <select name="subjects">
                  <option value="reason">Select The Reason</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label>Message</label>
                <textarea
                  placeholder="How Can We Help You?"
                  cols={10}
                  rows={10}
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        </section>
      </div>
    </section>
  );
}


