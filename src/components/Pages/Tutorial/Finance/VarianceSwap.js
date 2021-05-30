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
          <Title label="Variance Swap"/>
          <p>
              Variance swap is an instrument which trade future realized (or historical) variance against a pre-agreed variance level.
              Buying variance swap is long volatility, shorting variance swap is short volatility.
          </p>
          <PassageTitle label="Root Mean Square (RMS) Volatility" />
          <p>
            RMS volatility measure is used to define the payout of the varianceswap contract. The RMS apporach assume the mean is zero 
            when calculating the volatility. Also note that the return is calculated from log return. Although this simplified formula 
            is not exactly the same as traditional volatility, as the mean is near zero on a daily basis, the difference between the two
            is small.
            {String.raw`$$  \sigma^2 = \frac{252}{T} \sum_{i=1}^T[ln(\frac{S_i}{S_{i-1}})]^2  $$`}
            <p>
                Where
                <ol>
                    <li> \( S_i \) i is the stock price on day i, and</li>
                    <li> \(T\) is the number of days </li>
                </ol>
            </p>
          </p>
          <PassageTitle label="How Variance Swap Works" />
          <p>
            The strike of a variance swap epresents the level of volatility bought of sold and is set at trade inception. 
            The strike is set according to prevailing market levels so that the swap initially has zero value. If the 
            subsequent realised volatility is above the level set by the strike, the buyer of a variance swap will be in profit;
            and if realised volatility is below, the buyer will be in loss. A buyer of a variance swap is therefore long volatility.
            Similarly, a seller of a variance swap is short volatility
          </p>
          <FancyBox caption="Covered Call" alt="Covered Call" link="https://drive.google.com/uc?id=1offMIxaLH1e5b00hdYt0uM-AJQeAhZIb"  />
          {String.raw`$$  PnL = N_{Variance} * (\sigma^2 - K^2)  $$`}
          <p>
            where \(K\) is the variance swap strike, \(\sigma^2\) is realised variance, and {String.raw`\(N_{Variance}\)`} is the variance notional. 
          </p>
        </Page>
)}}

export default HomePage;