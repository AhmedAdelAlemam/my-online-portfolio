import React from "react";
import resumeData from "../../data/portfolioData";
import social from "../../data/social";
import navData from "../../data/navData";
export default function Header() {
  let className = () => {
    document.getElementById("nav-wrap")?.classList.toggle("target");
  };
  return (
    <div>
      <header id="home">
        <nav id="nav-wrap" onClick={className}>
          <a className="mobile-btn" title="Show navigation" href="#no">
            Show navigation
          </a>
          <ul id="nav" className="nav">
            {navData.nav_data.map((item, i) => {
              return (
                <li key={i} className={item.name === "Home" ? "current" : ""}>
                  <a className="smoothscroll" href={`#${item.href}`}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* end #nav */}
        </nav>
        {/* end #nav-wrap */}
        <div className="row banner">
          <div className="twelve columns" data-aos="fade-left" data-aos-offset="600" data-aos-duration="1700">
            <img className="profile-pic" src={resumeData.img} alt="me" />
          </div>
          <div className="banner-text">
            <h1 className="responsive-headline" data-aos="fade-right" data-aos-offset="600" data-aos-duration="1700">
              {resumeData.name}
            </h1>
            <h3 className="summary" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
              {resumeData.summary}.
            </h3>
            <hr data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" />
            <ul className="social" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1700">
              {social.socialProfiles.map((item, i) => {
                return (
                  <li className={item.name} key={i}>
                    <a href={item.url} target={resumeData.target} rel="noopener noreferrer nofollow">
                      {item.name === "drive" ? (
                        <i>
                          <img src={item.icon} alt="drive" />
                        </i>
                      ) : (
                        <i className={item.icon} />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <p className="scroll-down" data-aos="fade-up" data-aos-anchor=".social" data-aos-offset="00" data-aos-duration="1700">
          <a className="smoothscroll" title="Go to skills" href="#skills">
            <i className="far fa-arrow-alt-circle-down" />
          </a>
        </p>
      </header>
      <hr />
    </div>
  );
}
