import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigateByUrl= useNavigate()
  return (

    <>
      <Row className="mt-4 d-flex justify-content-center align-items-center">
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to VideoPlayer</h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur nesciunt natus placeat minima, illo excepturi?
            Obcaecati libero maxime aspernatur nemo quod dolorem consequuntur
            asperiores deleniti praesentium veniam tempora laudantium expedita
            corporis neque sapiente sequi quis distinctio, quasi corrupti fuga
            minus!
          </p>
          <button onClick={()=>navigateByUrl('/home')} className="mt-5 btn btn-primary rounded-3">
            {" "}
            Get started <i class="fa-solid ms-2 fa-arrow-right"></i>{" "}
          </button>
        </Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
        </Col>
        <Col></Col>
      </Row>
      <div className=" container d-flex justify-content-center align-items-center mt-5 flex-column">
        <h3> features </h3>

        <div className="cards d-flex mb-5  justify-content-evenly align-items-center w-100 mt-4">
          <Card className="p-2" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"300px"}
              width={"200px"}
              src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
            />
            <Card.Body>
              <Card.Title>Managing Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="p-2" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"300px"}
              width={"200px"}
              src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif"
            />
            <Card.Body>
              <Card.Title>Categorized video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="p-2" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              height={"300px"}
              width={"200px"}
              src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="container border w-100 align-items-center border-black d-flex justify-content-between">
          <Row>
            <Col lg={5}>
              <h3 className="mb-3 mt-4">Simple fast and Powerful</h3>
              <h6 className="mb-4">
                <span className="fw-bolder fs-5">Play Everything</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, distinctio! Aut velit nesciunt dignissimos quos dolore
                voluptatem est voluptas perferendis!
              </h6>
              <h6 className="mb-4">
                <span className="fw-bolder fs-5">Play Everything</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, distinctio! Aut velit nesciunt dignissimos quos dolore
                voluptatem est voluptas perferendis!
              </h6>
              <h6 className="mb-4">
                <span className="fw-bolder fs-5">Play Everything</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, distinctio! Aut velit nesciunt dignissimos quos dolore
                voluptatem est voluptas perferendis!
              </h6>
            </Col>
            <Col></Col>
            <Col lg={6 } className="d-flex justify-content-center align-items-center">
              <iframe
                width="500"
                height="300"
                src="https://www.youtube.com/embed/WWr9086eWtY"
                title="LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
