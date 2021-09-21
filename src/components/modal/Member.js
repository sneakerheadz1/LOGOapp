// import React, {useState}  from 'react'
import styled from 'styled-components'
import Modal from './Modal'


const Container = styled.div`
    h1 {
        color: white;
        padding-top: 3em;
    }

    .overlay {
        background-color: rgba(0,0,0.3,0.9);


    }

`



function Member() {

    return (
        <div id='member' className="overlay">
            <Container>
        <h1>Provide a helping hand to the youth, Become a Mentor!</h1>
        {/* <Modal></Modal> */}
        </Container>
        <Modal></Modal>
       
        
        </div>
    )
}

export default Member
