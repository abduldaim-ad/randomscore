import React, { useRef } from 'react'
import { styled } from 'styled-components';

const Wrapper = styled.section`
    div{
        margin:1%;
        display:grid;
        place-items:center;
        input{
            background-color:black;
            margin:1%;
        }
    }
`

const User = ({ userName, setUserName, setDisableClick, setDisableBtn }) => {

    const inputRef = useRef(null);

    const handleInputChange = () => {
        setUserName(inputRef.current.value);
        if (inputRef.current.value) {
            setDisableBtn(false)
            setDisableClick(false)
        }
        else {
            setDisableBtn(true)
            setDisableClick(true)
        }
    };

    return (
        <Wrapper>
            <div>
                <input type="text" ref={inputRef} onChange={handleInputChange} />
                <p>Enter Username to Play the Game: {userName}</p>
            </div>
        </Wrapper>
    );
}

export default User