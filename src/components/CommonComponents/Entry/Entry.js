import React, { Component } from 'react';
import './Entry.scss';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


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


export class EntryWithLink extends Component {
	constructor(props) {
		super(props);
		this.toggleExpandedTicket = this.toggleExpandedTicket.bind(this);
		this.handleMouseHover = this.handleMouseHover.bind(this);

		this.state = {
			expandedTicket: true,
			isHovering: false
		};
	}
	toggleExpandedTicket() {
		this.setState({ expandedTicket: !this.state.expandedTicket });
	}
	handleMouseHover() {
		this.setState(this.toggleHoverState);
	}
	toggleHoverState(state) {
		return {
			isHovering: !state.isHovering,
		};
	}
	render() {

		return (
			<div className={this.state.expandedTicket ? "expanded-video_container" : "normal-video_container"}>
				<div className={this.state.expandedTicket ? "expanded-img" : "normal-img"} >
					<div
						className={this.state.expandedTicket ? "expanded-img_container" : "normal-img_container"}
						onMouseEnter={this.handleMouseHover}
						onMouseLeave={this.handleMouseHover}
					>
                        {!this.state.expandedTicket && 
							<div className="entry">
                                {this.props.date && (
                                    <div className="header">
                                        <div className="date">
                                            {this.props.date}
                                        </div>

                                        <button className="arrow" onClick={this.toggleExpandedTicket}> 
                                            <KeyboardArrowLeftIcon /> 
                                        </button>
                                    </div>
                                )}
                    
                                {this.props.title && (
                                    <div className="title">
                                        {this.props.title}
                                    </div>
                                )}
                    
                                {this.props.details && (
                                    <div className="details">
                                        {this.props.details}
                                    </div>
                                )}
                    
                                {this.props.location && (
                                    <div className="location">
                                        <a href={this.props.href} target="_blank">
                                        {this.props.location}
                                        </a>
                                    </div>
                                )}
                            
                            </div>
						}

                        {this.state.expandedTicket && (
							<div className="entry">
                            {this.props.date && (
                                <div className="header">
                                    <div className="date">
                                        {this.props.date}
                                    </div>

                                    <button className="arrow" onClick={this.toggleExpandedTicket}> 
                                        <KeyboardArrowDownIcon /> 
                                    </button>
                                </div>
                            )}
                
                            {this.props.title && (
                                <div className="title">
                                    {this.props.title}
                                </div>
                            )}
                
                            {this.props.details && (
                                <div className="details">
                                    {this.props.details}
                                </div>
                            )}
                
                            {this.props.location && (
                                <div className="location">
                                    <a href={this.props.href} target="_blank">
                                    {this.props.location}
                                    </a>
                                </div>
                            )}

                            {this.props.description && 
                                <div className="description">
                                    <p>
                                        {this.props.description} 
                                    </p>
                                </div>
                            }
                        
                        </div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

