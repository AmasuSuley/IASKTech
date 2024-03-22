import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ComponentDisplay from './Components/component1';
import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
 
<Header/>
<Main/>
<Footer/>

 
 </div>





 
);

