import React from 'react';



export default props => (
     
    <div className='card'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a className="btn btn-primary col-lg-1" href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} role="button">Location</a>
    
</div>


     );