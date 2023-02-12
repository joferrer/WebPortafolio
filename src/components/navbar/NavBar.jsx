import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export const NavBar = () => {

    const [activeLink, setactiveLink] = useState('home');
    const [scrolled, setscrolled] = useState(false);

    useEffect(() => {
      const onScroll = ()=>{
        if(window.scrollY > 50 ){
            setscrolled(true);
        }
        else {
            setscrolled(false);
        }
      }
      window.addEventListener("scroll",onScroll);
      return ()=>window.removeEventListener("scroll",onScroll);

    }, [])
    
    const onUpdateActiveLink = (value)=>{
        setactiveLink(value);
    }

  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <img src={''} alt="logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toogler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
                href="#home" 
                className= {activeLink === 'home' ? "active navbar-link": "navbar-link"}
                onClick={()=>onUpdateActiveLink('home')}
                    >Home
            </Nav.Link>
            <Nav.Link 
                href="#link"
                className= {activeLink === 'home' ? "active navbar-link": "navbar-link"}
                onClick={()=>onUpdateActiveLink('skills')}
                    >Skills
            </Nav.Link>
            <Nav.Link 
                href="#proyects"
                className= {activeLink === 'home' ? "active navbar-link": "navbar-link"}    
                onClick={()=>onUpdateActiveLink('Proyects')}
                    >Proyects
                </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
                <a href='#'><img src="" alt="" /></a>
                <a href='#'><img src="" alt="" /></a>
                <a href='#'><img src="" alt="" /></a>
            </div>
            <button className='vvd' onClick={()=> console.log('connect')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
