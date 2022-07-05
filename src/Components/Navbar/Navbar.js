import React, { Component } from "react";
import Logo from "../../Assets/images/logoname.png";
import Container from 'react-bootstrap/Container'
import './Navbar.css';

class NavbarSticky extends Component {
    constructor() {
        super();
        this.state = {
          sticky: false
        };
      }
      componentDidMount() {
        window.addEventListener("scroll", this.manualscroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.manualscroll);
      }
    
      manualscroll = () => {
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
    
    
    
      render (){
        return(
            <header className="navbar-header">
               <nav className={`navbar${this.state.sticky ? "scroll" : "noscroll"}`}>
                    <div className='container'>
                        <div className="teste">
                        <div className="navbar-logo">
                            <a className="navbar-brand" href="/">
                                <img  className="logo" width="159" alt="criptoGama Logo" src={Logo}/>
                            </a>
                        </div>
                        <div className="navbar-navigation">
                            <ul className="navbar-menu">
                                <li className="navbar-menu-item">
                                    <a href="#banner">Home</a>
                                </li>
                                <li className="navbar-menu-item">
                                    <a href="#banner">Home</a>
                                </li>
                                <li className="navbar-menu-item">
                                    <a href="#banner">Home</a>
                                </li>
                                <li className="navbar-menu-item">
                                    <a href="#banner">Home</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-right">
                            <a className="login-btn" href="#" target="_blank">
                                <span>Entrar</span>
                            </a>
                        </div>
                        </div> 
                    </div>
                </nav>
            </header>
        );
      }
}

export default NavbarSticky;