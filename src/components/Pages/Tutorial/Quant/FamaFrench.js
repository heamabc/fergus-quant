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
          <Title label="Fama French Model" />
          <p>
            In 1992, Eugene Fama and Kenneth French outlined their three-factor model to explain stock returns. It is called the Fama-French
            Model.
          </p>
          <PassageTitle label="Motivation" />
          <p>
            Capital Asset Pricing Model (CAPM) only describes asset returns in relation to their exposure to the market’s excess return through the stock’s beta and identifies any return beyond that as alpha, 
          </p>
          
        </Page>
)}}

export default HomePage;