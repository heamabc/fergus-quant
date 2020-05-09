import React, { Component } from 'react';
import './css/AllPages.scss';
import {EntryWithLink} from '../CommonComponents/Entry/Entry';
import Title from '../CommonComponents/Title/Title'
import Page from '../CommonComponents/PageTemplate/PageTemplate'

class HomePage extends Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={'Recent Project'}/>
                <div className='EntryContainer'>
                <EntryWithLink  
                        href='https://github.com/heamabc/Smart-Beta-Regularization'
                        location='Smart Beta with Regularization'
                        details='L2 regularization, MDR, MSR'
                /> 
                
                <EntryWithLink  
                        href='https://github.com/heamabc/Machine-Learning-on-Futures'
                        location='Machine Learning Futures Trading Strategy'
                        details='features generation, data cleaning, stacking, decision tree'
                />   
                <EntryWithLink 
                        href='https://github.com/heamabc/Pair-Trading-Stategy'
                        location='Pair Trading Strategy'
                        details='cointegration, ADF test, Half-life, Hurst Exponent'
                />  
                <EntryWithLink 
                        href='https://github.com/heamabc/Pair-Trading-Stategy'
                        location='Statistical Arbitrage in US Stock Market'
                        details='cointegration, PCA'
                />  
                </div>
            </Page>
        )
        
    }
}

export default HomePage;