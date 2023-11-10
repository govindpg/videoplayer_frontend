import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToHistory, deletevideo } from "../services/allAPI";
import Modal from 'react-bootstrap/Modal';


function VideoCard({ displayvideo, deletevid }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    const{caption,embedLink} =displayvideo
    const today =new Date()
    let timestamp = new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)

    let videoDetails={
      caption,embedLink,timestamp
    }
    const response = await addToHistory(videoDetails)
  };


  const removevideo = async (id) => {
    const response = await deletevideo(id);
    deletevid(true);
  };

  //fn to drag aa paerticular card
  const dragStart=(e,id)=>{
    console.log(`card id is ${id}`)

    //to transferd id to ategory
    e.dataTransfer.setData('videoId',id)
    
  }



  return (
    <div>
      <Card className="mt-4 d-flex justify-content-evenly  me-5" draggable onDragStart={(e)=>dragStart(e,displayvideo?.id)} style={{ width: "100%" }}>
        <Card.Img
        onClick={handleShow}
          variant="top"
          width={"100px"}
          height={"300px"}
          src={displayvideo.url}
        />
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Card.Title>{displayvideo.caption}</Card.Title>
          <Button
            onClick={() => {
              removevideo(displayvideo.id);
            }}
            className="btn btn-danger rounded-3 ms-3"
          >
            <i class="fa-solid fa-trash fa-xl"></i>
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayvideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="530"
            src={`${displayvideo.embedLink}?autoplay`}
            title={`${displayvideo.caption}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoCard;
