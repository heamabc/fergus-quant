import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
      return (
        <Page>
          <Title label="Smart Beta" />
          <p>
            The CAPM predictes a capitalization-wegihted portfolio provides the highest Sharpe ratio. However, in 
            practice, there is a lot of limitations behind this theory.
          </p>
          <PassageTitle label="Limitation of CAPM" />
          <p>
            In practice, it is difficult to hold a portfolio with capitalization-weighted. It will involves a lot of 
            transaction cost and it is very hard to adjust the weight instantly. 
            <p>
              Also, a CW portfolio may become overly concentrated to several large market capitalization stocks. For 
              example, for the period of Dotcom Bubble, CW portfolio become highly concentrated to specific stocks and 
              sectors.
            </p>
            <p>
              There are numbers of other problems, including constraint of short-sales, taxation cost. More details about 
              the problems can be found in this <a href="http://www.opentextbooks.org.hk/ditatopic/12462">page</a>
            </p>
            Due to a variety of limitation of CAPM, investors start to investigate the performance of alternative 
            systematic equity investment strategies. 
          </p>
        </Page>
)}}

export default HomePage;