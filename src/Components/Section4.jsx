import React, { useState } from 'react'
import one from '../assets/11.jpg'
import two from '../assets/2.jpg'

const Section4 = () => {
    const [volume, setVolume] = useState(1);  // State to keep track of volume

  // Handle the volume change
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  // Calculate volume percentage
  const volumePercentage = Math.round(volume * 100);

  // Determine the label color based on the volume level
  let labelColor = "green";
  if (volume === 0) {
    labelColor = "red";  // Mute color
  } else if (volume < 0.5) {
    labelColor = "orange";  // Low volume color
  }
  return (
   <div>
     <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",textAlign:"center",margin:"50px 30px"}} className='sec4_info'>
        <div style={{width:"100%"}}>
            <h1>Enjoy every Seconds</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nisi sapiente nobis nulla sed temporibus iste ducimus eveniet, provident quaerat atque perspiciatis, fugiat voluptates iure maxime. Ab adipisci quas quos.</p>
            <button style={{backgroundColor:"black", color:"white",borderColor:"white",padding:"5px 10px",borderRadius:"5px", boxShadow:"-2px -2px 5px black",marginRight:"10px"}}>Click Me</button>
            <button style={{backgroundColor:"black", color:"white",borderColor:"white",padding:"5px 10px",borderRadius:"5px", boxShadow:"-2px -2px 5px black"}}>Play Sound</button>
        </div>
        <div>
            <img src={one} alt="" width={"700px"}/>
        </div>
    </div>
     <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",textAlign:"center",margin:"50px 30px"}} className='sec4_info'>
     <div>
            <img src={two} alt="" width={"700px"}/>
        </div>
        <div>
        <div style={{width:"100%"}}>
            <h1>Enjoy every Seconds</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nisi sapiente nobis nulla sed temporibus iste ducimus eveniet, provident quaerat atque p
                erspiciatis, fugiat voluptates iure maxime. Ab adipisci quas quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa modi aspernatur, molestiae voluptates repellat distinctio nam. Reiciendis, impedit dignissimos!</p>
           
        </div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vitae saepe, magnam veritatis ad quas, cumque dolorem enim nemo nisi ipsa tempora fugit dignissimos exercitationem aspernatur impedit laudantium! Eaque asperiores <br />soluta quas quam quos ad temporibus repellat laboriosam vitae possimus debitis nulla reprehenderit quaerat aliquid commodi, cupiditate ea accusantium officia.</p>
        <div>
        <div className="volume-container my-4 mt-5">
        <label htmlFor="volume">Volume1:</label>
        <input type="range" id="volume" className="volume-slider" min="0" max="1" step="0.01" value={volume} onInput={handleVolumeChange} />
        <span id="volumeLabel" style={{ color: labelColor }} > {volumePercentage}% </span>
      </div>
        <div className="volume-container my-4">
        <label htmlFor="volume">Volume2:</label>
        <input type="range" id="volume" className="volume-slider" min="0" max="1" step="0.01" value={volume} onInput={handleVolumeChange} />
        <span id="volumeLabel" style={{ color: labelColor }} > {volumePercentage}% </span>
      </div>
        <div className="volume-container my-4">
        <label htmlFor="volume">Volume3:</label>
        <input type="range" id="volume" className="volume-slider" min="0" max="1" step="0.01" value={volume} onInput={handleVolumeChange} />
        <span id="volumeLabel" style={{ color: labelColor }} > {volumePercentage}% </span>
      </div>
        <div className="volume-container my-4">
        <label htmlFor="volume">Volume4:</label>
        <input type="range" id="volume" className="volume-slider" min="0" max="1" step="0.01" value={volume} onInput={handleVolumeChange} />
        <span id="volumeLabel" style={{ color: labelColor }} > {volumePercentage}% </span>
      </div>
     <div className='mt-5'>
     <button style={{backgroundColor:"black", color:"white",borderColor:"white",padding:"5px 10px",borderRadius:"5px", boxShadow:"-2px -2px 5px black",marginRight:"10px"}}>Click Me</button>
            <button style={{backgroundColor:"black", color:"white",borderColor:"white",padding:"5px 10px",borderRadius:"5px", boxShadow:"-2px -2px 5px black"}}>Play Sound</button>
            
     </div>
        </div>
        </div>
    </div>
   </div>
  )
}

export default Section4