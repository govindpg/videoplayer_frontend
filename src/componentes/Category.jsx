import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addToCategory, addVideo, deletecate, getAllCategories, updateCate } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import VideoCard from './VideoCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Category() {

  const[categoryName,setCategoryName]=useState('')
  const [cate,setCate]=useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[show,setShow]=useState(false)


  const handleAddCategory=async()=>{
    console.log(categoryName)
    if(categoryName){

      let body={
        categoryName,
        allvideos:[]
      }
      const response= await addToCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success("sucessfully uploaded")
        allCategory()
        // to e,pty the state
       setCategoryName('')
        //to close the modal
        handleClose()
      }else{
        toast.error("not added")
      }


    }else{
      toast.warning("enter catergory details")
    }
  }

  //function to get allcategoris

  const allCategory =async()=>{
   const {data}=await getAllCategories()
    setCate(data)
  }
  
  console.log(cate)
  useEffect(()=>{
    allCategory()
  },[])


  //fn to remov ecategory
  const removeCate=async(id)=>{
 await deletecate(id)
 allCategory()
  }


  //fn to prevent releod
  const dragover=(e)=>{

    e.preventDefault()
  }

// fn to drop videocard to category
let VideoDrop=async(e,id)=>{
  console.log(`categoruy in which videocard is dropped ${id}`);
  let videoId=e.dataTransfer.getData('videoId')
  console.log(videoId);

  //api to call the api
  const {data}=await addVideo(videoId)
  console.log(data);

  //to find the category
  let selectCate= cate.find((item)=>item.id===id)

  selectCate.allvideos.push(data)

  console.log(selectCate);

  await updateCate(id,selectCate)

  allCategory()
}


  return (
    <>
    <div className='d-flex justify-content-center align-items-center w-25'>
     <div className=''> <button onClick={handleShow} className='bg-primary text-white p-4 rounded'>Add New category</button></div> 
    </div>

   {cate?.length>0?
   cate.map((item)=>(
    <div className='m-5 border border-primary p-3 rounded ' droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>VideoDrop(e,item?.id)}> 
    <div className=' d-flex flex-column align-items-center'>
      <h5>{item.categoryName}</h5>
      <Button
      onClick={()=>{removeCate(item?.id)}}
          
          className="btn btn-danger rounded-3 ms-3"
        >
          <i class="fa-solid fa-trash fa-xl"></i>
        </Button>
    </div>
   <Row>
    <Col>{
      item.allvideos.length>0?
      item.allvideos.map((card)=>(<VideoCard displayvideo={card}/>)):<p>nothing to display</p>
    }
    </Col>
   </Row>
  </div>)):<p>nothing to display</p>}
   
   
   
   
    


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#CE5A67" }}>
            <i class="fa-solid fa-video fa-xl me-3"></i>Add new Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <form className="border rounded p-3  border-secondary">
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={(e)=>setCategoryName(e.target.value)}
                type="text"
                placeholder="Enter Category name"
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory} >
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000}/>

    </>
    
  )
}
