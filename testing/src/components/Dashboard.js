import React, {useState} from 'react';
import Display from './Display';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    padding: 20px 60px;
    margin: 20px;
    border-radius: 20px;
    background: darkblue;
    color: white;
    font-size: 1.2rem;
    font-family: monospace;
`;


const Dashboard = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    const ballCount = () => {
        if (balls === 4) {
            setBalls(0);
            setStrikes(0);
        } else if (balls >= 0) {
            setBalls(balls + 1)
        };
    };

    const strikeCount = () => {
        if (strikes === 3) {
            setStrikes(0);
            setBalls(0);
        } else if (strikes >= 0) {
            setStrikes(strikes + 1)
        };
    };

    const foulCount = () => {
        if (strikes < 2) {
            setStrikes(strikes + 1)
        };
    };

    const hitCount = () => {
        setBalls(0);
        setStrikes(0);
    };

    return (
        <container className="container">
            <Display 
                balls={balls} strikes={strikes}/>
            <div className="dashboard-container">
                <ButtonStyles className="ball-count" onClick={ballCount}>Balls</ButtonStyles>
                <ButtonStyles className="strike-count" onClick={strikeCount}>Strikes</ButtonStyles>
                <ButtonStyles className="foul-count" onClick={foulCount}>Fouls</ButtonStyles>
                <ButtonStyles className="hit-count" onClick={hitCount}>Hits</ButtonStyles>
            </div>
        </container>
    );
};

export default Dashboard;