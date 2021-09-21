import React from 'react'



function DisplayList(props) {
    // console.log("this is props", props.skool.address)
    console.log("this is display list", props.skool)
    
    return (
        <div className='display'>
            
            <div id='display-card'>

            <figure className ='image is 100x100' >
                <img src=""  alt=""  />
            </figure>
            <h5>School Name: {props.skool.schoolName} </h5>
            <span>Address: {props.skool.address.street}  </span> 
            <span>State: {props.skool.address.state}  </span> 
            <span>Zip Code: {props.skool.address.zip} </span> 
           </div>

        </div>
    )
}

export default DisplayList