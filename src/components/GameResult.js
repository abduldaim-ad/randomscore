import React from 'react'
import { styled } from 'styled-components'
import Modal from './Modal';

const GameResult = ({ status, setStatus, count, score, setCount, setScore, setRandom, setDisableClick, setDisableBtn, showModal, setShowModal, setLastClick, setPowerCount }) => {

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
                margin: 5px;
                cursor:pointer;
                border:2px solid black;
                box-shadow: 2px 2px 5px 5px grey;
                background-color: green;
                border-radius:10%;
                font-weight:bold;
                &:hover{
                    background-color: grey;
                }
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
        setLastClick("")
        setPowerCount(0);
    }

    return (
        <>
            <Wrapper>
                <h3>{status}</h3>
                <div>
                    <button onClick={() => handleShowModal()}>Show Game Stats</button>
                    <button onClick={() => restartGame()}>Restart Game</button>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </Wrapper>
        </>
    )
}

export default GameResult