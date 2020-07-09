import React from 'react';

const SkillsGrid = () =>{
  return (

    <div className="skills-grid">
      <div className="skill">
        <i id="icon" class="devicon-html5-plain colored"></i>
        <h3 className="skillname">HTML</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-css3-plain colored"></i>
        <h3 className="skillname">CSS</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-javascript-plain colored"></i>
        <h3 className="skillname">JavaScript</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-jquery-plain colored"></i>
        <h3 className="skillname">jQuery</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-react-original colored"></i>
        <h3 className="skillname">React</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-bootstrap-plain colored"></i>
        <h3 className="skillname">Boostrap</h3>
      </div>
      
      <div className="skill">
        <i id="icon" class="devicon-sass-original colored"></i>
        <h3 className="skillname">Sass</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-less-plain-wordmark colored"></i>
        <h3 className="skillname">LESS</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-git-plain colored"></i>
        <h3 className="skillname">Git/Github</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-ruby-plain colored"></i>
        <h3 className="skillname">Ruby</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-rails-plain colored"></i>
        <h3 className="skillname">Ruby on Rails</h3>
      </div>
      
      <div className="skill">
        <i id="icon" class="devicon-postgresql-plain colored"></i>
        <h3 className="skillname">PostgresSQL</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-illustrator-plain colored"></i>
        <h3 className="skillname">Illustrator</h3>
      </div>

      <div className="skill">
        <i id="icon" class="devicon-photoshop-plain colored"></i>
        <h3 className="skillname">Photoshop</h3>
      </div>

      <div className="skill">
        {/* <i id="icon" class="devicon-amazonwebservices-original"></i> */}
        <img src="https://image.flaticon.com/icons/svg/65/65381.svg" width="80" height="80" alt="Responsive design symbol icon"></img>
        <h3 className="skillname">Responsive Design</h3>
      </div>

    </div>

  
  )
}

export default SkillsGrid