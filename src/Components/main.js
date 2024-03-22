import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../images/amar.jpg';
import image2 from '../images/kiruma.jpg';
import image3 from '../images/dashuu.jpg';
import image4 from '../images/dalam.jpg';
import Corosel from '../Components/courosel';
import Scrollspy from '../Components/scrollspy';
import Services from '../Components/services';
import Partner from '../Components/partner';
import Contact from '../Components/contact';

const Main=()=>{
  useEffect(()=> {
    AOS.init({duration: 2000});
  }, [] )
    return(
        <>
       <Corosel/> 
<div className='container' id='members'>
<div class="jumbotron jumbotron-fluid text-center my-5">
  <div class="container">
    <h1 class="display-4">Welcome for all</h1>
    <p class="lead">Welcome to our software development compony. Here are our Leader to Organization.</p>
  </div>
</div>
    <div className='row'>
        <div className='col-md-3' data-aos="fade-up">  
        <div class="card" >
  <img src={image1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Prof. Amasu Suley</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Read More</a>
  </div>
</div>
            
               </div>

               <div className='col-md-3' data-aos="fade-down">  
        <div className="card" >
  <img src={image2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Prof. Frank kiruma</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Read More</a>
  </div>
</div>
            
               </div>

               <div className='col-md-3' data-aos="fade-left">  
        <div class="card" >
  <img src={image3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Dr. Shukran Juma</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Read More</a>
  </div>
</div>
            
               </div>
               <div className='col-md-3' data-aos="fade-right">  
        <div class="card" >
  <img src={image4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dr. Ilham Omar</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Read More</a>
  </div>
</div>
            
               </div>
     

    </div>
    
</div>

<Services/>

<Partner/>

<Contact/>
 
        </>
    );
};

export default Main;