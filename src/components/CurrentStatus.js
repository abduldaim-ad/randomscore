import React from 'react'
import { styled } from 'styled-components';

const CurrentStatus = ({ count, score, random, setCount, setScore, setRandom, setStatus, userData, powerCount, disableBtn, setDisableBtn, lastClick, setLastClick, disableClick, setDisableClick }) => {

    const Wrapper = styled.section`

        h1, h3{
            display:grid;
            place-items:center;
        }

        div{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-around;
            margin:3%;
        }

        button{
            background-color:${disableClick ? "grey" : "red"};
            padding:2rem;
            box-shadow: 5px 5px 10px 10px grey;
            cursor:pointer;
            border-radius:20%;
            margin:auto;
            &:hover{
                background-color:${disableClick ? "grey" : "green"};
            }
        }
    `;

    const randomNumber = () => {
        let tempNum;
        if (lastClick !== "Even" && lastClick !== "Odd")
            tempNum = Math.floor(Math.random() * 11);
        else if (lastClick === "Even") {
            tempNum = Math.floor(Math.random() * 6) * 2;
        }
        else if (lastClick === "Odd")
            tempNum = Math.floor(Math.random() * 5) * 2 + 1;

        setRandom(tempNum);
        setScore(score + tempNum);
        setCount(count + 1)
        setLastClick("")

        if (score + tempNum === 50) {
            const existingData = JSON.parse(localStorage.getItem("userData")) || []
            const updatedData = [...existingData, userData];
            updatedData.sort((a, b) => a.userScore - b.userScore);
            localStorage.setItem("userData", JSON.stringify(updatedData));
            console.log("userData: " + JSON.stringify(userData))
            setDisableClick(true)
            setDisableBtn(true)
            if (updatedData[0].userScore === userData.userScore) {
                setStatus("You have won the game. You have set the highest score.")
            } else {
                setStatus("You are the winner");
            }
        }
        else if (score + tempNum > 50) {
            setStatus("You have lost the game");
            setDisableClick(true)
            setDisableBtn(true)
        }
        if (powerCount < 2 && disableBtn) {
            setDisableBtn(!disableBtn)
        }
    }

    return (
        <>
            <Wrapper>

                <h1>Random Score Game</h1>
                <h3>Welcome {userData.userName}</h3>

                <div>
                    <h2>Count: {count}</h2>
                    <button onClick={() => { randomNumber() }} disabled={disableClick}>Click Me</button>
                    <h2>Score: {score}</h2>
                </div>

            </Wrapper>
        </>
    )
}

export default CurrentStatus