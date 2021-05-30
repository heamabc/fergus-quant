import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="VIX Introduction"/>
          <PassageTitle label="VIX Definition"/>
          <MinorTitle label="What is VIX" />
          <p>
              The VIX is interpreted as annualized implied volatility of a hypothetical option on the
              S&P500 stock index with 30 days to expiration, based on the prices of near-term 
              S&P500 options traded on CBOE.
          </p>
          <MinorTitle label="Volatility"/>
          <p>
            The sample standard deviation{String.raw`\(s\)`} of the asset return{String.raw`\(R_t\)`} duringthe period{String.raw`\(t=1,... N\)`} is computed as
            {String.raw`$$  s = \sqrt{(\frac{1}{N-1}) \sum^{N}_{t=1}[R_t-\bar{R}]^2} $$`}
          </p>
          <MinorTitle label="History of VIX"/>
          <p>
            The Chicago Board Options Exchange introduced the volatility index (VIX) in 1993 and its
            purpose was to measure the expectation of 30-days volatility implied by at-the-money S&P 100
            Index option prices.
          </p>
          <p>
            VIX has become a benchmark for the volatility of the US stock market and has an inverse relationship with the 
            stock market. When the market is performing well VIX is decreasing and when the market is 
            performing bad VIX increases.
          </p>
          <MinorTitle label="Meaning of VIX"/>
          <p>
          VIX is measured as the weighted 30-day implied standard deviation of annual changes in
          Standard & Poor’s 500. For example if the value of VIX is 20, then S&P500 is expected to
          increase or decrease by 20% over the next year.
          </p>
          <p>
            Values of VIX above 30 are often observed in distressed markets
            while values below 20 are associated with calm periods.
          </p>
          <MinorTitle label="Calculation of VIX"/>
          <p>
              {String.raw`$$  \sigma = \frac{2}{T} \sum_i \frac{\Delta K_i}{K^2_i} e^{RT} Q(K_i) - \frac{1}{T}[\frac{F}{K_0}-1]^2  $$`}
          </p>
          <PassageTitle label="Characteristics of VIX" />
          <p>
            VIX is negatively correlated with its underlying, i.e. S&P 500.
          </p>
          <p>
            VIX can increase in short period of time in 'spikes'.
          </p>
          <p>
            VIX is tend to be mean reverting.
          </p>
          <PassageTitle label="Reference" />
          https://core.ac.uk/download/pdf/43558302.pdf
        </Page>
)}}

export default HomePage;