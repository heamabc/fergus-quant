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
          <Title label="Theory behind Indexation" />
          <p>
              There are millions of index currently in the market. However, we can categorize all the index into four different categories.
              Namely, Broad Market Index, Fundamentally Based Index, Style-Based Index, Customized Index. Here we can discuss the theory
              behind different category of index.
          </p>
          <PassageTitle label="Broad Market Index" />
          <p>
              The most general broad market index is market capitalization weighted index. The weight of each securities is calculated as 
          </p>
          {String.raw`$$
            w_i = \frac{p_i q_i}{\sum_j^n p_j q_j}
            $$`}
            <p>
                Where \(w_i\) is the weight of \(i\)-th security in the index, \(p_i\) is the price of the \(i\)-th security and \(q_i\) is the 
                shares outstanding of the \(i\)-th security. Multiplying the price and shares outstanding will give you the market cap of the 
                security. Note that most of the time the market cap will be subjected to free-float adjustment, that is to exclude any market 
                capitalization that is not available to be traded publicly.
            </p>
            <MinorTitle label="Mean Variance Optimal" />
            <p>
                The popularity of capitalization is greatly due to the CAPM model. The CAPM model states that the market portfolio, which is a 
                portfolio constitute by holding all the investable assets in the world in proportion to their market value, can achieve the highest 
                return on a prespecified risk level.
            </p>
            <MinorTitle label="Requires little trading" />
            <p>
                Cap-weighted portfolio rebalances automatically when price fluctuates. Therefore investor will have very little transaction and management 
                cost and the portfolio itself do not require much active management and monitoring.
            </p>
            <p>
                There are only some special situations where a cap-weighted portfolio should be rebalanced. When stocks buyback and secondary offering happens, the free float outstanding shares may change, it is 
                the time the cap-weighted portfolio should rebalance as the price itself cannot reflect this change. Also, another situation requiring 
                rebalancing is the inclusion and exclusion of constituents of the portfolio. It may due to increase in market cap of some originally 
                small company, or delisting, M&A of the constituents of the portfolio. Collectively it is reffered to as "reconstruction". 
            </p>
            <MinorTitle label="Correlation with other metrics" />
            <p>
                Market cap is a very important metrics that itself can reflect a lot of the information of a company. Hence, market cap is correlated with 
                many other metrics such as sales, book value, cash flow, etc. Therefore investing in an cap-weighted portfolio can imply more 
                allocation to high quality stocks.
            </p>
            <MinorTitle label="Liquidity" />
            <p>
                Market cap is also highly correlated with liquidity, therefore a cap-weighted portfolio will emphasize more on liquid stocks. As trading liquid 
                security will incur less trading cost, the transaction cost of a cap-weighted portfolio is lower.
            </p>
            <MinorTitle label="Investment Capacity" />
            <p>
                Market cap is also highly correlated with investment capacity. Therefore, cap-weighted portfolio tends to emphasize on large investment capacity 
                securities and thus allow immense investment scale to be invested.
            </p>



            <PassageTitle label="Reference" />
            <ul>
                <li>Arnott, R. D., Hsu, J., &amp; Moore, P. (2005). Fundamental Indexation. Financial Analysts Journal, 61(2), 83-99. doi:10.2469/faj.v61.n2.2718</li>
            </ul>
        </Page>
)}}

export default HomePage;