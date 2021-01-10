import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Strategic Asset Allocation and Tactical Asset Allocation" />
          <p>
              SAA and TAA is a big part of how the fund manager manage their fund. According to the english definition of strategic and tactical, 
              strategic is about something in long term and tactical is about something in short term. Let's dive into what they actually mean.
          </p>
          <PassageTitle label="Strategic Asset Allocation" />
          <p>
            SAA is a portfolio strategy where after getting the consideration of the investors, such as risk tolerance level, expected rate of return, 
            investment horizon, the fund manager decide the targeted allocation of a mix of assets for the investor's holding. The targeted allocation 
            set is rather long term, usually measured in years. A simple SAA can be illustrated as below.
          </p>
          <ul>
              <li> Equity : 60% </li>
              <li> Bond : 30% </li>
              <li> Alternatives : 10%</li>
          </ul>
          <p>
              It is important to remember that SAA only decides the weight of each asset classes, but not each individual security.
          </p>
          <MinorTitle label="Drift" />
          <p>
              As the price of the asset fluctuates, the weighting will be deviated from the targeted allocation. Therefore, fund manager will calculate 
              the drfit, which is the deviation from the assigned weight, regularly. When the drift is unacceptable, manager will rebalance the portfolio 
              in order to achieve the assigned allocation. 
          </p>
          <p>
              Drift is also used in optimization the asset allocation. In reality, It is rare that one can achieve exactly the assigned weight of 
              asset. For example, for an investor with $10,000 capital, and an assigned equity allocation of 30%. If the price of one unit of equity 
              is $29,000. The fund manager can only buy 1 unit of equity and achieve a equity allocation of 29%. We can imagine this happens to every 
              asset classes. So how do a fund manager decide how many unit of each security to buy in order to achieve the most similar performance 
              set by the SAA? The fund manager can optimize the drift and get the achievable and optimized weight.
          </p>
          <MinorTitle label="Rebalancing" />
          <p>
              SAA is a very systematic way to investing, fund manager will set a frequency for rebalancing and rebalancing is happened periodically.
              As mentioned before, SAA is about long term asset allocation, the rebalancing frequency of SAA is rather infrequent. For example, 
              quarterly, annually, etc.
          </p>
          <MinorTitle label="Review of Asset Allocation" />
          <p>
              Even though SAA is a passive strategy and rebalancing is often infrequent, fund manager can also review the asset allocation periodically 
              to make sure the investment is in line with the investment objectives. Note that the review should also be infrequent.
          </p>
          <p>
              Other than the market consideration, investors investment objective may also change over time. For example, as an investor approach 
              retirement, one may consider a more conservative portfolio and assign more weight to investing bonds.
          </p>
          <MinorTitle label="Advantage" />
          <p>
              SAA is a systematic way of investing, it provide a guideline for fund manager how to manage a fund. Unlike other active strategy, SAA 
              is a passive investment strategy where the fund manager try to obtain some alpha over a certain benchmark. 
          </p>
          <p>
              SAA believes in diversification to reduce risk and improve portfolio returns in the long run. By the reduced risk, SAA can thus 
              generate alpha over a benchmark. This kind of investment style stem from the mordern portfolio theory. It believes that the market is 
              so efficient that one rarely generate alpha consistently from alpha strategies. However, by diversifcation of the portfolio, one can 
              generate the highest return with lowest volatility for a certain kind of level of risk.
          </p>
          <p>
              As mentioned before, SAA believes in asset allocation and diversifcation, rather than seeking alpha aggressively. The rebalancing frequency 
              is thus less frequent and transaction cost and management cost can be lowered.
          </p>
          <MinorTitle label="Conclusion" />
          <p>
              All in all, SAA is a flexible and systematic way of investing. It gives investors discipline, transparent, easy to understand, 
          </p>

          <PassageTitle label="Tactical Asset Allocation" />
          <p>
              While SAA focus on the passive approach to allocate investment accross different asset classes, TAA is an active approach which 
              attempt to put more wiehgt on asset class which outperform benchmark and put less weight on asset class which underperform the 
              benchmark.
          </p>
          <MinorTitle label="Difference between security selection" />
          <p>
              Remember TAA only cares about the weight and performance of different asset classes. within a specific asset class, choosing the 
              most suitable assets is called security selection. This is not TAA.
          </p>
        
        </Page>
      )}}

export default HomePage;