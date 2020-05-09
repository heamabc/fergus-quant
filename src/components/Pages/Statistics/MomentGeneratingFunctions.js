import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex'
import '../css/AllPages.scss';

class HomePage extends Component {  
      render() {
        return (
            <Page>
                <Mathjex />
                <Title label="Moment" />
                <p>
                    The nth moment of a random variable X is $$ E[X^n] $$
                    The nth central moment of a random variable X is $$ E[(X-E(X))^n] $$
                    For example, the first moment of X is the expected value of X. The second central moment of 
                    X is the variance of X.
                </p>
            </Page>
)}}

export default HomePage;