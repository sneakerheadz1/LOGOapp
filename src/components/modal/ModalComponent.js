import React from 'react'
import styled from 'styled-components'
import Modal from './Modal';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100px;
    height: 250px;
    background: rgba(0,0,0,0.8);
    /* position: fixed; */
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    width: 350px;
    height: 350px;
    box-shadow: rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 10px;
    border-radius: 10px;
`;

const ModalContent = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.4;
    /* color: #141414; */

    p {
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #417d92;
        color: #fff;
        border: none;
    }
`;

const Closemodal = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right:20px;
    width: 32px;
    height:32px;
    padding: 0;

`


function ModalComponent({modalView, setModalView}) {
    return (
      <div>
        {modalView ? (
          <Background>
            <ModalWrapper modalView={modalView}>
              <ModalContent>
                <form id="modal-form">
                <p>fill out form to become a member</p>
                  <label for="name">
                    Enter Name
                  </label>
                  <input id="name" placeholder="Enter Name..." />
                  <br/>
                  <label for="email">
                    Enter Email
                  </label>
                  <input id="email" placeholder="Enter Email..." />
                </form>
                <button>Submit</button>
                <Closemodal
                  onClick={() => setModalView((prev) => !prev)}
                ></Closemodal>
              </ModalContent>
            </ModalWrapper>
          </Background>
        ) : null}
      </div>
    );
}

export default ModalComponent
