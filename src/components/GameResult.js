import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Modal from './Modal';

const GameResult = ({ status, setStatus, count, score, setCount, setScore, setRandom, setDisableClick, setDisableBtn, showModal, setShowModal }) => {

    const Wrapper = styled.section`
        h3{
            display:grid;
            place-items:center;
        }
        div{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:center;
            button{
            padding:1rem;
            cursor:pointer;
            margin: 5px;
            }
        }
    `;

    const handleShowModal = () => {
        setShowModal(true)
    }

    const restartGame = () => {
        setCount(0)
        setScore(0)
        setRandom(0)
        setDisableClick(false)
        setDisableBtn(false)
        setStatus("Game Results Here!")
    }

    return (
        <>
            <Wrapper>
                <h3>{status}</h3>
                <div>
                    <button onClick={() => handleShowModal()}>Show Game Stats</button>
                    <button onClick={() => restartGame()}><strong>Restart Game</strong></button>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </Wrapper>
        </>
    )
}

export default GameResult