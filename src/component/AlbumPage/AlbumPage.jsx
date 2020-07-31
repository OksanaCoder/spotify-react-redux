import React, { Component } from 'react';
import { Col, Image, Modal, Button, Spinner } from "react-bootstrap";
import { BrowserRouter as Router, withRouter, Link} from "react-router-dom";
import { connect } from "react-redux";
// import Spiner from './Spiner'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
 
    setAlbums: (id) => dispatch(fetchAlbums(id)),
    toggleLoading: () => dispatch({
        type: 'TOGGLE_LOADING'
    }),
    setTracks: () => dispatch(fetchTracks()),
    toggleLoading: () => dispatch({
        type: 'TOGGLE_LOADING'
    }),
    setArtistsName: () => dispatch(fetchArtistNames()),
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

const fetchTracks = (id) => {
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
        console.log(data)
        return dispatch({type: "SET_TRACKS", payload: data })
    })
 }
}
const fetchArtistNames = () => {
    return (dispatch, getState) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/album/' + this.props.match.params.id)
    .then(result => result.json())
    
    .then(data => {
        console.log(data)
        return dispatch({type: "SET_ARTIST_NAME", payload: data })
    })
 }
}

class AlbumPage extends Component{

    // state = {
    //     albums: [],
    //     tracks: [],
    //     artistName: [],
    //     loading: true
    // }
    
    // albumToFooter = (albumId, albumCover, albumLabel, albumTitle) => (
    //     this.props.sendAlbum(albumId, albumCover, albumLabel, albumTitle)
    //     )
   
    componentDidMount = async () => {
          await this.props.setAlbums(this.props.match.params.id)
        console.log( 'component',  this.props)
    }

    

    // componentDidMount = () => {
    //     const albumId = this.props.match.params.id;
    //     let headers = new Headers({
    //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //         "x-rapidapi-key":
    //           "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579",
    //       });
  
    //       fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + albumId, {
    //             "method": "GET",
    //             "headers": {
    //                 "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //                 "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
    //             }
    //         })
    //         .then(response => {
    //            return response.json()
              
    //         }).then((album)=>{
    //             //console.log("response from fetch", response.json());
    //             let albums = album
    //             let tracks = album.tracks.data
    //             const artistName = album.artist
    //             this.setState({
    //                 albums: albums,
    //                 tracks: tracks,
    //                 artistName: artistName
                    
    //             })
    //             //console.log('new state 1', this.state.tracks)
    //             //console.log('new state album', this.state.albums)
    //             //console.log('new state album', this.state.artistName)
    //             this.albumToFooter(albumId, albums.cover_small, albums.label, albums.title);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
            
    // }
    
    render(){
        console.log('props from app.js', this.props.albums)
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
            {/* <Image
                src={this.props.albums.cover_medium}
                className="card-img img-fluid"
                alt={this.state.albums.title}
                
                /> */}
                <div className="mt-4 text-center">
                <p className="album-title">{this.props.albums.data.title}</p>
                </div>
                <div className="text-center">
                <Link to={"/artistPage/"+ this.props.artistName.data.id} className="nav-link">Album: {this.props.artistName.data.name}
                
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
                {this.props.albums.data && this.props.albums.data.tracks && this.props.albums.data.tracks.data.map((tracklist)=>{
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
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AlbumPage)
  );
  