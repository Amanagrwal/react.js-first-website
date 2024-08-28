import React , { useEffect, useState }from 'react'
import Card from './Card'


function Service() {
  const [data,setdata] = useState([])
  const Getdata =  async()=>{
    try{
      const res =  await fetch("https://api.pujakaitem.com/api/products");
      const data = await res.json();
      setdata(data);
    } catch(err){
      console.log(err);
   }
  }
   useEffect(()=>{
    Getdata();
   }, []);

  return (
   <>
     <div className="my-5">
      <h1 className='text-center'>our services</h1>
     </div>
     <div className="container-fluid  mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">



    <div className="row gy-5">
       {data.map((val, index) => (
         <Card
      key={index}
      imgsrc={val.image}
      des={val.description}
      name={val.name}
    />
  )) }
</div>

         
          
          </div>
        </div>
      </div>
     </div>
   </>
  )
}

export default Service
