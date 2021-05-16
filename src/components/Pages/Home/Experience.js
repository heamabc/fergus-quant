import React, { Component } from 'react';
import '../css/AllPages.scss';
import {EntryWithLink} from '../../CommonComponents/Entry/Entry';
import Title from '../../CommonComponents/Title/Title'
import Page from '../../CommonComponents/PageTemplate/PageTemplate'

class HomePage extends Component {
    render() {
const aqumone_description = `Managed 5 GAA (Global Asset Allocation) portfolios with $200 million HKD AUM in sum
Boosted AUM by millions of dollars by developing a GAA portfolio with Bitcoin
Designed a GAA portfolio that achieved 105% return, 1.5 Sharpe ratio, and -14% maximum drawdown from 2016 Dec to 2021 Mar
Provided investment strategies to Wing Lung Bank, Lufax, and BOCI that helped AQUMON complete deals worth millions of dollars
Focus on GAA, futures ETF arbitrage, active VIX hedging, and ETF factors model`

const cfe_description = `Researched on P2P loan acceptance and default prediction using machine learning models
Studied the existing credit analysis in P2P lending platform with professionals from credit industry
Created a website to demonstrate the AI learning process`

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