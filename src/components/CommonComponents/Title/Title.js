import * as React from 'react';
import GradientLine from '../GradientLine/GradientLine';
import './Title.scss';

const Title = (props) => {
    return (
        <div style={props.style}>
            <h1 className="PageTitle">{props.label}</h1>
            <GradientLine width={100} height={2} />
        </div>
    );
};

export default Title;

export const CategoryTitle = (props) => {
    return (
        <div className="CategoryTitleContainer">
            <h3 className="CategoryTitle">{props.label}</h3>
        </div>
    )
}