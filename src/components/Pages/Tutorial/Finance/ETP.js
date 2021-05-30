import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Exchange Traded Product (ETP)"/>
          <p>
              Exchange traded product is a financial product that traded on the exchange. Generally there are two types of ETPs, namely 
              exchange traded fund (ETF) and exchange traded note (ETN)
          </p>
          <MinorTitle label="Trade Like Shares"/>
          <p>
              Trading ETP on stock exchange is exactly the same as trading a stock. 
          </p>
          <MinorTitle label="Liquid"/>
          <p>
              ETPs are backed by a pool of market maker that will provide liquidity to the asset.
          </p>
          <PassageTitle label="Exchange Traded Fund (ETF)" />
          <p>
              We saw a lot of ETF in the market. But what exactly is ETF? ETF is an open-end fund, but traded on the exchange.
          </p>
        <MinorTitle label="How ETF Works"/>
        <p>
            The most important thing abut ETF is how they work. The ETF issuer manage the fund and trade assets according to the objective
            stated by the ETF prospectus. Like any other fund, ETFs have NAV, which could be different from the market price in which 
            investors can trade on the exchange. ETFs ensure the price do not deviate from the NAV too much through the mean of introducing
            market maker. Marker maker of the ETF can subscribe/redeem any unit of the ETF at NAV. With market maker, they can arbitrage 
            once the market price of ETF is too different from the NAV and thus ensuring the price is close to NAV.
        </p>
        <PassageTitle label="Exchange Traded Note (ETN)" />
          <p>
              ETNs are like ETF that they are traded on the stock exchange with specific investment objective, usually tracking a 
              referencing benchmark.
          </p>
          <MinorTitle label="Differece from ETF"/>
          <p>
              ETN is a senior, unsecured debt security issued by a bank, unlike an ETF which holds assets such as stocks, 
              commodities, or currencies which are the basis of the price of the ETF. The ETN issuer promise to pay ETN holder the 
              return of a market index or other benchmark at maturity, minus management fee.
          </p>
          <MinorTitle label="Tracking Error" />
          <p>
            Tracking error can be a significant issue for ETFs that are unable to hold all the components of a benchmark index, 
            either because there are too many components and/or the components are illiquid. As a result, the value of the ETF and 
            the value of the benchmark index may diverge. In contrast, the ETN issuer promises to pay the full value of the index, 
            no matter what, minus the expense ratio, completely eliminating tracking error.
          </p>
          <MinorTitle label="Credit Risk" />
          <p>
          ETNs rely on the credit worthiness of their issuers, just like unsecured bonds. If the issuer defaults, an ETN's investors may 
          receive only pennies on the dollar or nothing at all, and investors should remember that credit risk can change quickly. 
          At the time of its bankruptcy in September 2008, Lehman Brothers had 3 ETNs outstanding. While many investors sold these ETNs 
          prior to Lehman's collapse (only $14.5 million remained in the 3 ETNs when the firm folded), investors who didn't get out 
          received just pennies on the dollar.
          </p>
          <MinorTitle label="Closure Risk" />
          <p>
          There are multiple ways for an issuer to effectively close an ETN. An issuer may call the note (also known as "accelerated redemption") 
          by returning the value of the note less fees. 
          </p>
          <MinorTitle label="Issuance risk" />
          <p>
            ETNs are created only by their issuers who are effectively issuing new debt each time they create additional units. As ETNs are 
            issued by financial institution, they need to meet the capital requirement constantly for compliance. As the ETNs price surge, 
            the liability of the financial institution surge, which may lead to failure to meet capital requirement. For example, 
            ETN (TVIX) that was designed to track twice the daily returns of an index of futures contracts on the implied volatility of the S&P 500® Index. 
            On February 21, 2012, the underwriting bank behind the note decided to stop issuing new shares of the ETN.
          </p>
          <MinorTitle label="Reference" />
          <ul>
              <li>https://www.finra.org/investors/alerts/exchange-traded-notes-avoid-unpleasant-surprises</li>
          </ul>
          
        </Page>
)}}

export default HomePage;