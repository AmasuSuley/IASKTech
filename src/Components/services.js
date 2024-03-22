import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  Carousel  from 'react-bootstrap/Carousel';
import '../index.css';



const Services=()=>{

    useEffect(()=> {
        AOS.init({duration: 2000});
      }, [] )
      
    return(
        <>
       

<div className="container text-center" id='service'>
            <h1 className='text-center my-5'>Services</h1>
  <div className="row align-items-center">
    <div className="col-md-6" data-aos="fade-up">
    <div class="card"  id='card'>
  <div class="card-body">
    <h5 class="card-title">Improve Efficiency And Provide Better Experience By Our IT Solutions!</h5>
    
    <p class="card-text">Crescentech is a leading specialist in the world of Information and Communications Technology (ICT). Besides being 
    committed to providing comprehensive ICT solutions to SME and enterprise businesses, we offer flexible and specialized ICT services and support as well as strategic consultancy services.

As an ICT solution, infrastructure and service-focused company our focus is to work with our customers to ensure that their respective ICT functions achieve their organizations’ business needs and objectives.</p>
    <a href="#" class="card-link">Get Link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>
    <div className="col-md-6" data-aos="fade-up">
    <div className='div-out'data-aos="zoom-in" id='service' >
  <div className='service-div' >
    
    
<Carousel > 
        <Carousel.Item interval={1000} className='corosel' > 
          <img 
            className="d-block w-100"
src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlY3VyaXR5fGVufDB8fDB8fHww"
            alt="Image One"
          /> 
          <Carousel.Caption> 
        
            <p>This is some placeholder content for the scrollspy page. Note that as you sc
           .</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={2000} className='corosel' > 
          <img 
            className="d-block w-100"
src="https://plus.unsplash.com/premium_photo-1661331911412-330f2e99cf53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvbXB1dGVyfGVufDB8fDB8fHww"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            
            <p>This is some placeholdee copy here to emphasize the scrolling and highlighting.</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={3000} className='corosel'> 
          <img 
            className="d-block w-100"
src="https://media.istockphoto.com/id/683617400/photo/web-hosting-concept-on-tablet-screen-with-office-objects.webp?b=1&s=170667a&w=0&k=20&c=PdFzPYe0xhllNliMY0NhoIRoR59v9zhnsrOP-yexNP0="
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            
            <p>This is scrollspy page. Note thatghted. It's repeated crolling and highlighting.</p> 
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item interval={4000} className='corosel'> 
          <img 
            className="d-block w-100"
src="https://images.unsplash.com/file-1695862017053-979d119af2a6image?dpr=2&w=416&auto=format&fit=crop&q=60"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            
            <p>This is some placeholdeink is highlighted. It's repeated crolling and highlighting.</p> 
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item interval={5000} className='corosel'> 
          <img 
            className="d-block w-100"
src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VjdXJpdHl8ZW58MHx8MHx8fDA%3D"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            
            <p>This is some plage. Note that as you scrollrepeated crolling and highlighting.</p> 
          </Carousel.Caption> 
        </Carousel.Item>
        <Carousel.Item interval={6000} className='corosel'> 
          <img 
            className="d-block w-100"
src="https://images.unsplash.com/photo-1590613607026-15c463e30ca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNlY3VyaXR5fGVufDB8fDB8fHww"
            alt="Image Two"
          /> 
          <Carousel.Caption> 
        
            <p>This is s the scrollspy page. No link is highlighted. It's repeated crolling and highlighting.</p> 
          </Carousel.Caption> 
        </Carousel.Item>
      </Carousel> 
    </div>

</div>

    
  </div>

  <div className="col-md-6" data-aos="fade-up">
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-dark">Linked services</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-dark">Get Services</a>
      </div>
    </div>
  </div>
</div>
  </div>

  <div className="col-md-6" data-aos="fade-up">
    <img src='https://img.freepik.com/premium-vector/cloud-hosting-logo-vector-design-with-concept-server-cloud-icon-hosting-provider_35799-94.jpg?size=626&ext=jpg&ga=GA1.2.1864693554.1700896653&semt=ais'></img>
    
    
  </div>
</div>
</div>


        </>
    )
}
export default Services;