import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user,logOut }=useContext(AuthContext);
    const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }
    return (
        <Container className='mt-5'>
                 <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to='/category/0'>Home</Link>
            </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
        
            
          { user ? 
          <Button onClick={handleLogOut} variant="secondary">Logout</Button>:
          <Link to="/login"><Button variant="secondary"> <FaUser></FaUser> Login</Button></Link>
        }  
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;