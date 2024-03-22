import React from 'react';
import image1 from '../images/amasu.jpg';
import { FaCamera } from "react-icons/fa";

const Component1=()=>{
    return(
        <>
     


<div className='container'>
    <h1 className='text-centre text-success my-5'>MY OFFICIAL CARDS</h1>
    <div className='row'>
        <div className='col-md-3'>  
        <div class="card" >
  <img src={image1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            
               </div>

               <div className='col-md-3'>  
        <div className="card" >
  <img src="https://images.pexels.com/photos/11039194/pexels-photo-11039194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            
               </div>

               <div className='col-md-3'>  
        <div class="card" >
  <img src="https://images.pexels.com/photos/11039194/pexels-photo-11039194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            
               </div>
               <div className='col-md-3'>  
        <div class="card" >
  <img src="https://images.pexels.com/photos/11039194/pexels-photo-11039194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            
               </div>
     

    </div>
</div>

<FaCamera  className='icons '/>

</>
    );
};

export default Component1;