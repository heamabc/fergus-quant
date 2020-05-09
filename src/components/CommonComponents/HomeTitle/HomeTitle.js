import * as React from 'react';
import './HomeTitle.scss';


const Title = (props) => {
    return (            
        <div style={props.style}>
            <h1 className="HomeTitle">
                <span classNAme="Name">
                {props.name}
                </span>
                <span className="PreferredName">
                {props.preferred_name}
                </span>
            </h1>
        </div>
    );
};

export default Title;
