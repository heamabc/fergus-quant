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
          <Title label="Perpectual Swap" />
          <p>
            Perpectual Swap is a very new derivatives that exists in the cryptocurrency space. Although it can work well with traditaional
            assets, it is mostly used in the cryptocurrency. One unique property of the derivative is that it will never expire and the buyer 
            and seller can exchange the return of the underlying every once in a while. 
          </p>
          <PassageTitle label="Logic Behind It" />
          <p>
            With perpectual swap, the underlying asset are never traded. Only the return of the underlying assets was exchanged between the buyer 
            and the seller. Although without the spot involving in the transaction, the price of the perpectual swap closely track the price of the 
            underlying spot.
          </p>
          <FancyBox caption="Table" alt="Table" style={{width:'600px', height:'150px'}} link="https://drive.google.com/uc?id=1P3TvonD5sFwR37VDnZjciK2PjUThPmD9" />
          <p>
            With perpectual swap, the underlying asset are never traded. Only the return of the underlying assets was exchanged between the buyer 
            and the seller. Although without the spot involving in the transaction, the price of the perpectual swap closely track the price of the 
            underlying spot.
          </p>

          <PassageTitle label='Reference' />
          
          <ul>
              <li>https://www.binance.com/en/blog/421499824684900382/a-beginners-guide-to-funding-rates</li>
              <li>https://medium.com/derivadex/what-are-perpetual-swaps-130236587df2</li>
          </ul>

          
          
          
        </Page>
)}}

export default HomePage;