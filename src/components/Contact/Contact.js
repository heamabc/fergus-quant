import React, { Component, version } from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
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
                    <li><a href="https://linkedin.com/in/tak-hei-kwan" target="_blank"><LinkedInIcon className="MaterialIcon" /></a></li>
                    <li><div className="vl" /></li>
                    <li><PhoneIcon className="MaterialIcon" /> +852 6125 5752</li>
                    <li><div className="vl" /></li>
                    <li><a href="mailto:takhei611@gmail.com"><MailIcon className="MaterialIcon" /></a> takhei611@gmail.com</li>
                </ul>
            </div>
        )
    }
}

export default Contact;