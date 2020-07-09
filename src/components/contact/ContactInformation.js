import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      {/* <li>
        <h3>Email</h3>
        <a href="mailto:alicewon4@gmail.com">alicewon4@gmail.com</a>
      </li> */}
      
      <li>
        {/* <h3>Social</h3> */}
        <ul className="icons">
       
          {/* <li>
            <a href="/#" className="fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li> */}
          <li>
            <a href="https://github.com/alicewon" className="fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          {/* <li>
            <a href="/#" className="fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li> */}
          <li>
            <a href="https://www.linkedin.com/in/alicewon4/" className="fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://medium.com/@alicewon4" className="fa-medium">
              <span className="label">Medium</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/vaguegravy" className="fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;
