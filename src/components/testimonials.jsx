import React from 'react';
import Person from "./person"


const Testimonial = (props) => {
    return ( 
        <div className="testimonial">
        
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          {Person.map(person => 
            <div className= {person.id===1 ? "carousel-item active" : "carousel-item" } >
            <div className="info">
                <h5>{person.comment}</h5>
                <img src={person.image} className="profilepic" alt="profile" /> 
                <p>{person.name}</p>
                </div>
            </div>
          )}
          </div>
        </div>

        </div>
     );
}
 
export default Testimonial;