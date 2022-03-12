

import React from 'react';
 
 class Footer extends React.Component{
     render(){
         return(
             <>

<div className="card text-center" style={{backgroundColor:'black',marginTop:'22px'}}>
  <div className="card-header" style={{color:'orange'}}>
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title"  style={{color:'white'}}>Special title treatment</h5>
    <p className="card-text"  style={{color:'white'}}>With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary" style={{color:'yellow'}}>Go somewhere</a>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>

             </>
         );
     }
 }
   export default Footer;