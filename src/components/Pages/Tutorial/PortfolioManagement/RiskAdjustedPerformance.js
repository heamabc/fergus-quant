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
          <Title label="Risk Adjusted Performance" />
          <p>
              Often, risk adjusted metrics will be used in accessing the performance of the fund and the benchmark. As risk and return is the most 
              important factor when considering the performance of an assets, here we present several widely used risk adjusted metrics which 
              incorporate the evaluation of risk and return at the same time.
          </p>
          <PassageTitle label="Sharpe Ratio" />
          <p>
              When talk about risk adjusted metrics, sharpe ratio should the first appear in our mind. It is very widely used. The Sharpe ratio over
              a period is defined as : 
          </p>
          {String.raw`$$
          S = \frac{R-R_f}{\sigma}
          $$`}
          <p>
              Where\(R\) is the return of the asset,\(R_f\) is the risk-free return,\(\sigma\) is the volatility of the asset. We can interpret the 
              volatility of the asset as the total risk of the asset. Therefore, the Sharpe ratio can be interpreted as the excess return obtained 
              per unit of risk.
          </p>
          <p>
              The interpretation of the denominator of Sharpe Ratio can also be the volatility of the exccess return, that is, \(\sigma(R-R_f)\).
              However, as the volatility of risk-free return is zero, the denominator can be reduced to simply the volaility of the portfolio.
          </p>
          <PassageTitle label="Information Ratio" />
          <p>
              Information ratio is an extension of the Shrape ratio. While the Sharpe ratio is specifically designed to calculate the exccess return of 
              an asset over the risk-free return, information ratio is designed to calculate the exccess return of an asset over a benchmark.
          </p>
          {String.raw`$$
          IR = \frac{R-R_b}{\sigma(R-R_b)}
          $$`}
          <p>
              where \(R_b\) is the return of the benchmark. The numerator can be interpreted as the exccess return of the asset over benchmark. And the 
              denominator can be interpreted as the volatility of the exccess return of the asset over benchmark.
          </p>
          <PassageTitle label="Treynor Ratio" />
          <p>
              Treynor in 1965 developed the portfolio characteristic line. Which is constructed by regression the return of an asset with respect to 
              the return of the market over a period.
          </p>
          {String.raw`$$
          R_t = \alpha + \beta R_m + \epsilon_t
          $$`}
          <p>
              Where \(\alpha\) can be interpreted as the exccess return, \(\beta\) represent the portfolio volatility relative to that of the market.
              The Treynor Ratio is then obtained by the below formula.
          </p>
          {String.raw`$$
          T = \frac{R-R_f}{\beta}
          $$`}
          <p>
              We can see the Treynor Ratio is identical to the Sharpe ratio except that the denominator becomes \(\beta\) instead of \(\sigma\). The 
              Treynor Ratio can be interpreted as excess return obtained per unit of systematic risk.
          </p>
        </Page>
)}}

export default HomePage;