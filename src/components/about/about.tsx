import React, { Fragment } from "react";
import about from "../../data/about";
export default function Header() {
  const aboutData = about;
  return (
    <Fragment>
      {/* About Section */}
      <section id="about" className="gradient" data-aos-anchor=".profile-pic" data-aos="fade-up" data-aos-offset="1000" data-aos-duration="1000">
        <div className="row">
          <div className="twelve columns main-col">
            <h2>About Me</h2>
            <ul>
              {aboutData.about.map((item, i) => {
                return <li key={i}>{item.title}</li>;
              })}
            </ul>
            {/* end row */}
          </div>
          {/* end .main-col */}
        </div>
      </section>
      <hr />
      {/* About Section End*/}
    </Fragment>
  );
}
