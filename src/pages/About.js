import React from 'react'
import styled from 'styled-components'

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     grid-template-columns: 1fr 1fr;
//     height: 100vh;

// `


function About() {
    return (
       
        <div id="about-section">
            <div className= "inner-container">
                <h1>About LoGO</h1>
                <p className="text">
                As a kid growing up in the inner city I was too young to understand and appreciate how the subtle nudges and guidance from teachers and
                 other positive adults would play in my future success. When I became an adult and started to reflect on my past I was able to acknowledge 
                 how important those influences were in helping me navigate through some of life’s choices. While looking around the world today I noticed 
                 there is still a gap in education and resources within lower-income communities and assisting in the goal to help educate the youth is the foundation 
                 of this Idea.
                </p>
                <div className="add-ons">
                    <span>LinkedIn</span>
                    <span>Github</span>
                    <span>Resume</span>
                </div>
            </div>
      
            
        
        </div>
       
    )
}

export default About
