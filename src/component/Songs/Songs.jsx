import React,{Component} from "react";
import { Col, Image, Modal, Button, Spinner } from "react-bootstrap";
import {Link, withRouter} from 'react-router-dom';



class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

//   handleClick = (songID) => {
//     this.setState({ isModalVisible: !this.state.isModalVisible });
//     this.props.fetchComments(movieID);
//   };

  render() {

   //console.log('this props', this.props.song)
    return (
      
       
        <div className="col space-left2 text-center">
            <a href="/album">
              <Image className="img-fluid" src={this.props.song.album.cover_medium} alt={this.props.song.artist.name} />
            </a>
            <p> 
               <Link to={"/album/"+ this.props.song.album.id} className="nav-link">Album: {this.props.song.album.title}</Link>
               
              
               <Link to={"/artistPage/"+ this.props.song.artist.id} className="nav-link">Artist: {this.props.song.artist.name}</Link>
            </p>
        </div>
    
    );
  }
}

export default withRouter(Songs);
