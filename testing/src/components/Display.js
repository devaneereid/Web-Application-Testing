import React from 'react';

const Display = props => {

    return(
        <div className="display-container">
            <h1>Let's Play Ball</h1>
                <h2 className="balls-display" data-testid="balls-score">Balls: {props.balls}</h2>
                        <br/>
                    <h2 className="strikes-display" data-testid="strikes-score">Strikes: {props.strikes}</h2>
        </div>
    );
};

export default Display;