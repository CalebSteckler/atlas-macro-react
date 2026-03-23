import "../css/ContactForm.css";

const ContactForm = () => {
    return (
        <section id="form-section">
            <form id="contact-form" method="POST">
                <h2 id="contact-form-title">Send us a message</h2>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" id="submit-button">Submit</button>
            </form>
            <div id="form-result"></div>
        </section>
    );
};

export default ContactForm;