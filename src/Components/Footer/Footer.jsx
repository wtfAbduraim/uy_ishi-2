import React from "react";
import "./Footer.scss";
import FooterImg from "../Img/footer-img.png";
import Group from "../Img/Group.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <img
            className="footer__img"
            src={FooterImg}
            alt="img"
            width={359}
            height={332}
          />
          <div className="footer__flex">
            <h3 className="footer__heading">Luxury & Fancy Chair</h3>
            <p className="footer__text">
              All the Lorem Ipsum generators on the Internet tend to predefined
              chunks this the first true generator on the Internet.{" "}
            </p>
            <hr className="footer__hr" />
          </div>
          <div className="footer__info">
            <div className="div_1">
              <div className="div-1">
                <h4 className="footer__title">20K+</h4>
                <span className="footer__span">People Visiting this year</span>
              </div>
              <div className="div-1">
                <h4 className="footer__title">15</h4>
                <span className="footer__span">Years Experience</span>
              </div>
            </div>
            <div className="div_2">
              <img src={Group} alt="group" width={116} height={36} />
              <hr className="hr" />
              <div>
                <h5 className="footer__comment">Trust Members</h5>
                <p className="footer__more">
                  More than 50k peoples integrate with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
