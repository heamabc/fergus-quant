import React from 'react';
import './Button.scss'

const LinkButton = (props) => {
    return (
        <div className='button-container'>
            <a className='Linkbtn' href={props.href} target={props.target}>
                {props.label}
            </a>
        </div>
        
    );
};

export default LinkButton