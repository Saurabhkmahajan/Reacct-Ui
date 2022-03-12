import React from 'react';

class Range extends React.Component{
    render(){
        return(
            <>
            <label for="disabledRange" class="form-label"style={{marginTop:'12px'}}>Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled></input>
            </>
        );
    }
}
  export default Range;