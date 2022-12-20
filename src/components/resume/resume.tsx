import React from "react";
import resumeData from "../../data/portfolioData";
import experience from "../../data/experience";
export default function Header() {
  return (
    <div>
      {/* Resume Section */}
      <section id="resume">
        {/* Education */}
        <div className="row education" id="education">
          <div className="three columns header-col" data-aos-anchor="#about" data-aos="fade-left" data-aos-offset="900" data-aos-duration="1000">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns" data-aos-anchor="#about" data-aos="fade-right" data-aos-offset="900" data-aos-duration="1000">
                <h3>
                  <a href={resumeData.udacitySite} target={resumeData.target} rel="noopener noreferrer nofollow">
                    Udacity.com
                  </a>
                </h3>
                <p className="info">
                  <a style={{ float: "left" }} href={resumeData.udacity} target={resumeData.target} rel="noopener noreferrer nofollow">
                    Front-End Web Developer nano-degree
                  </a>
                  <em style={{ float: "right", marginTop: "0" }} className="date">
                    <span>June 2017</span>
                    <span>
                      <i className="fas fa-arrow-right" />
                    </span>
                    <span>January 2018</span>
                  </em>
                  <br />
                </p>
                <p style={{ textAlign: "left" }}>{resumeData.udaciDescription}</p>
              </div>
            </div>
            {/* item end */}
          </div>
          {/* main-col end */}
        </div>
        {/* End Education */}
        {/* Education */}
        <div className="row education">
          <div className="three columns header-col" data-aos-anchor="#about" data-aos="fade-left" data-aos-offset="900" data-aos-duration="1000">
            <h1>
              <span>University</span>
            </h1>
          </div>
          <div className="nine columns main-col" data-aos-anchor="#about" data-aos="fade-right" data-aos-offset="900" data-aos-duration="1000">
            <div className="row item">
              <div className="twelve columns">
                <h3>{resumeData.univ}</h3>
                <p className="info">
                  <span style={{ float: "left" }}>{resumeData.faculty}</span>
                  <em style={{ float: "right" }} className="date">
                    <span>September 2007</span>
                    <span>
                      <i className="fas fa-arrow-right" />
                    </span>
                    <span>July 2011</span>
                  </em>
                </p>
                <br />
                <p style={{ textAlign: "left" }}>{resumeData.lawDesc}</p>
              </div>
            </div>
            {/* item end */}
          </div>
          {/* main-col end */}
        </div>
        {/* End Education */}
        {/* Work */}
        <div className="row work" id="experience">
          <div className="three columns header-col" data-aos-anchor="#about" data-aos="fade-left" data-aos-offset="1400" data-aos-duration="1000">
            <h1>
              <span>Experience</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {experience.work_experience.map((item, i) => {
              return (
                <div className="row item" key={i} data-aos-anchor="#about" data-aos="fade-right" data-aos-offset="1400" data-aos-duration="1000">
                  <div className="twelve columns">
                    <h3>
                      <a href={item.siteUrl} target={resumeData.target} rel="noopener noreferrer nofollow">
                        {item.name}
                      </a>
                    </h3>
                    <p className="info">
                      <span style={{ float: "left" }}>Front End Developer</span>
                      <span style={{ float: "right" }} className="info">
                        <em className="date">
                          <span>{item.startDate}</span>
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                          <span>{item.endDate}</span>
                        </em>
                      </span>
                    </p>
                    <br />
                    <p style={{ textAlign: "left" }}>{item.about}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
            {/* item end */}
          </div>
          {/* main-col end */}
        </div>
        {/* End Work */}
        {/* <Skills/> */}
      </section>
      <hr />
      {/* Resume Section End*/}
    </div>
  );
}
