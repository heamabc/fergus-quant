import * as React from 'react';
import './PassageTitle.scss';

const PassageTitle = (props) => {
    return (
        <h2 className="PassageTitle">{props.label}</h2>
    );
};


export default PassageTitle;

export const MinorTitle = (props) => {
    return (
        <h4 className="MinorTitle">{props.label}</h4>
    );
}
