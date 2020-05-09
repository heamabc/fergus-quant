import React from 'react';
import Navigation from '../CommonComponents/Navigation/Navigation'
import './Toolbar.scss';

class toolbar extends React.Component {
    state = {
        ShowNav : false
    }
    render(){
        return(
            <div className="toolbar">
                
                <div href="/" className="LogoContainer" onMouseEnter={() => this.setState({ShowNav:true})}>
                    <div className="ButtonContainer">
                        <button className="toggle-button" onClick={() => this.setState({ShowNav:true})}>
                            <div className="toggle-button__line" />
                            <div className="toggle-button__line" />
                            <div className="toggle-button__line" />
                        </button>
                    </div>
                    <a href="/" className="HomeButton" >
                        <div className="toolbar__logo">
                            <span className="PreferredName">
                                Fergus
                            </span>
                            <span className="LastName">
                                Kwan
                            </span>
                        </div>
                    </a>
                </div>

                {this.state.ShowNav && (
                    <div className="toolbar__navigation-items"
                    onMouseLeave={() => this.setState({ShowNav:false})}
                    >
                        <Navigation />
                    </div>
                )}
            </div>
        )
    }
};

export default toolbar;