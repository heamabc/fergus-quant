import React from 'react';
import './Entry.scss';

const Entry = (props) => {
    return (
        <div className="entry">
            {props.date && (
                <div className="date">
                    {props.date}
                </div>
            )}

            {props.title && (
                <div className="title">
                    {props.title}
                </div>
            )}

            {props.details && (
                <div className="details">
                    {props.details}
                </div>
            )}

            {props.location && (
                <div className="location">
                    {props.location}
                </div>
            )}
        </div>
    );
};



export default Entry;

export const EntryWithLink = (props) => {
    return (
        <div className="entry">
            
            {props.date && (
                <div className="date">
                    <a href={props.href}>{props.date}</a>
                </div>
            )}

            {props.title && (
                <div className="title">
                    
                        {props.title}
                    
                </div>
            )}

            {props.details && (
                <div className="details">
                    {props.details}
                </div>
            )}

            {props.location && (
                <div className="location">
                    <a href={props.href} target="_blank">
                    {props.location}
                    </a>
                </div>
            )}
        </div>
    );
};