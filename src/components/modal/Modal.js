import React, {useState} from 'react'
import styled from 'styled-components'
import { GlobalStlyes } from '../../GlobalStlyes';
import ModalComponent from './ModalComponent';

const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 20vh
`;

const Button = styled.button`
    min-width: 100px;
    margin-top: 1em;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #417d92;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;


function Modal() {
const [modalView, setModalView] = useState(false)

const openModal = () => {
    setModalView(prev => !prev)
}

    return (
        <div >
        <Container>
        <Button onClick={openModal}> Become A Member </Button>
        <ModalComponent modalView={modalView} setModalView={setModalView} />
        <GlobalStlyes/>
        </Container>
        
        </div>
    )
}

export default Modal
