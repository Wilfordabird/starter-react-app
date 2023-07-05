import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactPage.css'; // Importing our custom Ivy League styled CSS

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("e-YJ3onxNTeUJWvhR");

    emailjs.sendForm('service_fg8fdrr', 'template_c6vsf5u', e.target)
      .then((result) => {
          console.log(result.text);
          setSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      {sent ? <p>Email sent successfully!</p> :
        <form onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <input type="text" name="message" />
          <input type="submit" value="Send" />
        </form>}
    </div>
  );
};

export default ContactPage;
