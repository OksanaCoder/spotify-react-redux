import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Col, Image, Modal, Button, Spinner } from "react-bootstrap";


class AlbumPage extends Component{
    state = {
        albums: [],
        tracks: [],
        artistName: [],
        loading: true
    }
    
    albumToFooter = (albumId, albumCover, albumLabel, albumTitle) => (
        this.props.sendAlbum(albumId, albumCover, albumLabel, albumTitle)
        )
   
    componentDidMount = () => {
        const albumId = this.props.match.params.id;
        let headers = new Headers({
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579",
          });
  
          fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + albumId, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
                }
            })
            .then(response => {
               return response.json()
              
            }).then((album)=>{
                //console.log("response from fetch", response.json());
                let albums = album
                let tracks = album.tracks.data
                const artistName = album.artist
                this.setState({
                    albums: albums,
                    tracks: tracks,
                    artistName: artistName
                    
                })
                //console.log('new state 1', this.state.tracks)
                //console.log('new state album', this.state.albums)
                //console.log('new state album', this.state.artistName)
                this.albumToFooter(albumId, albums.cover_small, albums.label, albums.title);
            })
            .catch(err => {
                console.log(err);
            });
            
    }
    
    render(){
        console.log('props from app.js', this.props)
        return (
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
            <div className="col-md-3 pt-5 text-center" id="img-container">
            <Image
                src={this.state.albums.cover_medium}
                className="card-img img-fluid"
                alt={this.state.albums.title}
                
                />
                <div className="mt-4 text-center">
                <p className="album-title">{this.state.albums.title}</p>
                </div>
                <div className="text-center">
                <Link to={"/artistPage/"+ this.state.artistName.id} className="nav-link">Album: {this.state.artistName.name}
                
                </Link>
               
                </div>
                <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                    Play
                </button>
                </div>
            </div>
            <div className="col-md-8 p-5">
              <div className="row">
                <div className="col-md-10 mb-5" id="trackList">
                {this.state.tracks.map((tracklist)=>{
                    return(
                        <div className="py-3 trackHover" key={tracklist.id}>
                
                        <a
                            href="#"
                            className="card-title trackHover px-3"
                            style={{color: "white"}}
                            >{tracklist.title}</a>
                        <small className="duration pr-3" style={{color: "white"}}
                            >{(tracklist.duration/60).toFixed(2)}</small>
                        </div>
                    )
                })}
               
                </div>
              </div>
            </div>
          </div>
        </div>
    
            </>
            
        );
        
    }
}
export default AlbumPage;
