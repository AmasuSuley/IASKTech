import React from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import '../index.css';



const corosel=()=>{
    return(
        <>
  <div className='fluid' id='home'>
    
<Carousel > 
        <Carousel.Item interval={1000} className='corosel'> 
          <img 
            className="d-block w-100"
src="https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <h3 className='text-dark'>Building healthy digital systems that thrive on change</h3> 
           
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={2000} className='corosel'> 
          <img 
            className="d-block w-100"
src="https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            <h3 className='text-dark'>As one of the world’s largest ITService Providers, our deep pool of certified engineers and IT support staff are ready to help.</h3> 
            
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={3000} className='corosel'> 
          <img 
            className="d-block w-100"
src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            <h3 className='text-warning'>Provide users with appropriate view and access permissions to requests, problems, changes, contracts, assets, solutions, and reports with our experienced professionals.</h3> 
             
          </Carousel.Caption> 
        </Carousel.Item>
      </Carousel> 
    </div>




        </>
    )
}
export default corosel;