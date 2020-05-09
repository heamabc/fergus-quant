import React, { Component } from 'react';
import './css/AllPages.scss';
import Entry from '../CommonComponents/Entry/Entry';
import Title from '../CommonComponents/Title/Title'
import Page from '../CommonComponents/PageTemplate/PageTemplate'

class HomePage extends Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={'Experience'}/>
                <div className='EntryContainer'>
                <Entry date='September 2019 - April 2020'
                        title='Data Scientist Intern'
                        location='AXA HK, Hong Kong'
                />   
                <Entry date='March 2019 - Aug 2019'
                        title='Quantitative Analyst Intern'
                        location='Quant China, Shenzhen'
                />  
                <Entry date='Oct 2018 - Feb 2019'
                        title='Quantitative Analyst Intern'
                        location='Avant Capital Management, Hong Kong'
                />     
                </div>
            </Page>
        )
        
    }
}

export default HomePage;