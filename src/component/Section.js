

import React from "react";

class Section extends React.Component {

    render() {
        return (
            <>
         <div className="card" style={{marginTop:'18px', backgroundColor:'pink'}}>
  <div className="card-header" style={{color:'blue'}}>
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title" style={{color:'red'}}>Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="https://picsum.photos/seed/picsum/200/300" className="btn btn-primary" style={{color:'yellow'}}>Go somewhere</a>
  </div>
</div>
            </>
        );
    }
}
export default Section;