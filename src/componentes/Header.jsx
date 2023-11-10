import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function header() {
  return (
    
    <Navbar className=" bg-primary bg-body-dark">
    <Container>
      <Navbar.Brand href="#home">
        <Link to={"/"} style={{textDecoration:"none",color:'White',fontSize:'30px'}}>
        <i class="fa-solid fa-video fa-beat text-warning me-3"></i>
       video Player
        </Link>
      
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default header