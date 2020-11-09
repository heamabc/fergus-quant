import React, { Component } from 'react';
import '../css/AllPages.scss';
import {EntryWithLink} from '../../CommonComponents/Entry/Entry';
import Title from '../../CommonComponents/Title/Title'
import Page from '../../CommonComponents/PageTemplate/PageTemplate'

class HomePage extends Component {
    render() {
const aqumone_description = `Streamlined portfolio construction and selection in ETF portfolio 
Developed stock index futures and ETF rotation strategy 
Upgraded and optimized existing backtesting system`

const cfe_description = `Streamlined portfolio construction and selection in ETF portfolio 
Developed stock index futures and ETF rotation strategy 
Upgraded and optimized existing backtesting system`

const axa_description = `Streamlined the logic and structure of existing machine learning models
Performed data processing and reporting on data in database
Utilized statistical analysis and machine learning algorithms to identify characteristics of cross-selling policies`

const quant_china_description = `Performed features generation and engineering on 50 CTA factors of commodity futures
Applied stacking of different decision trees methods 
Obtained deep understanding of decision tree method and model selection`

const avant_description = `Developed and backtested various trading strategies based on quantitative method
Minimized the sophistication and risk-and-return ratio of the strategy
Introduced rigorous statistical calculation into trading strategies to ensure the existence of the statistical property (ADF test, half-life, Hurst Exponent)`

        return (
            <Page>
                <Title style={{marginBottom: 60}} label={'Experience'}/>
                <div className='EntryContainer'>
                <EntryWithLink 
                        href='https://www.aqumon.com/'
                        date='Aug 2020 - Now'
                        title='Quantitative Researcher'
                        location='AQUMON, Hong Kong'
                        description={aqumone_description}
                />   
                <EntryWithLink 
                        href='http://www.cfe.cuhk.edu.hk/'
                        date='Jun 2020 - Aug 2020'
                        title='Research Assistant (Data Science)'
                        location='Centre of Financial Engineering, The Chinese University of Hong Kong, Hong Kong'
                        description={cfe_description}
                />   
                <EntryWithLink 
                        href='https://www.axa.com.hk/en'
                        date='Sep 2019 - Apr 2020'
                        title='Data Scientist Intern'
                        location='AXA HK, Hong Kong'
                        description={axa_description}
                />   
                <EntryWithLink 
                        href='http://www.quantcn.com/website/w/h?'
                        date='Mar 2019 - Aug 2019'
                        title='Quantitative Analyst Intern'
                        location='Quant China, Shenzhen'
                        description={quant_china_description}
                />  
                <EntryWithLink 
                        href='http://www.avantcapital.com.hk/en/index.php'
                        date='Oct 2018 - Feb 2019'
                        title='Quantitative Analyst Intern'
                        location='Avant Capital Management, Hong Kong'
                        description={avant_description}
                />     
                </div>
            </Page>
        )
        
    }
}

export default HomePage;