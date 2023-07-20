import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.section`
    div{
        margin:1%;
        height:100vh;
        display:grid;
        place-items:center;
        input{
            background-color:black;
            margin:1%;
            padding:3%;
            font-size:20px;
            text-align:center;
        }
        button{
            padding:2%;
            cursor:pointer;
            border:2px solid black;
            box-shadow: 2px 2px 5px 5px grey;
            background-color: green;
            border-radius:10%;
            &:hover{
                background-color: grey;
                padding:2.5%;
            }
        }
        h3{
            background-color:red;
            color:white;
        }
    }
`

const User = ({ userName, setUserName }) => {

    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleInputChange = () => {
        setUserName(inputRef.current.value);
    };

    const handlePlayGame = () => {
        if (inputRef.current.value) {
            navigate('/game', { state: { userName: inputRef.current.value } })
        }
        else {
            setError("Enter Your Name to Proceed!!!")
        }
    }

    return (
        <Wrapper>
            <div>
                <h2>Enter Your Name</h2>
                <input type="text" ref={inputRef} onChange={handleInputChange} autoFocus />
                <button onClick={() => handlePlayGame()}>Play Game</button>
                <h3>{error}</h3>
            </div>
        </Wrapper>
    );
}

export default User