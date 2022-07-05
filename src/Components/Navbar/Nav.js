import React, { Component } from "react";
import logoDark from "../../Assets/images/logoname.png";
import './nav.css'


export default class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };

  render() {
    return (
      <header className="site-header site-header__header-one">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/">
                <img
                  src={logoDark}
                  className="main-logo"
                  width="159"
                  alt="alter text"
                />
              </a>
              <button className="menu-toggler">
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" one-page-scroll-menu navigation-box">
                <li className="current scrollToLink">
                  <a href="#banner">Home</a>
                </li>
                <li className="scrollToLink">
                  <a href="#sobre">Sobre</a>
                </li>
                <li className="scrollToLink">
                  <a href="#planos">Planos</a>
                </li>
                <li className="scrollToLink">
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <a className="thm-btn header__cta-btn" href="https://app.mezap.com.br/" target="_blank">
                <span>Acessar</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
