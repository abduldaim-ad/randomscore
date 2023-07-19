import React, { useState } from 'react'
import Power from './components/Power';
import GameResult from './components/GameResult';
import CurrentStatus from './components/CurrentStatus';
import {
  createHashRouter,
  Link,
} from "react-router-dom";
import User from './components/User';
// import styled from 'styled-components';

const App = () => {

  const [random, setRandom] = useState(0);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [powerCount, setPowerCount] = useState(0);
  const [status, setStatus] = useState("Game Results Here!");
  const [disableBtn, setDisableBtn] = useState(true);
  const [lastClick, setLastClick] = useState("")
  const [disableClick, setDisableClick] = useState(true)
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const userData = {
    userName,
    userScore: count + 1
  }

  // const Wrapper = styled.section`
  //   background-color:green;
  // `

  return (
    <>
      {/* <Wrapper> */}
      <User userName={userName} setUserName={setUserName} setDisableBtn={setDisableBtn} setDisableClick={setDisableClick} />
      <CurrentStatus count={count} score={score} random={random} setCount={setCount} setScore={setScore} setRandom={setRandom} setStatus={setStatus} userData={userData} powerCount={powerCount} disableBtn={disableBtn} setDisableBtn={setDisableBtn} lastClick={lastClick} setLastClick={setLastClick} disableClick={disableClick} setDisableClick={setDisableClick} />
      <Power disableBtn={disableBtn} setDisableBtn={setDisableBtn} powerCount={powerCount} setPowerCount={setPowerCount} random={random} lastClick={lastClick} setLastClick={setLastClick} />
      <GameResult status={status} setStatus={setStatus} count={count} score={score} setCount={setCount} setScore={setScore} setRandom={setRandom} setDisableBtn={setDisableBtn} setDisableClick={setDisableClick} showModal={showModal} setShowModal={setShowModal} />
      {/* </Wrapper> */}
    </>
  )
}

const router = createHashRouter([
  {
    path: "/",
    element: (
      <div>
        <Link to="game">Game</Link>
      </div>
    ),
  },
  {
    path: "game",
    element: <App />,
  },
]);

export default App
export { router };