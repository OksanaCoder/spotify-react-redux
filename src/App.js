import React, {Component} from 'react';
import HomePage from './component/HomePage/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './component/SideBar/SideBar';
import FooterPage  from './component/Footer/Footer';
import AlbumPage from './component/AlbumPage/AlbumPage';
import Artistpage from './component/ArtistPage/ArtistPage';
import './App.css';
import { connect } from "react-redux";

const albumArr=[];
class App extends Component {
  
  state= {
    albumId: null,
    albumCover: null,
    albumLabel: null,
    albumTitle: null,
  }
  
  albumToFooter = ((albumId,albumCover, albumLabel, albumTitle) =>{
    
    return(
      albumArr.push(this.setState({
        albumId: albumId , albumCover: albumCover, albumLabel: albumLabel, albumTitle: albumTitle}))
    ) 
    
  }) 
  
  render(){
    console.log("from App js state", albumArr)
    return (
   
      <>
      <Router>
      <Sidebar />
      <Route path="/" exact component={HomePage} />
      <Route path="/artistPage/:id" exact component={Artistpage} />
      <Route path="/album/:id" exact render={(props)=><AlbumPage {...props} sendAlbum={this.albumToFooter} />} />
      <FooterPage 
      />
      </Router>
    
    </>
    );
    
  }
  
}

export default App;
