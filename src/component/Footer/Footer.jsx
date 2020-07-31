import React, { Component } from 'react';
import Album from '../AlbumPage/AlbumPage'
import { BrowserRouter as Router, withRouter, Link} from "react-router-dom";
import { connect } from "react-redux";


const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
 
  setAlbums: (id) => dispatch(fetchAlbums(id)),
  toggleLoading: () => dispatch({
      type: 'TOGGLE_LOADING'
  })
});

const fetchAlbums = (id) => {
  return (dispatch, getState) => {
  fetch('https://deezerdevs-deezer.p.rapidapi.com/album/' + id, {
      "method": "GET",
              "headers": {
                  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                  "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
              }
  })
  .then(result => result.json())
  
  .then(data => {
      console.log('look here', data)
      return dispatch({type: "SET_ALBUMS", payload: data })
  })
}
}


class footerPage extends Component {

  componentDidMount = async () => {
    await this.props.setAlbums(this.props.match.params.id)
  console.log( 'component',  this.props)
}
 render() {

console.log("props footer", this.props.data)
    return(
        <>
        <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row d-flex">
        <div className="col-lg-2">
          {this.props.location.pathname === '/album/'+ this.props.footerId
            ? (<div className="row d-flex">
            <div className="col-4">
              <img src={this.props.footerCover} alt="" width="50px"/> 
            </div>
            <div className="col d-flex flex-column" id="songInfo">
              <small id="songName">{this.props.footerLable}</small>
              <small id="singer ">{this.props.footerTitle}</small>
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
    
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(footerPage)
);

