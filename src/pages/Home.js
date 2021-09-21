import React from 'react'
// import { useState} from 'react';
import Display from '../components/search/Display';
// import DisplayList from '../components/search/DisplayList'
import Member from '../components/modal/Member'
import Carousel from '../components/carousel/Carousel'
import Testimonial from '../components/Testimonial';



// import styled from 'styled-components'



//  renders all components related to search results and user input for modal
function Home(props) {
   

    
    return (
        <div id='home'>
            <Member />
            <Carousel />
            <Display schoolData={props.schoolData} />    {/* props that is rendering data from Search.js */}
            <Testimonial />
            {/* <Display /> */}
            {/* <Search /> */}
       
                   
        </div>
    )
}

export default Home
