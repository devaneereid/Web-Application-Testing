import React from 'react';

const Display = props => {

    return(
        <div className="display-container">
            <h1>Let's Play Ball</h1>
                <h2 className="balls-display">Balls</h2>
                    <div className="balls">{props.balls}</div>
                        <br/>
                    <h2 className="strikes-display">Strikes</h2>
             <div className="strikes">{props.strikes}</div>
        </div>
    );
};

export default Display;