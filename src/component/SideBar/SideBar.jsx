import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons'

class SideBar extends Component {


    render() {
        return (
        <>
        
        <div className="col-2">
          <Nav
            className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="nav-container">
              <a className="navbar-brand" href="/">
                <img
                  src="/logo/Spotify_Logo.png"
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <a className="nav-item nav-link" href="/"
                        >  <FontAwesomeIcon style={{color: '#fff', marginRight: '10px'}} icon={faHome} /> Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-item nav-link" href="#"
                        > <FontAwesomeIcon style={{color: '#fff', marginRight: '10px'}} icon={faBook} /> Your
                        Library</a
                      >
                    </li>
                    {this.props.location.pathname === '/' ? 
                      <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          
                        />
                        
                        <div
                          className="input-group-append"
                          style={{marginBottom: "4%"}}

                          
                        >
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            id="button-addon1"
                            
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </li> : null  
                         
                    }
                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-btn">
              <button className="btn signup-btn" type="button">Sign Up</button>
              <button className="btn login-btn" type="button">Login</button>
              <a href="#">Cookie Policy</a> |
              <a href="#"> Privacy</a>
            </div>
          </Nav>
        </div>
                  
        </>
        );
    }
}
export default withRouter(SideBar);