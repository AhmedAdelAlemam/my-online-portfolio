import React, { Fragment } from "react";
import testimonials from "../../data/testimonials";
export default function Header() {
  return (
    <Fragment>
      {/* Testimonials Section */}
      <section id="testimonials">
        <div className="text-container" data-aos="fade-up" data-aos-anchor="#status" data-aos-offset="500" data-aos-duration="1700">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <i className="fas fa-quote-left" />
                <span>My Favourite Quotes</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {testimonials.testimonials.map((item, i) => {
                    return (
                      <li key={i}>
                        <blockquote>
                          <p>{item.text}</p>
                          <cite>{item.said_by}</cite>
                        </blockquote>
                      </li>
                    );
                  })}
                  {/* slide ends */}
                </ul>
              </div>
              {/* div.flexslider ends */}
            </div>
            {/* div.flex-container ends */}
          </div>
          {/* row ends */}
        </div>
        {/* text-container ends */}
      </section>
      <hr /> {/* Testimonials Section End*/}
    </Fragment>
  );
}
