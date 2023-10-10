import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import './Hero.css'

import Fresh from "../../resources/images/fresh.png";
import Organic from "../../resources/images/organic.png";
import Authentic from "../../resources/images/authentic.png";
import Healthy from "../../resources/images/healthy.png";

class Hero extends Component {
  render() {
    return (
      <>
        <section className="hero">
          <div className="left">
            <div className="welcome-text">
              <h3>Welcome to the</h3>
              <h1>GREEN CRATE</h1>
              <p className="welcome-text-content">
                Hello there, we are
                <span className="branding"> Green Crate </span>
                family, an organic online grocery store with a quest to provide
                a curated selection of fresh produce and pantry staples, free
                from harmful additives. We cater to various dietary needs and we
                offer fast delivery for easy shopping.
              </p>
              <button>
                <a
                  className="welcome-text-link"
                  href="https://www.facebook.com/greencratebd"
                  target="_blank"
                  rel="noreferrer"
                >
                  Know More
                </a>
              </button>
            </div>
          </div>
          <div className="right">
            <div className="banner">
              <div className="box">
                <div className="circle image1">
                  <img src={Fresh} alt="" />
                </div>
                <div className="inner-box">
                  <h3>Fresh</h3>
                  <p>Fresh product just from the farm.</p>
                </div>
              </div>

              <div className="box">
                <div className="circle image2">
                  <img src={Organic} alt="" />
                </div>
                <div className="inner-box">
                  <h3>100% Organic</h3>
                  <p>Product is 100% organic.</p>
                </div>
              </div>

              <div className="box">
                <div className="circle image3">
                  <img src={Authentic} alt="" />
                </div>
                <div className="inner-box">
                  <h3>100% Authentic</h3>
                  <p>Not a copy product.</p>
                </div>
              </div>

              <div className="box">
                <div className="circle image4">
                  <img src={Healthy} alt="" />
                </div>
                <div className="inner-box">
                  <h3>Super Healthy</h3>
                  <p>Best for your better health.</p>
                </div>
              </div>
            </div>

            <div className="social">
              <div className="social-links">
                <button>
                <a href="tel: +8801886346307" target="_blank" rel="noreferrer">
                  <i className="fa fa-phone"></i>
                </a>
                </button>
                <button>
                <a
                  href="mailto:greencratebd@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a>
                </button>
                <button>
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-messenger"></i>
                </a>
                </button>
                <button>
                <a
                  href="https://www.facebook.com/greencratebd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                </button>
                <button>
                <a href="#" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Hero;
