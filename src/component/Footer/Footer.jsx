import React, { Component } from 'react';
import Album from '../AlbumPage/AlbumPage'
import { BrowserRouter as Router, withRouter, Link} from "react-router-dom";
import { connect } from "react-redux";



const footerPage = (props) => {

//   componentDidMount = async () => {
//     await this.props.setAlbums(this.props.match.params.id)
//   console.log( 'component',  this.props)
// }

    return(

        <>
        <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row d-flex">
        <div className="col-lg-2">
          {props.location.pathname === '/album/'+ props.footerId
            ? (<div className="row d-flex">
            <div className="col-4">
              <img src={props.footerCover} alt="" width="50px"/> 
            </div>
            <div className="col d-flex flex-column" id="songInfo">
              <small id="songName">{props.footerLable}</small>
              <small id="singer ">{props.footerTitle}</small>
            </div>
          </div> ): null
           
           }
           
           
         
        </div>
        <div className="col-lg-10 ">
          <div className="row">
            <div
              className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <div className="row">
                <a href="#">
                  <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="/playerbuttons/Previous.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="/playerbuttons/Play.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="/playerbuttons/Next.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
        
        
    )

  
    
}

export default withRouter(footerPage)


