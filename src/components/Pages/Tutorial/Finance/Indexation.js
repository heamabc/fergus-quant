import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

import IndexationTable from '../../../Table/IndexationTable'
import IndexationTable1 from '../../../Table/IndexationTable1'
import IndexationTable2 from '../../../Table/IndexationTable2'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Indexation"/>
          <PassageTitle label="What is Index" />
          <p>
            Index is a group of asset hosen to represent a market or an asset class. For example, S&P 500, Hang Seng Index, loomberg-Barclays Global
            aggregate. There are so many indices for different purposes. Investors should look at the methodology and see if they are aligned with our 
            investment objectives.
          </p>
          <PassageTitle label="Modularity of Index"/>
          <p>
              Often, we will look at an index as a combination of different components. For example, we can look at the index as the below table.
          </p>
          <IndexationTable />
          <p>
              For Bond index, we can also look at its modules. For any other assets, we can apply the same rule. It is important to compare the modules 
              of different index when choosing the suitable index for your investment.
          </p>
          <IndexationTable1 />
          <PassageTitle label="Availability of asset outstanding" />
          <p>
              Often, index will consider the market value of the asset. For example, S&P 500 consider the market capitalization of the constitutents.
              Most of the time, index will only consider the value that is really available to the investor. Many of the company will have a portion of their 
              shares held by some major private company, which is not publicly avilable for trading. This is referred to as free-float adjustment.
          </p>
          <PassageTitle label="Weighting Scheme" />
          <p>
              Here comes the most interesting part of indexation. The weighting scheme design the allocation of the securities in an index. Consequently, this 
              will lead to sector- and/or stock-specific biases and affect the risk and return of an index. Every weighting scheme has it usefulness and it's 
              drawback, investors should choose the one that is in line with their investment objectives. The below table demonstrates some weighting scheme 
              and their pros and cons.
          </p>
          <IndexationTable2 />
          <Title label="Categories of Index" />
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

            <PassageTitle label="Style-Based Index" />
            <p>
              In a style-based index, the investment universe or investment objected will be refrained. For example, a style-based bond index may 
              constraint the investment universe to any bond issued in the US, with AA or above credit rating, etc. 
            </p>
            <p>
              A style-based index can narrow the index investment objectives and thus can be more in line with investor's specific investment objectives.
            </p>



            <PassageTitle label="Reference" />
            <ul>
                <li>Arnott, R. D., Hsu, J., &amp; Moore, P. (2005). Fundamental Indexation. Financial Analysts Journal, 61(2), 83-99. doi:10.2469/faj.v61.n2.2718</li>
            </ul>
        </Page>
      )}}

export default HomePage;