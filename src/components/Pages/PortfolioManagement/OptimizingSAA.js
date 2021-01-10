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
          <PassageTitle label="Risk Parity" />
          <MinorTitle label="Problem of typical SAA" />
          <p>
              A very typical SAA is to have a 60/40 equity-bond ratio. This portfolio implies that most of the risk contributed to the 
              portfolio will come from the equity component. RP is to weight each component in the portfolio so that each accounts for
              an equal proportion of portfolio risk in order to achieve better diversification.
          </p>

          <PassageTitle label="Reference" />
          <ul>
              <li>Asness, C. S., Frazzini, A., &amp; Pedersen, L. H. (2012). Leverage Aversion and Risk Parity. Financial Analysts Journal, 68(1), 47-59. doi:10.2469/faj.v68.n1.1</li>
          </ul>
        </Page>
)}}

export default HomePage;