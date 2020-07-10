import React, { Component } from 'react';
import '../css/AllPages.scss';
import {EntryWithLink} from '../../CommonComponents/Entry/Entry';
import Title from '../../CommonComponents/Title/Title'
import Page from '../../CommonComponents/PageTemplate/PageTemplate'

class HomePage extends Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={'Experience'}/>
                <div className='EntryContainer'>
                <EntryWithLink 
                        href='http://www.cfe.cuhk.edu.hk/'
                        date='June 2019 - Now'
                        title='Research Assistant (Data Science)'
                        location='Centre of Financial Engineering, The Chinese University of Hong Kong, Hong Kong'
                />   
                <EntryWithLink 
                        href='https://www.axa.com.hk/en'
                        date='September 2019 - April 2020'
                        title='Data Scientist Intern'
                        location='AXA HK, Hong Kong'
                />   
                <EntryWithLink 
                        href='http://www.quantcn.com/website/w/h?'
                        date='March 2019 - Aug 2019'
                        title='Quantitative Analyst Intern'
                        location='Quant China, Shenzhen'
                />  
                <EntryWithLink 
                        href='http://www.avantcapital.com.hk/en/index.php'
                        date='Oct 2018 - Feb 2019'
                        title='Quantitative Analyst Intern'
                        location='Avant Capital Management, Hong Kong'
                />     
                </div>
            </Page>
        )
        
    }
}

export default HomePage;