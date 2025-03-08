import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Headers = ({theme, toggleTheme}) => {
    const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className='me-auto'>
        <NavDropdown
          title="Dropdown1"
          id="basic-nav-dropdown"
           className="custom-dropdown"
          show={show}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" style={{width:"300px",height:"200px"}}>
          <h3>Heading</h3>
          <span >Lorem, ipsum dolor sit amet consec <br />tetur adipisicing elit. Cum incidunt temp <br />oribus isteullam deleniti! Amet qua <br />erat laboriosam sed quasi <br />similique.</span>
          <br />
          <button style={{backgroundColor:"black" , color:"white" , borderRadius:"10px"}}>Button</button>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="Dropdown2"
          id="basic-nav-dropdown"
           className="custom-dropdown"
          show={show}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" style={{width:"300px",height:"200px"}}>
          <h3>Heading</h3>
          <span >Lorem, ipsum dolor sit amet consec <br />tetur adipisicing elit. Cum incidunt temp <br />oribus isteullam deleniti! Amet qua <br />erat laboriosam sed quasi <br />similique.</span>
          <br />
          <button style={{backgroundColor:"black" , color:"white" , borderRadius:"10px"}}>Button</button>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title="Dropdown3"
          id="basic-nav-dropdown"
           className="custom-dropdown"
          show={show}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" style={{width:"300px",height:"200px"}}>
          <h3>Heading</h3>
          <span >Lorem, ipsum dolor sit amet consec <br />tetur adipisicing elit. Cum incidunt temp <br />oribus isteullam deleniti! Amet qua <br />erat laboriosam sed quasi <br />similique.</span>
          <br />
          <button style={{backgroundColor:"black" , color:"white" , borderRadius:"10px"}}>Button</button>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
          <Navbar.Brand href="#home">Gud Dreams</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <button onClick={toggleTheme} className='me-auto'>{theme ==='light' ? 'light' : 'dark'}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Headers