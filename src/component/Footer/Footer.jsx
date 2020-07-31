import React, { Component } from 'react';
import Album from '../AlbumPage/AlbumPage'
import { BrowserRouter as Router, withRouter, Link} from "react-router-dom";
import { connect } from "react-redux";

const footBar = { 
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center'
}
const coverFooter = {
  width: '50px'

}
const mapStateToProps = (state) => state;

function footerPage (props) {

//   componentDidMount = async () => {
//     await this.props.setAlbums(this.props.match.params.id)
//   console.log( 'component',  this.props)
// }
// console.log('props from app.js', this.props)
    return(

        <>
        <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row d-flex">
        <div className="col-lg-4">
          {/* {props.location.pathname === '/album/'+ props.footerId
            ? ( */}
            
            <div className="row d-flex justify-center" >
            <div className="col-12" style={{display: 'flex', justifyContent:'flex-start', paddingTop: '15px', alignItems:' center'}}>
            {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Shure_mikrofon_55S.jpg/220px-Shure_mikrofon_55S.jpgs' /> */}
             
            <img style={coverFooter} src={props.albums.data.cover_medium} className='mr-3'/>
            <small style={{color: '#fff'}}>{props.albums.selectedSong}</small>
      
            </div>
           
          </div> 
          
          {/* ): null
           
           }
            */}
           
         
        </div>

        <div className="col-lg-8" style={footBar}>
          <div className="row">
            <div
              className="col-sm-12 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
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
     
          
     
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="progress" style={{width: '50%', margin: '0 auto', marginTop: '20px'}}>
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



export default withRouter(
  connect(mapStateToProps)(footerPage)
);