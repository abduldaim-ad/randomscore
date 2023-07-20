import React, { useState } from 'react'
import CurrentStatus from './CurrentStatus'
import Power from './Power'
import GameResult from './GameResult'
import { useLocation } from 'react-router-dom';

const Game = ({ userName }) => {

    const [random, setRandom] = useState(0);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [powerCount, setPowerCount] = useState(0);
    const [status, setStatus] = useState("Game Results Here!");
    const [disableBtn, setDisableBtn] = useState(false);
    const [lastClick, setLastClick] = useState("")
    const [disableClick, setDisableClick] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const location = useLocation();

    const userData = {
        userName: location.state.userName,
        userScore: count + 1
    }

    return (
        <>
            <CurrentStatus count={count} score={score} random={random} setCount={setCount} setScore={setScore} setRandom={setRandom} setStatus={setStatus} userData={userData} powerCount={powerCount} disableBtn={disableBtn} setDisableBtn={setDisableBtn} lastClick={lastClick} setLastClick={setLastClick} disableClick={disableClick} setDisableClick={setDisableClick} />
            <Power disableBtn={disableBtn} setDisableBtn={setDisableBtn} powerCount={powerCount} setPowerCount={setPowerCount} random={random} lastClick={lastClick} setLastClick={setLastClick} />
            <GameResult status={status} setStatus={setStatus} count={count} score={score} setCount={setCount} setScore={setScore} setRandom={setRandom} setDisableBtn={setDisableBtn} setDisableClick={setDisableClick} showModal={showModal} setShowModal={setShowModal} setLastClick={setLastClick} setPowerCount={setPowerCount} />
        </>
    )
}

export default Game