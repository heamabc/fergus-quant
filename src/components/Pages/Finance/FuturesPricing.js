import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <Title label="Pricing of Futures" />
          <PassageTitle label="Formula"/>
          <p>
            A future contract where underlying pays no income.
          {String.raw`$$
            F_0 =  S_0 * e^{r (T-t)}
            $$`}
            
            where, { `\n` }
            <ul>
                <li>{String.raw`\( F_0 \) `} = Fair value of futures contract at time 0.</li>
                <li>{String.raw`\( S_0 \) `} = Spot price at time 0.</li>
                <li>{String.raw`\( r \) `} = Continuous annualized interest rate.</li>
                <li>{String.raw`\( T \) `} = Maturity date of the futures contract.</li>
            </ul>
            </p> 
            <p>
            A future contract where underlying pays known income.
            {String.raw`$$
            F_0 =  (S_0 - I)e^{r (T-t)} = S_0 * e^{ (r-d) * (T-t)}
            $$`}
            where, { `\n` }
            <ul>
                <li>{String.raw`\( F_0 \) `} = Fair value of futures contract at time 0.</li>
                <li>{String.raw`\( S_0 \) `} = Spot price at time 0.</li>
                <li>{String.raw`\( r \) `} = Continuous annualized interest rate.</li>
                <li>{String.raw`\( T \) `} = Maturity date of the futures contract.</li>
                <li>{String.raw`\( I \) `} = Present value of all the known income.</li>
                <li>{String.raw`\( d \) `} = Continuous annualized dividend yield.</li>
            </ul>
            </p> 
            <PassageTitle label="Theory of pricing a future contract"/>
            <p>
              In theory, when the futures price does not equal to the fair value above, the futures is underpriced/overpriced. Suppose the fair value is 100, while the 
              price of the future contract is 50. The future contract is underpriced. Therefore, an arbitrageur can buy short the underlying asset and buy the future contract 
              and deposit any execcesive funding for a risk-free rate. And thus riskless return without any principal invested can be earned.
            </p>
            <PassageTitle label="Reality"/>
            <p>
              In reality, we can often see the future price deviate from the fair value. The reason behind it is manifold.
            </p>
            <MinorTitle label="Tax and market Friction" />
            <p>
              In reality, we have to consider the tax charged when we perform any buying or selling of securities. It will take away certain amount of the profit. Apart from 
              taxation, there will also be some slippage and bid-ask spread in the market, leading to a fluctuation arbitrage opportunity depending on the situation in the 
              market.
            </p>
            <MinorTitle label="Uncertainty of Income Stream" />
            <p>
              For most of the asset, the income generated in the future involves some degree of uncertainty. For example if the future mature in one year, we have to estimate 
              the dividend to be paid from the underlying stock for the next year. No one actually know how much will they pay, the best we can do is to obtain some kind of 
              estimation (I have actually used bloomberg BEST dividend yield as a proxy in real life project). Also, even if the dividend payout scheme is announced, there will 
              also be some risk that the company will go bankrupt before paying the divdend.
            </p>
            <MinorTitle label="Uncertainty of Risk-Free Rate" />
            <p>
              In real life, there is no risk-free rate. Everything involves risk. Apart from that, different investor may face different risk-free rate. For example, I may be 
              able to borrow at the OIS rate while some is able to borrow at Libor.
            </p>
            <PassageTitle label="Adjustment for stock index futures" />
            <MinorTitle label="Seasonality of dividend" />
            <p>
              For A stocks, they often pay dividend in May and November, it is important to adjust the seasonality in the dividend yield. One way to overcome it is to calculate 
              the estimated dividend present value instead of simply using a dividend yield.
            </p>
            <PassageTitle label="Reference" />
            <p>
              Cornell, B., & French, K. R. (1983). The pricing of stock index futures. Journal of Futures Markets, 3(1), 1–14.  
              <a href="https://doi.org/10.1002/fut.3990030102">https://doi.org/10.1002/fut.3990030102</a> 
              {"\n"} {"\n"}
              Richie, N., Daigler, R. T., & Gleason, K. C. (2008). The limits to stock index arbitrage: Examining S&P 500 futures and SPDRS. Journal of Futures Markets, 28(12), 1182–1205. 
              <a href="https://doi.org/10.1002/fut.20365">https://doi.org/10.1002/fut.20365</a>
            </p>

        </Page>
)}}

export default HomePage;