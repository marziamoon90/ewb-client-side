import React from 'react'
import './Header.css'
import { Container, Nav, Navbar, Button, Row, Col, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <div >
      <Container className='d-flex align-items-center w-100' style={{ height: '60px' }}>
        <h3 className="text-start m-0" >EWB Bangladesh Sending Organization</h3>
      </Container>
      <div className="background-img nav-bar">


        <Navbar collapseOnSelect sticky="top" expand="lg" variant="light">
          <Container>
            {/* <img className="d" width="80px" src={logo} alt="" /> */}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Container className='d-flex md-1   '>
              <Container fluid>
                <Row className='text-start w-100 d-flex align-items-center md-1' style={{ height: '40vh' }}>
                  <Col>
                    <h2 className='text-bold'>
                      EWB Bangladesh Government Official Sending Agency
                    </h2>
                    <p className='fs-5  we-special'>We specialize in shipping to Japan.</p>
                  </Col>
                </Row>

              </Container>
            </Container>

          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;