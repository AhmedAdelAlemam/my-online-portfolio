import React, { Fragment, useState } from "react";
import experience from "../../data/experience";
import resumeData from "../../data/portfolioData";
import socialProfiles from "../../data/social";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import { BallTriangle } from "react-loader-spinner";

export default function Footer() {
  let [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [isFormSubmit, setFormSubmit] = useState(false);
  const regex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (regex.test(toSend.reply_to)) {
      send("service_2sboxpe", "template_987xyix", toSend, "9S6MQm5y5lHQqzckf")
        .then((response) => {
          if (response.status === 200) {
            setFormSubmit(true);
            setTimeout(() => {
              Swal.fire({
                title: "Success",
                text: "Your email sent successfully",
                icon: "success",
                confirmButtonText: "Done",
                confirmButtonColor: "#28a745",
              });
            }, 2000);
          }
        })
        .then(() => {
          setTimeout(() => {
            setFormSubmit(false);
            setToSend({ from_name: "", message: "", reply_to: "" });
          }, 1200);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid email",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#dc3741",
      });
    }
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section id="contact">
        <div className="row" data-aos="fade-up" data-aos-anchor="#testimonials" data-aos-offset="900" data-aos-duration="1700">
          <aside className="twelve columns footer-widgets">
            <div className="widget widget_contact">
              <h2 className="cl-white">Feel Free to contact me</h2>
              <ul>
                <li>
                  <b className="cl-white fas fa-mobile-alt"></b>
                  {resumeData.mobile}
                </li>
                <li>
                  <b className="cl-white far fa-envelope"></b>
                  {resumeData.mail}
                </li>
              </ul>
            </div>
          </aside>
          <hr />
          <h2 className="cl-white text-center">Or just send me an email</h2>
          <div className="twelve columns footer-widgets">
            <form className="form-email" onSubmit={onSubmit}>
              <input required type="text" name="from_name" placeholder="Your name" value={toSend.from_name} onChange={handleChange} />
              <textarea required name="message" placeholder="Your message" value={toSend.message} onChange={handleChange} />
              <input required type="text" name="reply_to" placeholder="Your email" value={toSend.reply_to} onChange={handleChange} />
              <button className="submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        {isFormSubmit ? (
          <Fragment>
            <div className="backdrop" style={{ width: "100%", height: "100vh", position: "fixed", top: "0", backgroundColor: " #8080808a", zIndex: 99 }}></div>
            <div className="loading-indicator" style={{ display: "flex", placeContent: "center", position: "relative", bottom: "35vh" }}>
              <BallTriangle color="white" ariaLabel="loading-indicator" />
            </div>
          </Fragment>
        ) : null}
      </section>
      {/* Contact Section End*/}
      {/* footer */}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links" data-aos="fade-up" data-aos-anchor="#testimonials" data-aos-offset="900" data-aos-duration="1700">
              {socialProfiles.socialProfiles.map((item, i) => {
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
            <ul className="copyright" data-aos="fade-up" data-aos-anchor="#testimonials" data-aos-offset="900" data-aos-duration="1700">
              <li>
                Developed and maintained By Ahmed Adel Alemam From 2020 - 2022 <br />
                Front End Web Development specialist @{" "}
                <a className="copy-link" href={experience.work_experience[0].siteUrl} target="_blank" rel="noopener noreferrer nofollow">
                  {experience.work_experience[0].name}
                </a>{" "}
              </li>
            </ul>
          </div>
          <div id="go-top" data-aos="fade-up" data-aos-anchor="#testimonials" data-aos-offset="900" data-aos-duration="1700">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="far fa-arrow-alt-circle-up" />
            </a>
          </div>
        </div>
      </footer>
      {/* Footer End*/}
    </div>
  );
}
