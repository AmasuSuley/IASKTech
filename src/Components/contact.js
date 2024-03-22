import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";




const Contact=()=>{
    useEffect(()=> {
        AOS.init({duration: 2000});
      }, [] )
    
    return(
        
        <>
        <div className="container text-center" id='contact'>
            <h1 className='text-center my-5'>Contact</h1>
  <div className="row align-items-center">
    <div className="col-md-6" data-aos="fade-up">
    <div className="col-md-6 mb-md-0 mb-6">
                
                <ul className="list-unstyled">
                    <li><IoLocationSharp  />     Cive Block 1</li>
                    <li><MdOutlineMail /> ammarmassoud46@gmail.com</li>
                    <li><FaPhone /> +255 629 289 071</li>
                
                </ul>
            </div>
   
    </div>

    <div className="col-md-6" data-aos="fade-up">
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  
</div>
<button className=" btn btn-primary my-5">Submit</button>
    </div>
    
  </div>
</div>
        </>
    )
}
export default Contact;