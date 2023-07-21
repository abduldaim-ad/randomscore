import React, { useState } from 'react'
import {
  createHashRouter,
} from "react-router-dom";
import User from './components/User';
import Game from './components/Game';

const App = () => {

  const [userName, setUserName] = useState("");

  return (
    <>
      <User userName={userName} setUserName={setUserName} />
    </>
  )
}

const router = createHashRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "game",
    element: <Game />,
  },
]);

export default App
export { router };