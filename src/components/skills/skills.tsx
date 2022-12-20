import React, { Fragment } from "react";
import resumeData from "../../data/skills";
export default function Header() {
  const skillsData = resumeData;
  return (
    <Fragment>
      {/* Skills */}
      <section id="skills">
        <div className="row skill">
          <h6>
            <p className="cl-white">My top skills and tools</p>
          </h6>
          <div className="two columns header-col">
            <h1 data-aos="fade-left" data-aos-anchor="#experience hr" data-aos-offset="1000" data-aos-duration="1700">
              <span>Skills</span>
            </h1>
          </div>
          <div className="five columns main-col">
            <div className="bars">
              <ul className="skills">
                {skillsData.skills1.map((item, i) => {
                  return (
                    <li key={i} data-aos="fade-right" data-aos-anchor="#experience hr" data-aos-offset="1000" data-aos-duration="1700">
                      <span className={item.class_name} />
                      <em>{item.skill_name}</em>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="five columns main-col">
            <div className="bars">
              <ul className="skills">
                {skillsData.skills2.map((item, i) => {
                  return (
                    <li key={i} data-aos="fade-right" data-aos-anchor="#experience hr" data-aos-offset="1000" data-aos-duration="1700">
                      <span className={item.class_name} />
                      <em>{item.skill_name}</em>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </Fragment>
  );
}
