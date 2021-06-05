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
          <Title label="Credit Default Swap (CDS)"/>
          <p>
            Credit Default Swap is contract written on the credit worthiness of a reference entity where the reference entity 
            is not a party to the transaction. CDS has a notional amount and a maturity date. CDS has two legs:
            <ul>
                <li>
                    Protection leg: if a credit event (default) occurs prior to the contracts 
                    maturity, protection seller has to compensate the protection buyer.
                </li>
                <li>
                    Premium leg: in return for assuming the credit risk of the underlying name,
                    the protection buyer pays a premium (upfront fee + periodic coupon).
                </li>
            </ul>
          </p>
          <FancyBox caption="CDS" alt="CDS" link="https://drive.google.com/uc?id=14mfkH_koeKX3WnCxN51b05x5IDRXzsQW"  />
        </Page>
)}}

export default HomePage;