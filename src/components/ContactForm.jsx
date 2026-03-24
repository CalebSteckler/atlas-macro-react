import "../css/ContactForm.css";
import React from "react";
import { useState } from "react";

const ContactForm = () => {
    const [result, setResult] = useState("");
    const [feedback, setFeedback] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d080bb63-f8bc-4702-a733-328fd36babfc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div id='form-container'>
        <section className="form-section">
            <form onSubmit={onSubmit} id="contact-form">
                <p className="form-group">
                    <label className="">Label</label>
                    <input type="text" name="name" className="" required/>
                </p>
                <p className="form-group">
                    <label className="">Email</label>
                    <input type="email" name="email" className="form-control" required/>
                </p>
                <p className="form-group">
                    <label className="">Message</label>
                    <textarea name="message" className="form-control" required></textarea>
                </p>
                <button type="submit" id="submit-button">Submit Form</button>
                <span>{result}</span>
            </form>
        </section>
    </div>
  );
};

export default ContactForm;