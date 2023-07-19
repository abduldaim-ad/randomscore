import React from 'react'
import { styled } from 'styled-components';

const Power = ({ disableBtn, setDisableBtn, powerCount, setPowerCount, random, lastClick, setLastClick }) => {

    const Wrapper = styled.section`
        section{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-around;
            margin:2%;
            padding:2%;
            border: 5px solid black;
            background-color:black;
            box-shadow: 2px 2px 2px 2px grey;
            border-radius:20%;
        }
        button{
            background-color:red;
            padding:2rem;
            box-shadow: 5px 5px 10px 10px grey;
            cursor:pointer;
            border-radius:20%;
            &:hover{
                background-color:green;
            }
        }

        h4{
            padding:1%;
            border-radius:10%;
        }
    `

    const handleEvenClick = () => {
        setLastClick("Even")
        setPowerCount(powerCount + 1);
        setDisableBtn(!disableBtn);
    };

    const handleOddClick = () => {
        setLastClick("Odd")
        setPowerCount(powerCount + 1);
        setDisableBtn(!disableBtn);
    };

    return (
        <>
            <Wrapper>
                <section>
                    <button onClick={() => handleEvenClick()} disabled={disableBtn}>Even</button>
                    <h4>Random Number: {random}</h4>
                    <button onClick={() => handleOddClick()} disabled={disableBtn}>Odd</button>
                </section>
            </Wrapper>
        </>
    )
}

export default Power