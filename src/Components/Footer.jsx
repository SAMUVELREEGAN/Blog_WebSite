import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    
  return (
    <div style={{backgroundColor:"black" , color:"white",height:"200px" }}>
        <div style={{ fontSize:"50px", alignItems:"center",textAlign:"center"}}>
            This Using Only Prue CSS...✔️ <br />
            Thank You ...❤️
        </div>
       <div style={{display:"flex",float:"right",margin:"0px 10px"}}>
       Go To <Nav.Link href="/" style={{color:"red",margin:"0px 10px"}}>Home</Nav.Link>
       </div>
    </div>
  )
}

export default Footer