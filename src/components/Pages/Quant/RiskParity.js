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
          <Title label="Risk Parity"/>
          <PassageTitle label="Probelm with Mordern Portfolio Theory" />
          <p>
              If you think back about the mordern portfolio theory, it only aims to minimize the portfolio risk, but ignores risk diversification 
              within the portfolio (i.e. may concentrate too much risk in few assets.)
            </p>
            <p>
              Another problem with mordern portfolio theory is that it is very sensitive to the parameter. If the covariance between assets or the 
              expected return change a little bit, the portfolio can vary significantly. It will incur huge transaction cost for a portfolio.
            </p>
              Risk parity is then designed to diversify the risk within the portfolio. It aims to diversify risk among the assets. Risk parity is also 
              very stable for allocation.
            <p>
              Then main idea for risk parity is to constrain <b> each asset to contribute equally to the portfolio overall volatility.</b>
          </p>
          <PassageTitle label="Risk Contribution" />
          <p>
              Given a portfolio \(w \in \mathbb R^N \) and return covariance matrix \(\Sigma\), portfolio volatility is 
          </p>
          {String.raw`$$
            \sigma (w) = \sqrt{w^T\Sigma w}
          $$`}
          <p>
              The Marginal Risk Contribution (MRC) of the ith asset to the total risk \(\sigma(w)\) is defined as 
          </p>
            {String.raw`$$
            MRC_i=\frac{\partial \sigma}{\partial w_i} = \frac{(\Sigma w)_i}{\sqrt{w^T\Sigma w}}
            $$`}
            <p>
                The Risk Contribution (RC) of the ith asset to the total risk \(\sigma(w)\) is defined as 
                {String.raw`$$
                RC_i=w_i\frac{\partial \sigma}{\partial w_i} = \frac{w_i(\Sigma w)_i}{\sqrt{w^T\Sigma w}}
                $$`}
            </p>
            <p>
                Note that by Euler's theorem
            </p>
            {String.raw`$$
            \sum_1^N RC_i = \sigma(w)
            $$`}
            <p>
                The Relative Risk Contribution (RRC)  of the ith asset to the total risk \(\sigma(w)\) is defined as 
            </p>
            {String.raw`$$
            RRC_i=\frac{RC_i}{\sigma(w)}=\frac{w_i(\Sigma w)_i}{w^T\Sigma w}
            $$`}
            <PassageTitle label="Risk Parity Portfolio" />
            <p>
                Our risk parity portfolio is to allocate the weights so that all the assets contribute the same amount of risk. That is, 
                equating all the risk. Mathematically,
            </p>
            {String.raw`$$
            RC_i = \frac{\sigma(w)}{N} 
            $$`}
            or 
            {String.raw`$$
            RRC_i = \frac{1}{N}
            $$`}

        </Page>
)}}

export default HomePage;