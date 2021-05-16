import * as React from 'react';

const PaperInfo = (props) => {
    return (
        <div className="paper-info">
            <ul>
                <li> URL : <a href={props.url} target="_blank">{props.url}</a></li>
                <li> Author : {props.author} </li>
                <li> Date Writtern : {props.date} </li>
            </ul>
        </div>
    );
};

export default PaperInfo;