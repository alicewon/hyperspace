import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Howdy, I'm Alice Won</h1>
      <p>
        Frontend Developer in Seattle, WA
        <br />
        Find me on {' '}
        <a href="https://github.com/alicewon">Github</a> , 
        <a href="https://www.linkedin.com/in/alicewon4/"> Linkedin</a>, or
        <a href="https://medium.com/@alicewon4"> Medium</a>
      
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
