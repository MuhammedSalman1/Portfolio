import React from "react";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="maincontact">
        <div className="skillstitle">
          <h2> Contact</h2>
          <p>
            Feel free to contact me for any questions or potential
            opportunities!{" "}
          </p>
        </div>
        <div className="contactdiv">
          <form action="">
            <div className="contacttitle">
              <h2>"Get in touch via email 🚀" </h2>
            </div>

            <input placeholder="Your Name" name="from_name" />

            <input placeholder="Your Email" name="from_email" />
            <input placeholder="Subject" name="subject" />
            <input placeholder="Message" name="message" rows={4} />
            <button className="contactbtn">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
