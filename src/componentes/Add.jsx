import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { uploadAllVideos } from "../services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Add({setUploadVideo}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [datastore, setDatastore] = useState({
    id: "",
    caption: "",
    url: "",
    embedLink: "",
  });
  console.log(datastore);

  const embedvideolink = (e) => {
    const { value } = e.target;
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`;
    setDatastore({...datastore,embedLink:link})
  };

  const handleUpload = async()=>{
    const {id,caption,url,embedLink}=datastore 
   //if ther is no value
    if(!id || !caption || !url || !embedLink){
      toast.warning("Please fill all fields")
    }else{
      const response = await uploadAllVideos(datastore)
      console.log(response)
      if(response.status>=200 && response.status<300){
        setUploadVideo(response.data)
        toast.success(`${response.data.caption} is sucessfully uplloaded`)
        // to make the state inital
        setDatastore({
          id: "",
          caption: "",
          url: "",
          embedLink: "",
        })
        handleClose()
      }else{
        console.log(response);
        toast.error("something went wrong")
      }
    }
  }

  return (
    
    <div className="d-flex justify-content-between">
      <div className="d-flex p-4 border border-dark justify-content-center   w-25 h-25">
        <p className="mt-3">Upload New Video</p>
        <button onClick={handleShow} className="btn mt-0">
          {" "}
          <i class="fa-solid fa-upload fs-5 ms-2"></i>
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#CE5A67" }}>
            <i class="fa-solid fa-video fa-xl me-3"></i>Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className="border rounded p-3  border-secondary">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text"onChange={(e) =>
                  setDatastore({ ...datastore, id: e.target.value })
                } placeholder="Enter video ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) =>
                  setDatastore({ ...datastore, caption: e.target.value })
                }
                type="text"
                placeholder="Enter video Caption"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) =>
                  setDatastore({ ...datastore, url: e.target.value })
                }
                type="text"
                placeholder="Enter video image URL"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e) =>
                {embedvideolink(e)}
                }
                type="text"
                placeholder="Enter video Link"
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex justify-content-center w-25 align-items-center">
        {" "}
        <h3>
          {" "}
          <Link to={"/Watch-history"} style={{ textDecoration: "none" }}>
            Watch History
          </Link>
        </h3>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={2000}/>
    </div>
    
  );
}

//<iframe width="1474" height="549" src="https://www.youtube.com/embed/kUyq-PFZWUw" title="Garudan Movie Review | Suresh Gopi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
