import React from 'react'

const About = () => {
  return (
    <>

<div id="about" className="about section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-left-image  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
              <img src="assets/images/about-img.png"  className='img-fluid' alt />
            </div>
          </div>
          <div className="col-lg-6 align-self-center  wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="about-right-content">
              <div className="section-heading">
                <h6>About Us</h6>
                <h4>Who are <em>We</em></h4>
                <div className="line-dec" />
              </div>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <div className="skill-item first-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                    <div className="progress" data-percentage={90}>
                      <span className="progress-left">
                        <span className="progress-bar" />
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar" />
                      </span>
                      <div className="progress-value">
                        <div>
                          90%<br />
                          <span>Coding</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="skill-item second-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                    <div className="progress" data-percentage={80}>
                      <span className="progress-left">
                        <span className="progress-bar" />
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar" />
                      </span>
                      <div className="progress-value">
                        <div>
                          80%<br />
                          <span>Photoshop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="skill-item third-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                    <div className="progress" data-percentage={80}>
                      <span className="progress-left">
                        <span className="progress-bar" />
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar" />
                      </span>
                      <div className="progress-value">
                        <div>
                          80%<br />
                          <span>Animation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default About