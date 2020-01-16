import React from 'react';
import styled from 'styled-components';
import { symbol } from 'prop-types';

const H1Styles = styled.h1`
    color: indigo;
    font-size: 2.6rem;
    font-style: oblique;
    font-weight: 400;
    font-family: monospace;
    padding-top: 15px;
`;
const H2Styles = styled.h2`
    color: hotpink;
    font-family: monospace;
    font-weight: bolder;
`;

const Display = props => {

    return(
        <div className="display-container">
            <H1Styles>Let's Play Ball</H1Styles>
                <H2Styles className="balls-display" data-testid="balls-score">Balls: {props.balls}</H2Styles>
                        <br/>
                    <H2Styles className="strikes-display" data-testid="strikes-score">Strikes: {props.strikes}</H2Styles>
        </div>
    );
};

export default Display;