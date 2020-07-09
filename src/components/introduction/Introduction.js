import React from 'react';
// import Scroll from '../common/Scroll';
import { Link } from 'gatsby';
import ContactInformation from '../Contact/ContactInformation'; 

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Howdy, I'm Alice Won 🤠</h1>
      
      <p>
        Frontend Developer originally from Dallas, TX. Currently living in Seattle, WA
        <br />
        Find me on {' '}
        <a href="https://github.com/alicewon">Github</a> , 
        <a href="https://www.linkedin.com/in/alicewon4/"> Linkedin</a>, or
        <a href="https://medium.com/@alicewon4"> Medium</a>
      
      </p>
      
      <ul className="actions">
        <li>
          {/* <Scroll type="id" element="one">
            <a href="https://drive.google.com/file/d/1s4ydcEEQAKi-zrToL4Ba5h1xyAiv6zyu/view?usp=sharing" target="_blank" className="button">
              Resume
            </a>
          </Scroll> */}
          <Link className="button" to="https://drive.google.com/file/d/1EHhFoYP0_-j9G01X5dJ1bliXIQmTRW_w/view?usp=sharing" target="_blank">
            Resume
          </Link>
        </li>
        
      </ul>
      <ContactInformation/>
    </div>
  </section>


export default Introduction;
