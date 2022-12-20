import React from "react";
import works from "../../data/works";
export default function Header() {
  return (
    <div>
      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <h1>{works.company1.name}</h1>
            {/* portfolio-wrapper */}
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {works.company1.data[0].projects_modal.map((item, i) => {
                return (
                  <div key={i} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={`#modal-0${i + 1}`}>
                        <img src={item.img_src} alt={item.img_alt} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.project_name}</h5>
                            <p>{item.project_category}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
              {/* item end */}
            </div>
            {/* portfolio-wrapper end */}
          </div>
          {/* twelve columns end */}
          {/* Modal Popup */}
          {works.company1.data[0].projects_modal_body_data.map((item, i) => {
            return (
              <div
                key={i}
                id={`modal-0${i + 1}`}
                className="popup-modal mfp-hide"
              >
                {item.before_title ? (
                  <h6 className="text-center">Before</h6>
                ) : null}
                {item.img_src_before ? (
                  <img
                    className="scale-with-grid"
                    src={item.img_src_before}
                    alt={item.img_alt_before}
                  />
                ) : null}
                {item.after_title ? (
                  <h6 className="text-center">After</h6>
                ) : null}
                {item.img_src_after ? (
                  <img
                    className="scale-with-grid"
                    src={item.img_src_after}
                    alt={item.img_alt_after}
                  />
                ) : null}
                {!item.img_src_after && !item.img_src_before ? (
                  <img src={item.img_src} alt={item.img_alt} />
                ) : null}
                <div className="description-box">
                  <h4>
                    <a href={item.project_href} target={works.target} rel="noopener noreferrer nofollow">
                      {item.project_name}
                    </a>
                  </h4>
                  <p>{item.project_role}</p>
                </div>
                <div className="link-box">
                  <button className="btn popup-modal-dismiss">Close</button>
                </div>
              </div>
            );
          })}
        </div>
        {/* row End */}
      </section>
      <hr />
      {/* Portfolio Section End*/}
    </div>
  );
}
