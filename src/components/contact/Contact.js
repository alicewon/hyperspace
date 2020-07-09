import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="three" className="wrapper style1 fade-up">
    <div className="inner">
      <h2>Who is Alice?</h2>
      <p>
        I'm a front-end web developer living in Seattle, WA with my husband and two cats, Pocket and Bogey. I love the process of building things.
      </p>
      <div className="split style1">
        {/* <ContactForm /> */}
        <ContactInformation />
      </div>
    </div>
  </section>

export default Contact;
