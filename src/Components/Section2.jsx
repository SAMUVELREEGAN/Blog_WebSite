import React from 'react'

const Section2 = () => {
  return (
    <div>
        <div className="sec2_title" style={{height:"200px"}}>
        <h1 className='sec2_head'>Efficiency At It Best: Dream Sleep Vibes <h2>Calm Your Mind</h2></h1>
        </div>
        <div className="sec2_info">
            <div className="sec2_left">
                <div style={{marginTop:"15%"}}></div>
                <div className='sec2_one mt-5'>
                    <h4>✔️ Account Transfer</h4>
                    <h1>Golbal Payments: Your Gateway To Secure Transactions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus vitae libero facilis, reprehenderit aliquam repellat voluptates neque ex corrupti nam.</p>
                </div>
            </div>
            <div className="sec2_right">
                <div className="one">
                <div className="two mt-3">
                    <h2 className='mt-1 pt-4' >Amount</h2>
                    <h5>Send Money</h5>
                    <div style={{display:"flex",justifyContent:"space-between",margin:"-30px 20px",backgroundColor:"pink",borderRadius:"25px",padding:"0px 20px"}}>
                    <span>
                        <h6>$2,348</h6>
                        <p>Special Offer $1,98.00</p>
                    </span>
                    <select style={{borderRadius:"10px",backgroundColor:"transparent"}}> 
                        <option>🏳️‍⚧️india</option>
                        <option>🏳️‍⚧️America</option>
                        <option>🏳️‍⚧️America</option>
                    </select>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between",margin:"50px 40px"}}>
                    <h3>Who are you <br />sending money to</h3>
                    <select style={{margin:"5px 10px",backgroundColor:"transparent",borderRadius:"10px"}}>
                        <option ><span>🧑‍💼</span>Name 1</option>
                        <option><span>🧑‍💼</span>Name 2</option>
                        <option><span>🧑‍💼</span>Name 3</option>
                        <option><span>🧑‍💼</span>Name 4</option>
                    </select>
                    </div>
                    <div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <button style={{backgroundColor:"black",color:"white",padding:"5px 10px", borderRadius:"5px",margin:"9px 0px",marginTop:"-35px"}}>Conform and Send</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Section2