import React, {Component} from 'react';
import { Col, Image, Modal, Button, Spinner } from "react-bootstrap";
import {Link, withRouter} from 'react-router-dom';
class ArtistPage extends Component {
    
    state = {
        albums: [],
        tracksresponse: [],
        artistName: [],
        textValue: 'FOLLOW',
        loading: true
    }
    
    onPressButton = () => {
        this.setState({
          textValue: 'FOLLOWING'
        })
        
      }
    componentDidMount = () => {
        const artistId = this.props.match.params.id;
        let headers = new Headers({
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579",
          });
  
          fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + artistId, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
                }
            })
            .then(response => {
               return response.json()
              
            }).then((artist)=>{
                //console.log("response from fetch", response.json());
                //let albums = album
               // let tracks = album.tracks.data
               const artistName = artist
               this.setState({
                artistName: artistName,
                
                loading: false
            })
              
               fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" +
                  artistId +
                  "/top?limit=50",
                {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                        "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
                    }
                }
              ).then(response=>{
                  if(response.ok){
                      return response.json()
                  }
              }).then(tracklist=>{
                  let track = tracklist.data;
                  
                  this.setState({
                   
                    tracksresponse: track,
                   
                })
                console.log('new state track response', this.state.tracksresponse)
              })
              
              
              
             
              
                console.log('new state artist', this.state.artistName)
               
            })
            .catch(err => {
                console.log(err);
            });
            
    }
    
    render(){
        
        return(
            <>
            <div className="col-12 col-md-9 offset-md-3 mainPage">
                  <div className="row mb-3">
                    <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                      <a href="#">TRENDING</a>
                      <a href="#">PODCAST</a>
                      <a href="#">MOODS AND GENRES</a>
                      <a href="#">NEW RELEASES</a>
                      <a href="#">DISCOVER</a>
                    </div>
                  </div>
        
                  <div className="row">
                    <div className="col-12 col-md-10 col-lg-10 mt-5">
                        <h2 className="titleMain">{ this.state.artistName.name}</h2>
                      <div id="followers">Followers: { this.state.artistName.nb_fan}</div>
                      <div className="d-flex justify-content-center" id="button-container">
                        <Button
                          className="btn btn-success mr-2 mainButton "
                          id="playButton"
                        >
                          PLAY
                        </Button>
                        {this.onPressButton ? 
                         <Button
                         className="btn btn-outline-light mainButton"
                         id="followButton"
                         onClick={this.onPressButton}
                         title= "FOLLOW"
                        
                        > {this.state.textValue}</Button>: <Button
                       className="btn btn-outline-light mainButton"
                       id="followButton"
                       onClick={this.onPressButton}
                       title= "FOLLOW"
                     > {this.state.textValue}</Button>
                         
                         }
                        
                       
                       
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                      <div className="mt-4 d-flex justify-content-start">
                        <h2 className="text-white font-weight-bold">Tracks</h2>
                      </div>
                      <div className="pt-5 mb-5">
                        <div className="row" id="apiLoaded">
                            {this.state.tracksresponse.map(tracks=>{
                                return(
                                    <div className="col-sm-auto col-md-auto text-center mb-5" key={tracks.id}>
                                <a href="">
                                  <img
                                    className="img-fluid"
                                    src={tracks.album.cover_medium}
                                    alt="1"
                                  />
                                </a>
                                <p>
                                  <a href=""> Track: {tracks.title_short}</a>
                                  <br />
                                  <Link to={"/album/"+ tracks.album.id} className="nav-link">Album: {tracks.album.title}</Link>
                                 
                                </p>
                              </div>
                                    
                                )
                                
                            })}
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
             
            </>
        )
        
        
        
    }
    
    
}

export default ArtistPage;
