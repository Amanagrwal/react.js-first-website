import React  from 'react'
import { NavLink } from 'react-router-dom'
// import Web from "../src/image/about img.webp"

function Card(proops) {

  return (
   <>
   
      <div className="col-md-4 col-10 mx-auto" >
        <div className="card" >
        <img src={proops.imgsrc} className="card-img-top" alt="..."/>
       <div className="card-body">
       <strong className='name'><p className='p-tag'>company:- {proops.name}</p></strong>
       <h5 className="card-title mt-2 font-weight-bold">{proops.des.slice(0,76)}</h5>
       <p clasNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       
    <NavLink to="#" className="btn btn-outline-primary">Go somewhere</NavLink>
     </div>
    </div>
  </div>
   

       
   </>
  )
}

export default Card
