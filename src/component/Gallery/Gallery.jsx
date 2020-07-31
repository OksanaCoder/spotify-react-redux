import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Songs from "../Songs/Songs";

function Gallery({ songs, loading }) {
    console.log("gallery prosp ", songs)
  return (
    <div>
      <h4>{}</h4>
      <Row className="row-cols-1 row-cols-md-4  mb-4 text-center">
        {loading
          ? [0, 1, 2, 3].map((num, i) => (
              <Col key={i}>
                <Spinner animation="border" role="status" variant="success">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Col>
            ))
          : songs.map((song) => (
              <Songs key={song.id}
                song={song}
               
               
              />
            ))}
        
      </Row>
    </div>
  );
}

export default Gallery;
