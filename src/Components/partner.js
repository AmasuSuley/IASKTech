import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Partner=()=>{
    useEffect(()=> {
        AOS.init({duration: 2000});
      }, [] )

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
      };
    return(
        <>
<div className='minContainer' id='partner'>
    <h1 className='text-center my-5'>partner</h1>
    <Slider {...settings}>
        
        <div className='container'>
      
      <img src='https://ecowaterinternational.com/_nuxt/img/Aquasolis%20Global.399a4a8.png'></img>
      
      </div>
      <div className='container'>
      
      <img src='https://ecowaterinternational.com/_nuxt/img/logo_color_r.46a3678.png'></img>
      
      </div>
      <div className='container'>
      
      <img src='https://ecowaterinternational.com/_nuxt/img/USADF.1707c33.png'></img>
      </div>
      
      <div className='container'>
      
      <img src='https://ecowaterinternational.com/_nuxt/img/ihub.431d51b.png'></img>
      
      </div>
      <div className='container'>
      
      <img src='https://ecowaterinternational.com/_nuxt/img/Aquasolis%20Global.399a4a8.png'></img>
      </div>
      
      <div className='container'>
      
      <img src='https://ecowaterinternational.com/_nuxt/img/vodacom-mpesa.adcd97a.svg'></img>
      </div>
      
      
      
    </Slider>
  </div>
  

        </>
    )
}

export default Partner;