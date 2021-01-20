import React from 'react';
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import Info from "./info"

const Intro = () => {
    return ( 
    <div className="intro">

    <div className="row" style={{alignItems:"center"}} >
      
      <div className="col md-6" >
      <div className="move">
      <h1>{Info[0].tagline}</h1>
      <p>{Info[0].para}</p>
      </div>

      <div className="buttons" >
      <button type="button" class="btn btn-lg" style={{backgroundColor:"orangered", color:"white"}} >ORDER NOW</button>
      </div>

      <div className='availability' style={{lineHeight:0.5}}>
      <p>Now available at</p>
      <p style={{color:"#000"}} >{Info[0].city}</p>
      </div>

      </div>

      <div className="col md-6">
      
      <div id="cf">
        <img className="bottom burger" src={img2} alt="burger" height="300" width="300" />
        <img className="top burger" src={img1} alt="burger" height="300" width="300" />
      </div>

      </div>

    </div>
    </div>
     );
}
 
export default Intro;