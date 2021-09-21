
// import React, { useState } from "react";
import styled from 'styled-components'
import DisplayList from './DisplayList'




const Container = styled.div`
    background-color: #417d92;
    width: 100vw;
    height: 50vh;
    display: flex;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
`


function Display (props) {
    // console.log(props)
    // console.log('this is display page')
    
    return (
        <div >
            
            <Container>
            {/* <h1>School List</h1> */}
              { props.schoolData ? props.schoolData.map((item) => {
                 return (
                     <DisplayList key={item.schoolid} skool={item}  />
                 )
             }): null} 
            </Container>

            


           
            
        </div>
    )
}

export default Display
