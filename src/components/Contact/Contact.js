import React, { Component, version } from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Contact.scss'

// TODO Make mobile version
// Make it become center

class Contact extends Component {
    render(){
        return(
            <div className="Contact">
                <ul>
                    <li><a href="https://github.com/heamabc" target="_blank"><GitHubIcon className="MaterialIcon" /></a></li>
                    <li><div className="vl" /></li>
                    <li><a href="https://linkedin.com/in/tak-hei-kwan" target="_blank"><LinkedInIcon className="LinkedInIcon" /></a></li>
                    <li><div className="vl" /></li>
                    <li><h4>+852 6125 5752</h4></li>
                    <li><div className="vl" /></li>
                    <li><a href="mailto:takhei611@gmail.com"><h4>takhei611@gmail.com</h4></a></li>
                </ul>
            </div>
        )
    }
}

export default Contact;