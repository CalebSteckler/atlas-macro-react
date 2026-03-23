import React from "react";
import "../css/Contact.css";
import HeroTitle from "../components/HeroTitle";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main id="contact-content">
      <HeroTitle title="Contact Us" />
      <ContactForm />
      <section id="contact-info">
        <h3 id="contact-info-header">Contact Info</h3>
        <div className="contact-info-row">
          <h3 className="contact-info-label">Phone:</h3>
          <p>123-456-7890</p>
        </div>
        <div className="contact-info-row">
          <h3 className="contact-info-label">Email:</h3>
          <p>info@atlasmacro.com</p>
        </div>
        <div className="contact-info-row">
          <h3 className="contact-info-label">Address:</h3>
          <p>123 Main St, Anytown, USA</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;

