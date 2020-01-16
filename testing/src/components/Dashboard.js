import React, {useState} from 'react';
import Display from './Display';

const Dashboard = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    const ballCount = () => {
        if (balls === 3) {
            setBalls(0);
            setStrikes(0);
        } else if (balls >= 0) {
            setBalls(balls + 1)
        }
    }

    const strikeCount = () => {
        if (strikes === 2) {
            setStrikes(0);
            setBalls(0);
        } else if (strikes >= 0) {
            setStrikes(strikes + 1)
        }
    }

    const foulCount = () => {
        if (strikes < 2) {
            setStrikes(strikes + 1)
        }
    }

    const hitCount = () => {
        setBalls(0);
        setStrikes(0);
    }

    return (
        <div className="container">
            <Display 
                balls={balls}
                strikes={strikes}/>
            <div className="dashboard-container">
                <button className="ball-count" onClick={ballCount}>Balls</button>
                <button className="strike-count" onClick={strikeCount}>Strikes</button>
                <button className="foul-count" onClick={foulCount}>Fouls</button>
                <button className="hit-count" onClick={hitCount}>Hits</button>
            </div>
        </div>
    );
};

export default Dashboard;