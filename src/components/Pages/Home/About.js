import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
      return (
        <Page>
            <Title style={{marginBottom: 60}} label={'About'}/>
            <p>
                Hi! Welcome to my website! This is Fergus! I am a student studying quantitative finance in The Chinese University of Hong Kong.
                I love quantitative research and software engineering!
            </p>
            <p>
                In this website, I want to share some notes that might help you! (Also for me to revise materials in a better way XD). Hope you 
                enjoy!
            </p>
            <p>
                This website also include my resume and information. Please feel free to contact me if you find me interesting!
            </p>
            <PassageTitle label="How This Website is Created" />
            <p>
                This website is fully written by myself. It uses some html, css, javascript, and ReactJS. It is hosted on Heroku. The Continuous
                Integration in Heroku is so great! If u are curious about how this is written.
                check out my script &nbsp;  
                <a href="https://github.com/heamabc/fergus-quant">
                 here! 
                </a> 
                &nbsp; (Code is cheap... )
            </p>
        </Page>
    )}}

export default HomePage;