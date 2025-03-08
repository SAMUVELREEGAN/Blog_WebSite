import React from 'react'
import ap from '../assets/ap.png'

const Section1 = () => {
  return (
   <div className="sec_body">
     <div class="box1">
    <h1>Welcome To Sleep App</h1>
     <p>Relax , fall asleep fast and wake up happy</p>
     <button style={{display:"flex",height:"55px",width:"13%",justifyContent:"center",borderRadius:"10px"}} className='sec_btn'>
      <img src={ap} width={"55px"} style={{margin:"0px 0px 0px -20px"}} />
      <div style={{display:"flex",flexDirection:'column',width:"100px"}}>
      <span style={{fontSize:"10px",marginLeft:"-10px"}}>download on the</span>
      <span style={{fontSize:"20px"}}>App Store</span>
      </div>
      </button>
    </div>
   </div>
  )
}

export default Section1