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
          <PassageTitle label="Covered Call"/>
          <p>
            Buy the underlying stock and simultaneously write or sell a call option.
            <FancyBox caption="Covered Call" alt="Covered Call" link="https://drive.google.com/uc?id=1Ya5wVGFXPkijIYI06-U17yrXjjnZHUQy"  />
          </p>
          <PassageTitle label="Long Straddle"/>
          <p>
            Buy a call and buy a put option of the same underlying asset, at the same strike price and expires the same date.
            <FancyBox caption="Long Straddle" alt="Long Straddle" link="https://drive.google.com/uc?id=1WWU0BUu59Y_FHhspR4_PEhYrz2SWkk90"/>
          </p>
          <PassageTitle label="Short Straddle"/>
          <p>
            Short a call and short a put option of the same underlying asset, at the same strike price and expires the same date.
            <FancyBox caption="Short Straddle" alt="Short Straddle" link="https://drive.google.com/uc?id=1OND81oyF9qnhDvZ1_MO2uoe-SFvjFeXF"/>
          </p>
          <PassageTitle label="Long Strangle"/>
          <p>
            Buy a lower strike price put at A and buy a higher strike price call at B.
            <FancyBox caption="Long Strangle" alt="Long Strangle" link="https://drive.google.com/uc?id=1Rc4kBUShzGNsQUfJS7HymhXrwKYRDrNF" />
          </p>
          <PassageTitle label="Short Strangle"/>
          <p>
            sell a lower strike price put at A and sell a higher strike price call at B.
            <FancyBox caption="Short Strangle" alt="Short Strangle" link="https://drive.google.com/uc?id=1THXkMk5SpSuG6MokFwUq8zSx1HRbZBJh" />
          </p>
          <PassageTitle label="Long Condor"/>
          <p>
            Buy a call at A and sell call at B. Sell a call at C and buy a call at D.
            <FancyBox caption="Short Strangle" alt="Short Strangle" link="https://drive.google.com/uc?id=1LJX_YimEL7s6MzxAV2ntEpESrc9OwhYm" />
          </p>
          <PassageTitle label="Long Butterfly"/>
          <p>
            Buy a call at A, sell 2 calls at B, and buy a call at C. or {'\n'}
            Buy a put at A, sell 2 puts at B, and buy a put at C.
            <FancyBox caption="Short Strangle" alt="Short Strangle" link="https://drive.google.com/uc?id=1JA7hJno1IWKekPXXwXG8npnBmafslfj6" />
          </p>
        </Page>
)}}

export default HomePage;