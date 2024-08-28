import React, { useState } from 'react'

function Contact() {
const [data ,Setdata] = useState({
  Fullname:"",
  phone:"",
  email:"",
  msg:"",
});
 const Formsubmit = (e)=>{
    e.preventDefault();
    alert(` my FullName is ${data.Fullname} my mobile number is ${data.phone} email:- ${data.email} my commant is ${data.msg}  `)
 }
 const InputEvent = (event)=>{
    //  const value = event.target.value;
    //  const name = event.target.name;

     const {name , value} = event.target
    
     Setdata((preval)=>{
      return {
         ...preval ,
        [name] : value ,
      }
     })
 }

  return (
       <>
<div className="my-5">
  <h1 className='text-center'>contact us </h1>
</div>
<div className="container contact_div">
  <div className="row">
    <div className="col-md-6 col-10 mx-auto">

    < form onSubmit={Formsubmit}>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">
      Full Name</label>
    <input type="text"
     className="form-control"
      id="exampleInputEmail1"
      name="Fullname"
      value={data.Fullname}
      onChange={InputEvent}
      
      placeholder='Enter Your Full Name'
       aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">
      Mobile Number</label>
    <input type="number"
     className="form-control"
     name="phone"
     value={data.phone}
     onChange={InputEvent}
      id="exampleInputEmail1"
      placeholder='Enter Your Mobile Number'
       aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">
      Email address</label>
    <input type="email"
     className="form-control"
      id="exampleInputEmail1"
      placeholder='Enter Your Email'
      name="email"
      value={data.email}
      onChange={InputEvent}
       aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">
    Textarea</label>
  <textarea className="form-control"
   id="exampleFormControlTextarea1"
   name="msg"
   onChange={InputEvent}
    rows="3"
     placeholder='massage'
    >
    </textarea>

</div>
  <button type="submit" className=" btn btn-outline-primary">Submit</button>
</form>

    </div>
  </div>
</div>
        </>
  )
}

export default Contact