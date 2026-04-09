import React from "react";
import email from "../contackComponent/contackIcons/email.png";
import phonecall from "../contackComponent/contackIcons/phonecall.png";
import location from "../contackComponent/contackIcons/location.png";
import { DetailCard } from "../contackComponent/DetailCard";

export function Contactus() {
  return (
    <section className="contack-us-section">
      <div className="section-wrapper">
        {/* Hero Section */}

        <div className="heading-part">
          <h1>Get in Touch</h1>
          <p className="sub-heading">
            We're here to help you manage your institution more efficiently. Our
            team typically responds within 2 business hours.
          </p>
        </div>

        <section className="contack-detail-section">
          {/* Contact Details Section */}

          <div className="details-section">
            <DetailCard
              image={email}
              help="Email Support"
              question="Questions about our platform?"
              details="student@management.com"
            />
            <DetailCard
              image={phonecall}
              help="Phone Call"
              question="Mon-Fri from 8am to 6pm PST."
              details="+91 1112495283"
            />
            <DetailCard
              image={location}
              help="Office"
              question="Visit our Silicon Valley campus."
              details="123 Main Street, City, State 12345"
            />
          </div>

          {/* Contact Form Section */}

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
                placeholder="How can we help you?"
                cols={10}
                rows={5}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </section>
  );
}
